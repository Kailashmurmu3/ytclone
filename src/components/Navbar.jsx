
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { IoMic } from "react-icons/io5";
import Avatar from "react-avatar";

import youtubelogo from "../assets/YouTube-Logo.png"
import profilePicture from "../assets/Profile.png"

function Navbar() {
    return (
        <div >
            <div className="flex justify-between px-6 mt-3">
                <div className="flex items-center">
                    <GiHamburgerMenu size={30} />
                    <img className="w-28 ml-5" src={youtubelogo} alt="yt-logo" />
                </div>
                <div className="flex items-center w-[40%]">
                    <div className=" w-[100%] border outline-gray-400 px-4 py-2 rounded-l-full">
                        <input type="text" className="outline-none w-full" placeholder="Search" />
                    </div>
                    <button className="py-2 px-4 border border-grey-400 rounded-r-full"><CiSearch size="24px" /></button>
                    <div className="py-2 px-2 bg-gray-300 border rounded-full ml-2 cursor-pointer">
                        <IoMic size={28}/>
                    </div>

                </div>
                <div className="flex items-center justify-between w-[10%]">
                    <RiVideoAddLine className="cursor-pointer" size={28} />
                    <IoIosNotificationsOutline className="cursor-pointer" size={28} />
                    <Avatar className="cursor-pointer" src={profilePicture} size={40} round={true} />
                </div>
            </div>
        </div>
    );
}

export default Navbar;