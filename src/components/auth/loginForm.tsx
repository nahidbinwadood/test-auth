'use client';

import type React from 'react';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import Button from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const LoginForm = () => {
  //   const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <Card>
          <CardHeader>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900">
                Sign in to your account
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Or{' '}
                <Link
                  href="/auth/register"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  create a new account
                </Link>
              </p>
            </div>
          </CardHeader>

          <CardContent>
            <form className="space-y-4">
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
                placeholder="Enter your password"
                autoComplete="current-password"
              />

              <Button
                type="submit"
                className="w-full"
                // loading={loading}
                // disabled={loading}
              >
                Sign in
                {/* {loading ? 'Signing in...' : 'Sign in'} */}
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

export default LoginForm;
