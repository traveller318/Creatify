"use client";

import { useOrganization } from "@clerk/nextjs";
import { use } from "react";
import EmptyOrg from "./_components/empty-org";
import BoardList from "./_components/board-list";

interface DashboardPageProps {
  searchParams: Promise<{
    search?: string;
    favorites?: string;
  }>;
}

const DashboardPage = ({ searchParams }: DashboardPageProps) => {
  const { organization } = useOrganization();
  const params = use(searchParams);

  return (
    <div className="flex-1 h-[calc(100%-80px)] p-5">
      {!organization ? (
        <EmptyOrg />
      ) : (
        <BoardList orgId={organization.id} query={params} />
      )}
    </div>
  );
};

export default DashboardPage;