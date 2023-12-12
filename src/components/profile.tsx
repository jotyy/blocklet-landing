import { User } from '@/services/user';

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface ProfileProps {
  user: User;
}

function Profile({ user }: ProfileProps) {
  // display user info responsively
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full max-w-sm">
        <div className="flex flex-col items-center justify-center w-32 h-32 overflow-hidden rounded-full">
          <Avatar className="w-full h-full">
            <AvatarImage src={user.avatar} alt="avatar" />
            <AvatarFallback>
              <img src="https://robohash.org/C4Z.png?set=set1&size=150x150" alt="avatar-default" />
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col items-center justify-center w-full mt-4">
          <h1 className="text-2xl font-bold text-center">{user.name}</h1>
          <p className="text-sm text-center">{user.email}</p>
        </div>
        {/* bio */}
        <div className="flex flex-col items-center justify-center w-full mt-4">
          <p className="text-sm text-center">{user.bio}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
