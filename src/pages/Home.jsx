import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/Card'

const Home = () => {
  const {allData,currentValue} = useSelector((state)=>state.allSlice)
  return (
    <div>
      <h1 className='text-center text-3xl mt-5 text-green-600'>Your Amount is : $ {currentValue.toFixed(2)}</h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-center items-center gap-3 pl-10 mt-10'>
        {
          allData.map((data)=>(
            <Card key={data.id} data={data}/>
          ))
        }
      </div>
    </div>
  )
}

export default Home