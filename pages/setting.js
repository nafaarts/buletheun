import Router from "next/router"
import Footer from "../components/Footer"
import Layout from "../components/Layout"
import Meta from "../components/Meta"
import Navbar from "../components/Navbar"
import ResetPlayer from "../components/ResetPlayer"
import { server } from "../config"

export const getServerSideProps = async () => {
  const getSetting = await fetch(`${server}/api/setting`)
  const setting = await getSetting.json()

  return {
    props: {
      settings: setting,
    },
  }
}

export default function Setting({ settings }) {
  const handleSubmit = async (event) => {
    event.preventDefault()

    const data = {
      location: event.target.location.value,
      address: event.target.address.value ?? "",
      map_link: event.target.map_link.value ?? "",
      total_hour: event.target.total_hour.value,
      price: event.target.price.value,
    }

    const JSONdata = JSON.stringify(data)
    let endpoint = `${server}/api/setting`
    if (settings?.id !== null) {
      endpoint += `?id=${settings._id}`
    }
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    }
    const response = await fetch(endpoint, options)
    const result = await response.json()

    if (result) {
      Router.push("/")
    }
  }

  const onReset = async () => {
    let confirmation = confirm(`Yakin reset ni kan??`)
    if (confirmation) {
      const endpoint = `${server}/api/player?type=RESET`
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
      <Meta title="Settings" />
      <Navbar />
      <form className="px-5 mb-5" onSubmit={handleSubmit}>
        <h2 className="text-orange-100 mb-4 font-bold">Settings</h2>
        <input
          type="text"
          defaultValue={settings?.location}
          name="location"
          className="w-full p-2 rounded-md text-green-600 mb-3"
          placeholder="Apa nama tempatnya ?"
          required
        />
        <input
          type="text"
          defaultValue={settings?.address}
          name="address"
          className="w-full p-2 rounded-md text-green-600 mb-3"
          placeholder="Alamatnya? (ga isi gapapa)"
        />
        <input
          type="link"
          defaultValue={settings?.map_link}
          name="map_link"
          className="w-full p-2 rounded-md text-green-600 mb-3"
          placeholder="Ada Link Maps ? (ga isi gapapa)"
        />
        <input
          type="number"
          defaultValue={settings?.total_hour}
          name="total_hour"
          className="w-full p-2 rounded-md text-green-600 mb-3"
          placeholder="Berapa jam ?"
          required
        />
        <input
          type="number"
          defaultValue={settings?.price}
          name="price"
          className="w-full p-2 rounded-md text-green-600"
          placeholder="Barapa harga jadinya?"
          required
        />
        <button className="py-2 px-5 rounded-md text-orange-900 hover:bg-orange-200 bg-orange-100 text-xs mt-5">
          Submit
        </button>
      </form>
      <ResetPlayer onReset={onReset} />
      <Footer />
    </Layout>
  )
}
