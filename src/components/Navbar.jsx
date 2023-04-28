import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
  AiFillHeart,
  AiFillTag,
} from 'react-icons/ai'
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { FaWallet, FaUserFriends } from 'react-icons/fa'
import { MdHelp } from 'react-icons/md'
import { useState } from 'react'

function Navbar() {
  const [nav, setNav] = useState(false)
  return (
    <div className="max-w-full mx-auto flex justify-between items-center p-4">
      {/* Left Side*/}
      <div className="flex items-center">
        <div className="cursor-pointer" onClick={() => setNav(!nav)}>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>

      {/*Search Input */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[50%]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 focus:outline-none w-full"
          type="text"
          placeholder="Search foods"
        />
      </div>

      {/*Cart Button */}
      <button className="items-center bg-black text-white hidden md:flex py-2 md:gap-x-2 rounded-full">
        <BsFillCartFill size={20} />
        Cart
      </button>

      {/*Mobile Menu */}
      {/*Overlay*/}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ''
      )}

      {/*Side drawer menu*/}

      <div
        className={
          nav
            ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300'
            : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'
        }
      >
        <AiOutlineClose
          size={25}
          className="cursor-pointer absolute right-4 top-4"
          onClick={() => setNav(!nav)}
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800 gap-y-6">
            <li className="flex items-center gap-x-4 text-lg">
              <TbTruckDelivery size={22} /> Orders
            </li>
            <li className="flex items-center gap-x-4 text-lg">
              <AiFillHeart size={22} /> Favorites
            </li>
            <li className="flex items-center gap-x-4 text-lg">
              <FaWallet size={22} /> Wallet
            </li>
            <li className="flex items-center gap-x-4 text-lg">
              <MdHelp size={22} /> Help
            </li>
            <li className="flex items-center gap-x-4 text-lg">
              <AiFillTag size={22} /> Promotions
            </li>
            <li className="flex items-center gap-x-4 text-lg">
              <BsFillSaveFill size={22} /> Best One
            </li>
            <li className="flex items-center gap-x-4 text-lg">
              <FaUserFriends size={22} /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
export default Navbar
