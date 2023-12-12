import { Icons } from '@/components/icons';
import { buttonVariants } from '@/components/ui/button';
import UserRegisterForm from '@/components/user-register-form';
import { cn } from '@/libs/utils';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RegisterPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link to="/" className={cn(buttonVariants({ variant: 'ghost' }), 'absolute left-4 top-4 md:left-8 md:top-8')}>
        <>
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back
        </>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Icons.Logo className="mx-auto h-12 w-12" />
          <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
          <p className="text-sm text-muted-foreground">Enter your email below to create your account</p>
        </div>
        <UserRegisterForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          By clicking continue, you agree to our{' '}
          <Link to="/terms" className="hover:text-brand underline underline-offset-4">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link to="/privacy" className="hover:text-brand underline underline-offset-4">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
