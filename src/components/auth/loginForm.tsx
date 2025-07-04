'use client';

import Button from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  useProfileDataQuery,
  useUserLoginMutation,
} from '@/features/auth/auth-api';
import { setToken } from '@/features/auth/auth-slice';
import { useAppDispatch, useAppSelector } from '@/features/redux-hook';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { signIn } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

type Inputs = {
  email: string;
  password: string;
};
const LoginForm = () => {
  //   const router = useRouter();
  const { accessToken } = useAppSelector((state) => state.authSlice);
  const { data: profileData } = useProfileDataQuery(null, {
    skip: !accessToken,
  });

  const dispatch = useAppDispatch();
  const { replace } = useRouter();
  const [loginMutation, { isLoading }] = useUserLoginMutation(undefined);
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<Inputs>();

  // useEffects:
  useEffect(() => {
    if (accessToken && profileData) {
      signIn('credentials', {
        user: JSON.stringify(profileData),
        redirect: false,
      }).then((callback) => {
        if (callback?.error) {
          toast.error(callback.error);
        } else {
          toast.success('login successful');
          replace('/');
        }
      });
    }
  }, [accessToken, profileData, replace]);

  // handlers:
  const onSubmit = async (data: Inputs) => {
    console.log(data);
    try {
      const response = await loginMutation(data).unwrap();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDemoLogin = async (email: string, password: string) => {
    try {
      const response = await loginMutation({ email, password }).unwrap();
      if (response?.data?.token) {
        dispatch(setToken(response?.data?.token));
      }
    } catch (error) {
      toast.error('Login Failed');
      console.log(error);
    }
  };
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
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <Input
                {...register('email')}
                label="Email address"
                type="email"
                name="email"
                placeholder="Enter your email"
                autoComplete="email"
              />
              <Input
                {...register('password')}
                label="Password"
                type="password"
                name="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                helperText="Must be at least 6 characters"
              />

              <Button
                onClick={() => handleDemoLogin('admin@demo.com', '123456')}
                type="button"
                className="w-full"
              >
                {isLoading ? 'Loading...' : 'Login as Admin'}
              </Button>
              <Button
                onClick={() => handleDemoLogin('moderator@demo.com', '123456')}
                type="button"
                className="w-full"
              >
                {isLoading ? 'Loading...' : 'Login as Moderator'}
              </Button>
              <Button
                onClick={() => handleDemoLogin('studio@demo.com', '123456')}
                type="button"
                className="w-full"
              >
                {isLoading ? 'Loading...' : 'Login as Studio Partner'}
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
