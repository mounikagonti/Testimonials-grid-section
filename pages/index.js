import Head from "next/head"
import Grids from "../components/Grids"
// import Image from "next/image"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Testimonial Grid</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Grids />
    </div>
  )
}
