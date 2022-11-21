import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Layout from "../components/Layout"
import Meta from "../components/Meta"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    setInterval(() => {
      setLoading(false)
    }, 3000)
  }, [])

  if (loading) {
    return (
      <Layout className="flex justify-center items-center">
        <Meta title="Beranda" />
        <Image src={require("../public/Logo.svg")} alt="logo" />
      </Layout>
    )
  }

  return (
    <AnimatePresence>
      <motion.div
        key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        variants={{
          initialState: {
            opacity: 0,
            // clipPath: "polygon (00, 100% 0, 100% 100%, 0% 100%)",
          },
          animateState: {
            opacity: 1,
            // clipPath: "polygon (00, 100% 0, 100% 100%, 0% 100%)",
          },
          exitState: {
            opacity: 0,
            // clipPath: "polygon (50% 0, 50% 0, 50% 100%, 50% 100%)",
          },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  )
}

export default MyApp
