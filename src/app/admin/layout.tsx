import { Sidebar } from "@/components/shared";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, User } from "lucide-react";

export default function AdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="">
			{/* Header */}
			<header className="w-full bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-between ">
				<div className="flex items-center space-x-4">
					<Avatar>
						<AvatarImage
							src="/placeholder.svg?height=32&width=32"
							alt="Pablo Garza"
						/>
						<AvatarFallback>PG</AvatarFallback>
					</Avatar>
					<div>
						<h2 className="text-sm font-semibold">Pablo Garza</h2>
						<p className="text-xs text-gray-500">Administrator</p>
					</div>
				</div>
				<div className="flex items-center space-x-4">
					<button className="p-2 hover:bg-gray-100 rounded-full" type="button">
						<Bell className="h-5 w-5 text-gray-600" />
					</button>
					<button className="p-2 hover:bg-gray-100 rounded-full" type="button">
						<User className="h-5 w-5 text-gray-600" />
					</button>
				</div>
			</header>
			<div className="flex min-h-screen">
				<Sidebar />
				<div className="w-full p-5 bg-slate-200 ">{children}</div>
			</div>
		</div>
	);
}
