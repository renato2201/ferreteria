import {
  AdminSideBar,
  MobileAdminSideBar,
  ProfilePicture,
  UserMenu,
} from "@/components/shared";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { Bell } from "lucide-react";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    redirect("/login");
  }
  return (
    <div className="">
      {/* Header */}
      <header className="w-full bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-between ">
        <MobileAdminSideBar />
        <ProfilePicture />
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full" type="button">
            <Bell className="h-5 w-5 text-gray-600" />
          </button>
          <UserMenu />
        </div>
      </header>
      <div className="flex min-h-screen">
        <AdminSideBar />
        <div className="w-full p-5 bg-slate-200 ">{children}</div>
      </div>
    </div>
  );
}
