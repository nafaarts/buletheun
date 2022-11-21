import Image from "next/image"

const Footer = () => {
  return (
    <footer className="absolute bottom-7 w-full flex justify-center">
      <div className="text-center">
        <small className="text-orange-100 font-light mb-2 block">
          Powered By
        </small>
        <Image
          src={require("../public/Nafaarts.png")}
          alt="Nafaarts"
          height={15}
        />
      </div>
    </footer>
  )
}

export default Footer
