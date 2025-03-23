import style from './SideMenu.module.css'
import logo from '../../assets/logo.png'
import { IoIosMoon } from 'react-icons/io'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { usepaths } from '../../store'
import profileImg from '../../assets/profile.png'


export default function SideMenu() {
    const { paths } = usepaths();
    const location = useLocation();
    const [activePath, setActivePath] = useState();

    useEffect(() => {
        setActivePath(location.pathname)
    }, [location])

    return (
        <div id={style.sideMenu} className=" d-flex flex-column align-items-center justify-content-between p-3">
            <img id={style.logo} src={logo} alt="" />
            <div id={style.links} className=' d-flex flex-column align-items-center'>

                {
                    paths.map((el, index) => (
                        <Link key={index} to={el.path} className={el.path == activePath ? style.activeLink : null}>{el.icon}</Link>
                    ))
                }
                <Link id={style.moon}><IoIosMoon /></Link>


                <div className="dropdown" id={style.userActions}>
                    <img id={style.profileImg} src={profileImg} width={40} alt="" data-bs-toggle="dropdown" aria-expanded="false" />

                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Log out</a></li>
                    </ul>
                </div>
            </div>







        </div>
    )
}
