import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

export const MenuItem = ({ to, title }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={to}>
        <div className="p-5 hover:underline hover:font-bold text-orange-800">
          {title}
        </div>
      </Link>
    </motion.li>
  )
}
