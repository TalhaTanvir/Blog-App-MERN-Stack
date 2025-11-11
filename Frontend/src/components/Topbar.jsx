import React from 'react'
import logo from '@/assets/images/logo-white.png'
import { Button } from './ui/button'
import { MdLogin } from "react-icons/md";
import { Link } from 'react-router-dom';
import SearchBox from './SearchBox';
import { RouteSignIn } from '@/helpers/RouteName';


function Topbar() {
  return (
    <div className='flex justify-between items-center h-16 fixed z-20 w-full bg-white px-5 border-b'>
      <div><img src={logo} alt="" /></div>
      <div className='w-[500px]'>
        <SearchBox/>
      </div>
      <div>
        <Button className="rounded-full" asChild>
          <Link to={RouteSignIn}> <MdLogin/> Sign In</Link>
        </Button>
      </div>
    </div>
  )
}

export default Topbar