import { Button } from '@/components/ui/button';
import { useNavigate, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  const { statusText, message } = error as any;

  return (
    <div className="container lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
      <div className="">
        <h1 className="my-2 font-bold text-3xl">Opps!</h1>
        <p className="my-2 text-gray-600 dark:text-gray-300">Sorry, an unexpected error has occurred.</p>
        <p className="my-2 text-gray-600 dark:text-gray-300">{statusText || message}</p>
        <Button type="button" className="mt-8" onClick={() => navigate('/')}>
          Go Home
        </Button>
      </div>
      <div>
        <img src="/images/error-image.png" className="w-[400px] object-cover" alt="error" />
      </div>
    </div>
  );
}
