import { cn } from '@/libs/utils';

interface PageHeaderProps {
  heading: string;
  text?: string;
  children?: React.ReactNode;
}

export function PageHeader({ heading, text, children }: PageHeaderProps) {
  return (
    <div className="flex items-center justify-between px-2">
      <div className="grid gap-1">
        <h1 className="font-heading text-3xl md:text-4xl">{heading}</h1>
        {text && <p className="text-lg text-muted-foreground">{text}</p>}
      </div>
      {children}
    </div>
  );
}

interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export function PageContainer({ children, className, ...props }: PageContainerProps) {
  return (
    <div className={cn('container grid items-center gap-6 pb-8 pt-6 md:py-10', className)} {...props}>
      {children}
    </div>
  );
}
