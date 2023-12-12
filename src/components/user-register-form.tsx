import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { cn } from '@/libs/utils';
import { useRegister } from '@/services/user';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import z from 'zod';

import { Form, FormField, FormLabel, FormMessage } from './ui/form';

const userRegisterSchema = z
  .object({
    name: z.string().min(3, { message: 'Your name must be at least 3 characters long.' }).max(20),
    email: z.string().email({ message: 'Please enter a valid email address.' }),
    password: z.string().min(8, { message: 'Your password must be at least 8 characters long.' }),
    confirmPassword: z.string().min(8, { message: 'Your password must be at least 8 characters long.' }),
  })
  .refine(
    (values) => {
      return values.password === values.confirmPassword;
    },
    {
      message: 'Passwords must match!',
      path: ['confirmPassword'],
    },
  );

interface UserRegisterFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type FormData = z.infer<typeof userRegisterSchema>;

export default function UserRegisterForm({ className, ...props }: UserRegisterFormProps) {
  const navigate = useNavigate();
  const form = useForm<FormData>({
    resolver: zodResolver(userRegisterSchema),
  });
  const { mutate, isPending } = useRegister({
    mutationKey: ['register'],
    onSuccess: () => {
      toast({
        title: 'Registration successful!',
        variant: 'default',
      });
      navigate('/');
    },
    onError: () => {
      toast({
        title: 'Something went wrong.',
        description: 'Your sign up request failed. Please try again.',
        variant: 'destructive',
      });
    },
  });

  function onSubmit(data: FormData) {
    mutate({
      name: data.name,
      email: data.email,
      password: data.password,
    });
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <Form {...form}>
        <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <>
                <FormLabel>Name</FormLabel>
                <Input placeholder="jotyy" maxLength={20} type="text" disabled={isPending} {...field} />
                <FormMessage />
              </>
            )}
          />
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
                  maxLength={16}
                  autoComplete="current-password"
                  disabled={isPending}
                  {...field}
                />
                <FormMessage />
              </>
            )}
          />

          <FormField
            name="confirmPassword"
            control={form.control}
            render={({ field }) => (
              <>
                <FormLabel>Confirm Password</FormLabel>
                <Input
                  placeholder="Confirm Password"
                  type="password"
                  maxLength={16}
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
            Sign Up
          </Button>
        </form>
      </Form>
    </div>
  );
}
