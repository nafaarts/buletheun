import Router from "next/router"
import Duration from "../components/Duration"
import Footer from "../components/Footer"
import Layout from "../components/Layout"
import Location from "../components/Location"
import Meta from "../components/Meta"
import Navbar from "../components/Navbar"
import Pay from "../components/Pay"
import Players from "../components/Players"
import { server } from "../config"

export const getServerSideProps = async () => {
  const getPlayer = await fetch(`${server}/api/player`)
  const players = await getPlayer.json()

  const getSetting = await fetch(`${server}/api/setting`)
  const setting = await getSetting.json()

  return {
    props: {
      players: players,
      location: setting?.location ?? "",
      address: setting?.address ?? "",
      map_link: setting?.map_link ?? "",
      total_hour: setting?.total_hour ?? 0,
      price: setting?.price ?? 0,
    },
  }
}

export default function Home({
  players,
  location,
  address,
  map_link,
  total_hour,
  price,
}) {
  const onDelete = async (id, name) => {
    let confirmation = confirm(`Jeh, ga jadi ikot ${name} ??`)
    if (confirmation) {
      alert("Okelah, sombsliee!")
      const endpoint = `${server}/api/player?id=${id}&type=SINGLE`
      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
      const response = await fetch(endpoint, options)
      const result = await response.json()
      if (result) {
        Router.push("/")
      }
    } else {
      return
    }
  }

  return (
    <Layout>
      <Meta title="Beranda" />
      <Navbar />
      <Players players={players} onDelete={onDelete} />
      <Location location={location} address={address} link={map_link} />
      <Duration hour={total_hour} price={price} />
      <Pay total={players.length} price={price} />
      <Footer />
    </Layout>
  )
}
