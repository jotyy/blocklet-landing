import { PageContainer, PageHeader } from '@/components/container';
import Loading from '@/components/loading';
import Profile from '@/components/profile';
import { Button } from '@/components/ui/button';
import { useUser } from '@/services/user';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function ProfilePage() {
  const navigate = useNavigate();
  const { data, isLoading } = useUser();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <PageContainer>
      <PageHeader heading="Profile">
        <Button type="button" variant="outline" size="sm" onClick={() => navigate('/app/settings')}>
          Edit
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </PageHeader>
      {data && <Profile user={data} />}
    </PageContainer>
  );
}

export default ProfilePage;
