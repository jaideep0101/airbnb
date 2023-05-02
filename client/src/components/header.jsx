import { HiOutlinePaperAirplane, HiOutlineGlobeAlt } from "react-icons/hi";
import { HiMagnifyingGlass } from "react-icons/all";
import {RxHamburgerMenu} from "react-icons/rx";
import {HiUser} from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="py-3 px-8 flex justify-between border border-y-1 border-gray">
        <div className="flex items-center gap-1 text-primary">
          <HiOutlinePaperAirplane className="text-4xl" />
          <span className="font-bold text-2xl">airbnb</span>
        </div>
        <div className="pl-4 px-1 py-2  flex items-center gap-4 border border-gray rounded-full shadow-md shadow-gray-300">
          <div className="font-medium text-sm">Anywhere</div>
          <div className="border border-y-8 border-gray"></div>
          <div className="font-medium text-sm">Any week</div>
          <div className="border border-y-8 border-gray"></div>
          <div className="font-normal text-sm text-gray">Add guests</div>

          <button className="p-2 bg-primary  rounded-full">
            <HiMagnifyingGlass />
          </button>
        </div>
        <div className="login_container flex items-center gap-4">
          <p className="font-medium">Airbnb your home</p>
          <HiOutlineGlobeAlt  className="text-xl"/>
          <Link to="/login" className="p-2 pl-3 flex gap-4 border border-gray rounded-full items-center">
          <RxHamburgerMenu/>
          <div className="bg-gray rounded-full border border-gray">
          <HiUser className="text-white text-2xl relative top-1 overflow-hidden"/>
          </div>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
