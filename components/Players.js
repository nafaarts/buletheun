import { motion } from "framer-motion"

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const liVariants = {
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

const Players = ({ players, onDelete }) => {
  return (
    <div className="px-5 mb-4">
      <small className="text-orange-100 text-xs block mb-4">
        Yang Main Minggu Ini :{" "}
      </small>
      {players.length > 0 ? (
        <motion.ul
          variants={variants}
          className={
            "grid gap-2 " +
            (players.length <= 3 ? "grid-cols-1" : "grid-cols-2")
          }
        >
          {players.map((player, index) => (
            <motion.li
              key={player._id}
              variants={liVariants}
              className="p-2 bg-orange-100 rounded-md text-xs flex justify-between  text-orange-900"
            >
              <span>{player.name}</span>
              <button
                className="font-bold px-1 text-orange-400"
                onClick={() => onDelete(player._id, player.name)}
              >
                x
              </button>
            </motion.li>
          ))}
        </motion.ul>
      ) : (
        <div className="text-xs p-3 bg-orange-100 rounded-md text-center text-orange-900">
          Gaada Orang cok!
        </div>
      )}
    </div>
  )
}

export default Players
