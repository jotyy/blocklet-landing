import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { cn } from '@/libs/utils';
import { useLogin } from '@/services/user';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import z from 'zod';

import { Form, FormField, FormLabel, FormMessage } from './ui/form';

const userAuthSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z.string().min(8, { message: 'Your password must be at least 8 characters long.' }),
});

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type FormData = z.infer<typeof userAuthSchema>;

export default function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const navigate = useNavigate();
  const form = useForm<FormData>({
    resolver: zodResolver(userAuthSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { mutate, isPending } = useLogin({
    mutationKey: ['login'],
    onSuccess: () => {
      toast({
        title: 'Welcome back!',
        variant: 'default',
      });
      navigate('/');
    },
    onError: () => {
      toast({
        title: 'Something went wrong.',
        description: 'Your sign in request failed. Please try again.',
        variant: 'destructive',
      });
    },
  });

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <Form {...form}>
        <form
          className="grid gap-4"
          onSubmit={form.handleSubmit(({ email, password }) =>
            mutate({
              email,
              password,
            }),
          )}>
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <>
                <FormLabel>Email</FormLabel>
                <Input
                  placeholder="example@mail.com"
                  type="email"
                  autoComplete="email"
                  disabled={isPending}
                  {...field}
                />
                <FormMessage />
              </>
            )}
          />

          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <>
                <FormLabel>Password</FormLabel>
                <Input
                  placeholder="Password"
                  type="password"
                  autoComplete="current-password"
                  disabled={isPending}
                  {...field}
                />
                <FormMessage />
              </>
            )}
          />

          <Button type="submit" disabled={isPending}>
            {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Sign In
          </Button>
        </form>
      </Form>
    </div>
  );
}
