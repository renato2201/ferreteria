import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { auth } from "@/auth";
import { headers } from "next/headers";

export const ProfilePicture = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const image = session?.user?.image;
  return (
    <div className=" items-center space-x-4 hidden lg:flex">
      <Avatar>
        <AvatarImage src={image} alt="Pablo Garza" />
        <AvatarFallback>PG</AvatarFallback>
      </Avatar>
      <div>
        <h2 className="text-sm font-semibold">{session?.user?.name}</h2>
        <p className="text-xs text-gray-500">{session?.user?.email}</p>
      </div>
    </div>
  );
};
