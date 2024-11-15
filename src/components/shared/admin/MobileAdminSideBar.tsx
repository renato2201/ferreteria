"use client";
import { adminMenu } from "@/menus/adminMenu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export const MobileAdminSideBar = () => {
  const pathname = usePathname();
  const { data: session } = authClient.useSession();

  return (
    <div className="flex lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="lg:hidden" size="icon">
            <Menu />
            {/* <span className="sr-only">Toggle Menu</span> */}
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <ScrollArea className="h-full py-6 px-3">
            <div className=" flex items-center space-x-4 mb-4">
              <Avatar>
                <AvatarImage
                  src={session?.user?.image}
                  alt="Pablo Garza"
                  className="rounded-full h-10 w-10"
                />
                <AvatarFallback>{session?.user?.name?.[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-sm font-semibold">{session?.user?.name}</h2>
                <p className="text-xs text-gray-500">{session?.user?.email}</p>
              </div>
            </div>
            <nav className="space-y-2">
              {adminMenu.map((item) => (
                <Button
                  key={item.href}
                  asChild
                  variant={pathname === item.href ? "default" : "ghost"}
                  className="w-full justify-start"
                >
                  <Link href={item.href}>
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.label}
                  </Link>
                </Button>
              ))}
            </nav>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  );
};
