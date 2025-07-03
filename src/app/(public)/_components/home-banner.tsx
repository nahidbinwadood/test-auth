'use client';
import Button from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import { motion } from 'motion/react';

const HomeBanner = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto py-24">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Welcome to MyApp
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-blue-100"
          >
            A modern authentication system built with Next.js, TypeScript, and
            Tailwind CSS v4
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/auth/register">
              <Button size="lg" variant="secondary">
                Get Started
              </Button>
            </Link>
            <Link href="/auth/login">
              <Button
                size="lg"
                variant="outline"
                className="bg-purple-500 text-white font-medium hover:bg-white hover:text-blue-600"
              >
                Sign In
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
