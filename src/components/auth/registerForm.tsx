'use client';

import Button from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';

import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '../ui/input';
import { registerSchema } from '@/app/schemas/schemas';
import { zodResolver } from '@hookform/resolvers/zod';

type Inputs = {
  full_name: string;
  email: string;
  password: string;
  confirm_password: string;
};
const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Inputs>({
    resolver: zodResolver(registerSchema),
    mode: 'onChange',
  });

  const password = watch('password');
  // handlers:
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };
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
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <Input
                {...register('full_name')}
                type="text"
                label="Full name"
                error={errors.full_name?.message}
                placeholder="Enter your full name"
                autoComplete="name"
              />

              <Input
                {...register('email')}
                type="email"
                label="Email"
                placeholder="Enter your email"
                error={errors.email?.message}
                autoComplete="email"
              />

              <Input
                {...register('password')}
                placeholder="Enter your password"
                label="Password"
                type="password"
                error={errors.password?.message}
                autoComplete="new-password"
                helperText={
                  !errors.password?.message && password?.length > 0
                    ? 'Looks good so far!'
                    : 'Must contain at least 8 characters, uppercase, lowercase, and special character'
                }
              />

              <Input
                {...register('confirm_password')}
                label="Confirm Password"
                type="password"
                placeholder="Confirm your password"
                error={errors.confirm_password?.message}
                autoComplete="new-password"
              />

              <Button type="submit" className="w-full">
                Create Account
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
