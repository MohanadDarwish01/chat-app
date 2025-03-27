import { CiSearch } from 'react-icons/ci'
import style from './chats.module.css'
import ChatMessage from './chatMessage'
import { Swiper, SwiperSlide } from 'swiper/react'
import PinedUser from './pinedUser'
import { useEffect, useState } from 'react'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import db from '../../firebase'
import { userRepo } from '../../data/repos/usersRepo'
import { userCurrentId } from '../../store'
export default function Chats() {

 
    const [chats, setChats] = useState([]);




    const getChatsLive = (user_id) => {
        onSnapshot(
            query(collection(db, "chats"), where("users", "array-contains", user_id))


            , async (chats) => {
                let final = [];
                // console.log(chats.docs)

                let promises = chats.docs.map(async (chat) => {
                    let chat_obj = { ...chat.data(), documentId: chat.id };
                    let reciever_id = chat_obj.users.find(el => el !== user_id);
                    let userData = await userRepo.get_user_data(reciever_id)
                    return {...chat_obj , name: userData.name};

                })
                final = await Promise.all(promises);
                setChats(final);
            });
    }

    useEffect(() => {

        getChatsLive(userCurrentId);

    }, [])




    return (
        <div className=' col-12 p-3 h-100 d-flex flex-column'>
            <h5>Chats</h5>
            <div id={style.searchInput} className=' col-12 d-flex position-relative'>
                <CiSearch id={style.icon} />
                <input type="text" placeholder='Search Message or users' />
            </div>
            <div id={style.pind} className=' col-12 d-flex align-items-center '>

                <Swiper
                    spaceBetween={20}
                    loop={true}
                    slidesPerView={4}

                >
                    <SwiperSlide><PinedUser /></SwiperSlide>
                    <SwiperSlide><PinedUser /></SwiperSlide>
                    <SwiperSlide><PinedUser /></SwiperSlide>
                    <SwiperSlide><PinedUser /></SwiperSlide>
                    <SwiperSlide><PinedUser /></SwiperSlide>
                </Swiper>

            </div>
            <h6 className=' mt-2'>Recent</h6>
            <div id={style.messages}>

                {
                    chats.map((el) => (
                        <ChatMessage key={el.documentId} chat_id={el.documentId} statusColor={'red'} userName={el.name} />
                    ))
                }



            </div>

        </div>
    )
}


