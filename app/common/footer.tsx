import {
  BsDiscord,
  BsFacebook,
  BsInstagram,
  BsTiktok,
  BsTwitter,
} from "react-icons/bs";
import { CgChevronRight } from "react-icons/cg";
import { FaSeedling } from "react-icons/fa6";
import { MdInput } from "react-icons/md";

export default function Footer(): JSX.Element {
  return (
    <footer className="h-72 flex items-center justify-between py-4 bg-gray-900 text-white">
      <div className="ml-8 flex flex-col w-80 h-full justify-between">
        <div>
          <div className="mb-3 flex items-center space-x-2">
            <FaSeedling size={30} />
            <h1 className="text-2xl font-bold">Serene</h1>
          </div>
          <p className="font-light">
            Serene is a blog dedicated to inspiring mindfulness and well-being.
            We share insights and resources to help you cultivate a peaceful and
            balanced life.
          </p>
        </div>
        <p className="text-sm">Copyright © 2023 Serene. All rights reserved.</p>
      </div>
      <div className="flex flex-col justify-start h-full">
        <ul className="flex flex-col space-y-5 text-lg text-gray-400">
          <li className="font-bold text-white">About</li>
          <li>About Us</li>
          <li>Blog</li>
          <li>Career</li>
        </ul>
      </div>
      <div className="flex flex-col justify-start h-full">
        <ul className="flex flex-col space-y-5 text-lg text-gray-400">
          <li className="font-bold text-white">Support</li>
          <li>Contact Us</li>
          <li>Return</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div className="mr-8 flex flex-col justify-between h-full">
        <h2 className="text-lg mb-2 font-semibold">Get Updates</h2>
        <div className="flex flex-col">
          <div className="flex">
            <input
              type="text"
              placeholder="Enter your email address"
              className="px-6 py-2 rounded-lg shadow-xl text-black"
            />
            <div className="px-3 py-3 bg-white rounded-md shadow-md text-black ml-1 items-center">
              <CgChevronRight size={30} />
            </div>
          </div>
          <div className="mt-6 flex justify-between">
            <figure className="px-3 py-3 shadow-lg rounded-full bg-white text-black hover:scale-110 transition-all duration-300">
              <BsInstagram size={20} />
            </figure>
            <figure className="px-3 py-3 shadow-lg rounded-full bg-white text-black hover:scale-110 transition-all duration-300">
              <BsTwitter size={20} />
            </figure>
            <figure className="px-3 py-3 shadow-lg rounded-full bg-white text-black hover:scale-110 transition-all duration-300">
              <BsFacebook size={20} />
            </figure>
            <figure className="px-3 py-3 shadow-lg rounded-full bg-white text-black hover:scale-110 transition-all duration-300">
              <BsDiscord size={20} />
            </figure>
            <figure className="px-3 py-3 shadow-lg rounded-full bg-white text-black hover:scale-110 transition-all duration-300">
              <BsTiktok size={20} />
            </figure>
          </div>
        </div>

        <div className="flex justify-between">
          <h2>Privacy and Policy</h2>
          <h2>Terms of Service</h2>
        </div>
      </div>
    </footer>
  );
}
