import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

interface MainShellProps {
  children: React.ReactNode;
}

export function MainShell({ children }: MainShellProps) {
  return (
    <>
      <SiteHeader />
      <div className="flex min-h-screen flex-col">{children}</div>
      <SiteFooter />
    </>
  );
}
