import style from './chats.module.css'
import userImg from '../../assets/profile.png'


export default function PinedUser(props) {
    return (
        <div id={style.PinedUser} >
            <div id={style.pinedImg}>
                <img src={userImg} alt="" />
                <span style={{background: props.statusColor ? props.statusColor : '#1ac445' }}></span>
            </div>
            <p>User Name</p>
        </div>
    )
}
