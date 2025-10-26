import React from 'react'
import Navbar from './Navbar'
import StudentCardContainer from './StudentCardContainer'

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar/>
      <main className="pt-16 min-h-screen flex items-center justify-center p-4">
        <StudentCardContainer/>
      </main>     
    </div>
  )
}
export default Home