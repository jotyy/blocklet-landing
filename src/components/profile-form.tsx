import { User, useUpdateProfile } from '@/services/user';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from './ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from './ui/use-toast';

const profileFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'Username must be at least 2 characters.',
    })
    .max(30, {
      message: 'Username must not be longer than 30 characters.',
    }),
  email: z
    .string({
      required_error: 'Please select an email to display.',
    })
    .email(),
  bio: z.string().max(160).min(4).optional(),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

interface ProfileFormProps {
  defaultUser: User;
}

export default function ProfileForm({ defaultUser: user }: ProfileFormProps) {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      ...user,
    },
  });

  const { mutate: updateProfile, isPending } = useUpdateProfile({
    onSuccess: () => {
      toast({
        title: 'Profile updated!',
        variant: 'default',
      });
    },
    onError: () => {
      toast({
        title: 'Something went wrong.',
        description: 'Your profile update request failed. Please try again.',
        variant: 'destructive',
      });
    },
  });

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((data) => {
            updateProfile({
              id: user.id,
              name: data.name,
              email: data.email,
              bio: data.bio,
            });
          })}
          className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="jotyy" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name. It can be your real name or a pseudonym. You can only change this
                  once every 30 days.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <Input placeholder="example@mail.com" type="email" autoComplete="email" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Textarea placeholder="Tell us a little bit about yourself" className="resize-none" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={isPending}>
            {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Update profile
          </Button>
        </form>
      </Form>
    </div>
  );
}
