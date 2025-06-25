'use client';

import Button from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

const RegisterForm: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <Card>
          <CardHeader>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900">
                Create your account
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Or{' '}
                <Link
                  href="/auth/login"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  sign in to your existing account
                </Link>
              </p>
            </div>
          </CardHeader>

          <CardContent>
            <form className="space-y-4">
              <Input
                label="Full name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                autoComplete="name"
              />

              <Input
                label="Email address"
                type="email"
                name="email"
                placeholder="Enter your email"
                autoComplete="email"
              />

              <Input
                label="Password"
                type="password"
                name="password"
                placeholder="Create a password"
                autoComplete="new-password"
                helperText="Must be at least 6 characters"
              />

              <Input
                label="Confirm password"
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                autoComplete="new-password"
              />

              <Button type="submit" className="w-full">
                Create account
                {/* {loading ? 'Creating account...' : 'Create account'} */}
              </Button>
            </form>
          </CardContent>

          <CardFooter>
            <div className="text-center w-full">
              <Link
                href="/"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                ← Back to home
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default RegisterForm;
