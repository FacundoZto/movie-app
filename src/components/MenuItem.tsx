import Link from "next/link"

const MenuItem = ({title, address, Icon}: {title: string, address: string, Icon: any}) => {
  return (
    <Link href={address} className="hover:text-teal-500">
      <Icon className="text-2xl sm:hidden" />
      <p className="uppercase hidden sm:inline text-sm" >{title}</p>
    </Link>
  )
}

export default MenuItem