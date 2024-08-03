import React, { useState } from 'react'
import { RiDashboardFill } from "react-icons/ri";
import { ImProfile } from "react-icons/im";
import { MdAccountBalance } from "react-icons/md";
import { SiPinetwork } from "react-icons/si";
import { MdRoomPreferences } from "react-icons/md";
import { FaQuestionCircle } from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOut } from '../../redux/user/userSlice';






function NavItems({bar, setBar}) {
    const location = useLocation()

    const [activeRoute, setActiveRout] = useState(location.pathname)
    const dispatch = useDispatch()


    const items=[
        {
            title: "Dashboard",
            route: "/dashboard/",
            icon: <RiDashboardFill />
        },
        {
            title: "Profile",
            route: "/dashboard/profile",
            icon: <ImProfile />
        },
        {
            title: "My Balance",
            route: "/dashboard/balance",
            icon: <MdAccountBalance />
        },
        {
            title: "My Offers",
            route: "/dashboard/work",
            icon: <SiPinetwork />
        },
        {
            title: "Referrel",
            route: "/dashboard/refferel",
            icon: <MdRoomPreferences />
        },
        {
            title: "FAQ",
            route: "/dashboard/faq",
            icon: <FaQuestionCircle />
        },
        {
            title: "Leaderboard",
            route: "/dashboard/leaderboard",
            icon: <MdLeaderboard />
        },
        // {
        //     title: "Sign Out",
        //     route: "/dashboard",
        //     icon: <FaSignOutAlt />
        // },
    ]

    const handleSignOut = async () => {
        try {
          await fetch('/api/auth/signout');
          dispatch(signOut())
        } catch (error) {
          console.log(error);
        }
      };

  return (
    <div className={` ${bar ? "" : "mt-[5rem] "} flex flex-col gap-3 pb-10 `}>
        {
            items.map((item)=>(
                <Link key={item.title} to={item.route} onClick={()=> setActiveRout(item.route)} className={` ${activeRoute === item.route ? "bg-blue-600/70 text-[#fff]" : "text-[#292929]"} flex items-center gap-2 text-[1.6rem] pl-5 hover:bg-blue-600/70 cursor-pointer py-2 rounded-md hover:text-[#fff] `}>
                    <div>
                        {item.icon}
                    </div>
                    <p className={` ${bar ? "" : " lg:block hidden"} `}>{item.title}</p>
                </Link>
            ))
        }
        <div onClick={handleSignOut} className={`  flex items-center gap-2 text-[1.6rem] pl-5 hover:bg-blue-600/70 cursor-pointer py-2 rounded-md hover:text-[#fff] `}>
            <FaSignOutAlt />
            <p className={` ${bar ? "" : " lg:block hidden"} `}>Sign Out</p>
        </div>
    </div>
  )
}

export default NavItems