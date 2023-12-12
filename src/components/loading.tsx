import { Loader2 } from 'lucide-react';

function Loading() {
  return (
    <div className="w-full h-screen fixed left-1/2 top-1/2 z-10">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  );
}

export default Loading;
