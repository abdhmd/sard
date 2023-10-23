'use client'

import { getBlog } from "../../../sanity/data"

const Home = async () => {

  const blog = await getBlog()

  console.log(blog)
  
  return (
    <div>Home</div>
  )
}

export default Home