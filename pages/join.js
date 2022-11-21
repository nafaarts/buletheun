import Router from "next/router"
import { useState } from "react"
import Footer from "../components/Footer"
import Layout from "../components/Layout"
import Meta from "../components/Meta"
import Navbar from "../components/Navbar"
import { server } from "../config"

export default function Join() {
  const [name, setName] = useState("")

  const onSubmit = async () => {
    if (name === "") {
      alert("Gaada nama wak!")
      return
    }

    let confirmation = confirm(
      `Ko ${name} Betol ni ikot kan?? jgn dah list nama ga pigi nanti :|`,
    )

    if (confirmation) {
      alert("Oke Mantap!")
      const data = {
        player: name,
      }
      const JSONdata = JSON.stringify(data)
      const endpoint = `${server}/api/player`
      const options = {
        method: "POST",
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
    } else {
      return
    }
  }

  return (
    <Layout>
      <Meta title="Join" />
      <Navbar />
      <div className="flex justify-center items-center w-full h-2/3">
        <div className="w-3/4 text-center">
          <h2 className="text-orange-100 mb-4 font-bold">
            Masukin nama ko wak
          </h2>
          <input
            type="text"
            className="w-full p-2 rounded-md text-green-600 text-center"
            placeholder="Kamu nanyee ?"
            onChange={(text) => setName(text.target.value)}
          />
          <button
            onClick={onSubmit}
            className="py-2 px-5 rounded-md text-orange-900 hover:bg-orange-200 bg-orange-100 text-xs mt-5"
          >
            Submit
          </button>
        </div>
      </div>
      <Footer />
    </Layout>
  )
}
