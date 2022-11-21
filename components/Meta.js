import Head from "next/head"

const Meta = ({ title }) => {
  return (
    <Head>
      <title>{`${title} - BuleTheun | By Nafaarts Development`}</title>
      <meta
        name="description"
        content="BuleTheun is an app to manage PALOLAN people who's play badminton"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default Meta
