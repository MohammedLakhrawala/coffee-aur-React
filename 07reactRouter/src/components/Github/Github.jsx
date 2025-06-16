import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()

//1st method for fetching
//{// const [data, setData] = useState([])
// useEffect(() => {
//     fetch('https://api.github.com/users/mohammedlakhrawala')
//     .then((res) => res.json())
//     .then((data) => setData(data))
// }, [])}


  return (
    <div className='text-center m-4 bg-gray-600 text-white'>
      Github followers: {data.followers}
      <img src={data.avatar_url} alt='Git Picture' width="100px" />
    </div>
  )


}

export default Github


//2nd method for fetching using loader
//loader is used becuase on the hover state only the api gets fetched and the data starts loading which reduces lag
export const githubinfoloader = async () => {
    const res = await fetch('https://api.github.com/users/mohammedlakhrawala')
    return res.json();
}
