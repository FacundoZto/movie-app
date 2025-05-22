import Link from "next/link"

type MenuItemProps = {
  title: string;
  address: string;
  Icon: any;
}

const MenuItem = ({ title, address, Icon }: MenuItemProps) => {
  return (
    <Link href={address} className="hover:text-teal-500">
      <Icon className="text-2xl sm:hidden" />
      <p className="uppercase font-medium hidden sm:inline text-sm" >{title}</p>
    </Link>
  )
}

export default MenuItem