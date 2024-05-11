import Image from "next/image"
import spinner from "../../public/spinner.svg"
const loading = () => {
 
  return (
    <div className="flex justify-center mt-4">
      {spinner && <Image src={spinner} alt="Loading..." />}
    </div>
  )
}

export default loading