import { AiFillMessage } from "react-icons/ai";
import { FaUserGroup } from "react-icons/fa6";
import { IoIosMoon, IoMdSettings } from "react-icons/io";
import { RiContactsFill, RiUser2Fill } from "react-icons/ri";
import { create } from "zustand";
import Chats from "../components/chats/chats";

export const usepaths = create(() => ({
    paths: [
        { path: "/profile", icon: <RiUser2Fill /> , element: <h1>Profine</h1> },
        { path: "/chats", icon: <AiFillMessage /> , element: <Chats /> },
        { path: "/groups", icon: <FaUserGroup /> , element: <h1>Groups</h1> },
        { path: "/contact", icon: <RiContactsFill /> , element: <h1>Contact</h1> },
        { path: "/settings", icon: <IoMdSettings /> , element: <h1>Settings</h1> },
        
    ]

}))

