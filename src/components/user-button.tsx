import { cn } from '@/libs/utils';
import { useLogout, useUser } from '@/services/user';
import { useNavigate } from 'react-router-dom';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './ui/alert-dialog';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

function UnauthenticatedUserButton() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row space-x-2">
      <Button size="sm" onClick={() => navigate('/auth/login')}>
        Sign In
      </Button>
      <Button variant="outline" size="sm" onClick={() => navigate('/auth/register')}>
        Sign Up
      </Button>
    </div>
  );
}

function UserButton() {
  const navigate = useNavigate();
  const { data: user, isLoading } = useUser();
  const logout = useLogout();

  if (isLoading || !user) {
    return <UnauthenticatedUserButton />;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="w-8 h-8 outline-none ring-0">
          <AvatarImage className="outline-none" src={user.avatar} alt={user.name} />
          <AvatarFallback>
            <img src="https://robohash.org/C4Z.png?set=set1&size=150x150" alt="avatar-default" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => navigate('/app/profile')}>Profile</DropdownMenuItem>
        <DropdownMenuItem onClick={() => navigate('/app/settings')}>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <div
              className={cn(
                'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
              )}>
              Sign Out
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Sign Out</AlertDialogTitle>
              <AlertDialogDescription>Are you sure you want to sign out?</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => logout.mutate({})}>Confirm</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserButton;
