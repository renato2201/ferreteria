import Link from "next/link";

interface Props {
	name: string;
	href: string;
}

export const NavBarItem = ({ href, name }: Props) => {
	return (
		<Link
			className="text-sm font-medium hover:underline underline-offset-4"
			href={href}
		>
			{name}
		</Link>
	);
};
