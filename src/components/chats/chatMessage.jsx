import style from './chats.module.css'
import userImg from '../../assets/profile.png'
import { useChat } from '../../store';

export default function ChatMessage(props) {

  const { setOpenChat } = useChat();
  const getChatMessages = () => {
    let id = props.chat_id;
    setOpenChat(id);
    // userRepo.get_chat_messages(id).then((res)=>{
    //   console.log(res)
    // })

  }

  return (
    <div onClick={getChatMessages} id={style.chatMessage} className={props.isActive ? style.active : null}>
      <div id={style.messageImg}>
        <img src={userImg} alt="" />
        <span style={{ background: props.statusColor ? props.statusColor : '#1ac445' }}></span>
      </div>
      <div id={style.messageInfo}>
        <h5>{props.userName}</h5>
        <p>The last message ...</p>
      </div>
      <div id={style.time}>
        <h6>60:00 PM</h6>
        <span>2</span>
      </div>

    </div>
  )
}
