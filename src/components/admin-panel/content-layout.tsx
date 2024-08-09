import { Navbar } from "@/components/admin-panel/navbar";

interface ContentLayoutProps {
  active: string;
  children: React.ReactNode;
}

export function ContentLayout({ active, children }: ContentLayoutProps) {
  return (
    <div>
      <Navbar active={active} />
      <div className="container pt-8 pb-8 px-4 sm:px-8">{children}</div>
    </div>
  );
}
