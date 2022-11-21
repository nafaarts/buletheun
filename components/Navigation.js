import * as React from "react"
import { motion } from "framer-motion"
import { MenuItem } from "./MenuItem"

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const menus = [
  {
    title: "BERANDA",
    url: "/",
  },
  {
    title: "IKOTT!!",
    url: "/join",
  },
  {
    title: "UBAH JADWAL",
    url: "/setting",
  },
  {
    title: "BIKIN TEAM DULU",
    url: "/team",
  },
]

export const Navigation = () => (
  <motion.ul variants={variants} className="transition-all">
    {menus.map((menu, index) => (
      <MenuItem to={menu.url} title={menu.title} key={index} />
    ))}
  </motion.ul>
)
