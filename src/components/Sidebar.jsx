
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";

function Sidebar() {
    return (
        <div>
            <div className="flex items-center">
                <GoHomeFill size={30} />
                <p className="ml-5 font-bold">Home</p>
            </div>
            <div className="flex items-center">
                <SiYoutubeshorts size={30}/>
                <p className="ml-5 font-bold">Shorts</p>
            </div>
            <div className="flex items-center">
                <MdOutlineSubscriptions size={30}/>
                <p className="ml-5 font-bold">Subscriptions</p>
            </div>
        </div>
    )
}

export default Sidebar;