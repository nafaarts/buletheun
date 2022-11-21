import { useRef } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import { motion, useCycle } from "framer-motion"
import { Navigation } from "./Navigation"
import { useDimensions } from "../hooks/use-dimentions"

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at -40px -40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at -40px -40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
}

const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  return (
    <>
      <div className="flex justify-between p-5">
        <Image
          src={require("../public/Logo.svg")}
          alt="BuleTheun Logo"
          height={40}
        />
        <motion.button
          onClick={() => toggleOpen()}
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? (
            <Image
              src={require("../public/Close.svg")}
              alt="Menu"
              height={40}
            />
          ) : (
            <Image src={require("../public/Menu.svg")} alt="Menu" height={40} />
          )}
        </motion.button>
      </div>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        className="absolute h-screen bg-orange-100 w-2/3 top-0 px-5 py-10 shadow-lg flex justify-center items-center z-10"
        variants={sidebar}
      >
        <Navigation />
      </motion.nav>
    </>
  )
}

export default Navbar
