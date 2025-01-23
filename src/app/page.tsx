'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Page = () => {
  const [data, setData] = useState(null)

  const fetch = async () => {
    const { data } = await axios.get('https://gitget170705.azurewebsites.net/')
    setData(data)
    console.log(data)
  }

  useEffect(() => {
    fetch()
  }, [])

  return (
    <div>{data ? JSON.stringify(data) : 'Loading...'}</div>
  )
}

export default Page