import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';
import { routes } from './config/routes';

function extractLinks(obj: any) {
  let links: any = [];

  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      links.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      links = links.concat(extractLinks(obj[key]));
    } else if (typeof obj[key] === 'function') {
      // If it's a function, you can call it with a sample ID to get a sample link
      links.push(obj[key]());
    }
  }

  return links;
}
const adminRoutes = extractLinks(routes.privateRoutes.admin);
const moderatorRoutes = extractLinks(routes.privateRoutes.moderator);
const studioPartnerRouters = extractLinks(
  routes.privateRoutes['studio-partner']
);
const middleware = withAuth(
  function middleware(request) {
    const token = request.nextauth.token;
    const pathname = request.nextUrl.pathname;

    // check routes
    const isAdminRoute = adminRoutes.includes(pathname);
    const isModeratorRoute = moderatorRoutes.includes(pathname);
    const isStudioPartnerRoute = studioPartnerRouters.includes(pathname);

    if (token) {
      if (pathname == routes.publicRoutes.login) {
        return NextResponse.redirect(new URL('/', request.nextUrl));
      }
      if (token.role == 'admin' && (isModeratorRoute || isStudioPartnerRoute)) {
        return NextResponse.redirect(
          new URL(routes.privateRoutes.admin.dashboard, request.nextUrl)
        );
      }
      if (token.role == 'moderator' && (isAdminRoute || isStudioPartnerRoute)) {
        return NextResponse.redirect(
          new URL(routes.privateRoutes.moderator.dashboard, request.nextUrl)
        );
      }
      if (
        token.role == 'studio-partner' &&
        (isAdminRoute || isModeratorRoute)
      ) {
        return NextResponse.redirect(
          new URL(
            routes.privateRoutes['studio-partner'].dashboard,
            request.nextUrl
          )
        );
      }
    }
  },
  {
    callbacks: {
      authorized: () => true,
    },
  }
);

export default middleware;
