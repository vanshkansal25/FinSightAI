import React, { Suspense } from 'react'
import DashboardPage from './page'
import { BarLoader } from "react-spinners";
const DashboardLayout = () => {
  return (
    <div className='px-5'>
        <h1 className='text-6xl mb-5  bg-gradient-to-br from-blue-600 to-blue-400 font-extrabold tracking-tighter pr-2 pb-2 text-transparent bg-clip-text'>Dashboard</h1>
        <Suspense fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea"/>}>

        </Suspense>
        <DashboardPage/>
    </div>
  )
}

export default DashboardLayout