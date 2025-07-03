import React from 'react';

const CtaSection = () => {
  return (
    <section className="bg-gray-100 py-24">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of users who trust our authentication system
          </p>
          {/* {!user && (
              <Link href="/auth/register">
                <Button size="lg">Create Your Account</Button>
              </Link>
            )} */}
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
