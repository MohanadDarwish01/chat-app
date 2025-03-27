import style from './MainLayout.module.css'
import { Outlet } from "react-router-dom";
import SideMenu from "../components/sideMenu/SideMenu";
import ChatMessages from '../components/chatMessages';

export default function MainLayout() {
    return (
        <div id={style.layout} className=" col-12 h-100 d-flex ">
            <SideMenu id={style.sideMenu} />
            <div id={style.Outlet} >
                <Outlet />
            </div>

            <ChatMessages />
            {/* <p id={style.content}>Message content</p> */}
        </div>
    )
}
