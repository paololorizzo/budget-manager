import Link from "next/link";

import PlaceholderContent from "@/components/demo/placeholder-content";
import { ContentLayout } from "@/components/admin-panel/content-layout";

export default function DashboardPage() {
  return (
    <ContentLayout active="dashboard">
      <div>ciao</div>
    </ContentLayout>
  );
}
