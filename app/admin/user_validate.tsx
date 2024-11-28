"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { redirect } from "next/navigation";

const UserClientComponent = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (isLoaded && user?.publicMetadata?.role !== 'user') {
      redirect("/"); // Redirect if the user is not a regular user
    }
  }, [isLoaded, user]);

  return <>{user?.publicMetadata?.role === 'user' && children}</>;
};

export default UserClientComponent;
