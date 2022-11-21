import Image from "next/image"
import Link from "next/link"

const Location = ({ location, address = "", link = "" }) => {
  return (
    <div className="px-5 mb-4">
      <small className="text-orange-100 text-xs block mb-4">
        Dimana Main Minggu Ini ?{" "}
      </small>
      <div className="p-3 bg-orange-100 rounded-md text-xs flex justify-between">
        <div className="flex flex-col text-orange-900">
          <span className="font-bold">{location}</span>
          <small>{address}</small>
        </div>
        {link && (
          <Link
            target="_blank"
            href={link}
            className="p-2 border border-green-600 text-green-600 rounded text-xs flex gap-2 items-center"
          >
            <Image
              src={require("../public/Direction.svg")}
              alt="Direction"
              width={15}
            />
            Petunjuk Arah
          </Link>
        )}
      </div>
    </div>
  )
}

export default Location
