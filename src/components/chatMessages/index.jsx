import { useEffect, useRef, useState } from 'react';
import { useChat, userCurrentId } from '../../store'
import style from './index.module.css'
import { addDoc, collection, onSnapshot, orderBy, query } from 'firebase/firestore';

import db from '../../firebase';
import { IoAddCircle, IoSendSharp } from 'react-icons/io5';

export default function ChatMessages() {

    const [messages, setMessages] = useState();
    const { chat_id } = useChat();
    const messageInput = useRef();


    const handleEnter = () => {
        if (event.shiftKey && event.key === "Enter") {
            console.log("shift enter pressed")
        } else if (event.key === "Enter") {
            event.preventDefault();
            sendMessage(event.target.value);
        }
    }

    const sendMessage = async (msg) => {
        await addDoc(collection(db, `chats/${chat_id}/messages`), {
            content: msg,
            sendUser: userCurrentId,
            dateTime: new Date()

        });
        messageInput.current.value = "";
    }

    useEffect(() => {
        onSnapshot(
            query(collection(db, `chats/${chat_id}/messages`), orderBy("dateTime"))
            , (mess) => {
                let final = mess.docs.map((msg) => {
                    return { ...msg.data(), documentId: msg.id };
                });
                setMessages(final);
                console.log(final)
            }
        );
    }, [chat_id])


    return (
        <div id={style.content} className='d-flex flex-column'>
            <div id={style.chatHeader}>
                <h2>Chat Info</h2>
            </div>
            <div id={style.chatMain} className=' d-flex flex-column'>
                {
                    messages && messages.map((el) => (
                        <div className={style.msg} key={el.documentId}>
                            <p className={el.sendUser == userCurrentId ? style.mine : style.notMine}>
                                {el.content}
                            </p>

                        </div>
                    ))

                }
            </div>
            {
                chat_id != 0 && <div id={style.chatFooter}>
                    <form onSubmit={(e) => { e.preventDefault(); sendMessage() }} className=' d-flex justify-content-between align-items-center'>
                        <IoAddCircle />
                        <textarea onKeyDown={handleEnter} ref={messageInput} name="textarea" id="textarea" placeholder="Type a message..."></textarea>
                        <button id={style.btn}><IoSendSharp /></button>


                    </form>

                </div>
            }


        </div>
    )
}
