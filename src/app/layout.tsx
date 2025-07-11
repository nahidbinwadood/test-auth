import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ReduxProvider from '@/components/providers/redux-provider';
import { Toaster } from 'react-hot-toast';
import AuthProvider from '@/components/providers/auth-provider';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/auth-options';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Test Auth',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ReduxProvider>
          <AuthProvider session={session}>
            <Toaster />
            {children}
          </AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
