import Footer from "../components/Footer"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import { server } from "../config"

export const getServerSideProps = async () => {
  const getPlayer = await fetch(`${server}/api/player`)
  const players = await getPlayer.json()

  return {
    props: {
      players: players,
    },
  }
}

const disorder = (arr, entropy) => {
  var disorderedArr = arr.sort(function (a, b) {
    return Math.floor(Math.random() * entropy)
  })

  return disorderedArr
}

const TeamCard = ({ total, players }) => {
  let teams = []
  let start = 0
  for (let i = 0; i < total; i++) {
    teams.push(
      <div className="bg-orange-100 mb-2 py-3 px-8 rounded-md flex items-center justify-between">
        <span className="font-bold text-orange-900 w-1/3">
          {players[start++]}
        </span>
        <small className="text-orange-500 w-1/3 text-center">with</small>
        <span className="font-bold text-orange-900 w-1/3 text-right">
          {players[start++]}
        </span>
      </div>,
    )
  }
  return <div className="m-5">{teams}</div>
}

const Team = ({ players }) => {
  let disorderedPlayer = disorder(
    players.map((player) => player.name),
    players.length,
  )

  const gapPlayer = players.length % 2
  const totalTeam =
    gapPlayer === 1 ? (players.length - 1) / 2 : players.length / 2

  return (
    <Layout>
      <Navbar />
      <h2 className="text-center text-orange-100 font-bold text-lg">
        The Awesome Teams
      </h2>
      <TeamCard total={totalTeam} players={disorderedPlayer} />
      {gapPlayer !== 0 && (
        <div className="bg-yellow-300 m-5 px-8 py-3 rounded-md flex justify-between items-center text-orange-900">
          <small>Nanti gantian ya ngab..</small>
          <span className="font-bold">
            {disorderedPlayer[disorderedPlayer.length - 1]}
          </span>
        </div>
      )}
      <div className="flex justify-evenly m-5 p-3 bg-orange-300 rounded-md text-orange-900">
        <p>
          Total Team : <b>{totalTeam}</b>
        </p>
        <p>
          Gap Player : <b>{gapPlayer}</b>
        </p>
      </div>
      <Footer />
    </Layout>
  )
}

export default Team
