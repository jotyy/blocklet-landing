import { PageContainer, PageHeader } from '@/components/container';
import ProfileForm from '@/components/profile-form';
import { Skeleton } from '@/components/ui/skeleton';
import { useUser } from '@/services/user';

function SettingsPage() {
  const { data: user, isLoading } = useUser();

  if (isLoading) {
    return (
      <PageContainer>
        <PageHeader heading="Settings" />
        <div className="flex flex-col w-full space-y-6">
          <div className="flex flex-col space-y-2">
            <Skeleton className="h-8 w-[80px]" />
            <Skeleton className="h-8 w-full" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-8 w-[80px]" />
            <Skeleton className="h-8 w-full" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-8 w-[80px]" />
            <Skeleton className="h-8 w-full" />
          </div>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <PageHeader heading="Settings" />
      {user && <ProfileForm defaultUser={user} />}
    </PageContainer>
  );
}

export default SettingsPage;
