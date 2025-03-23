import { CiSearch } from 'react-icons/ci'
import style from './chats.module.css'
import ChatMessage from './chatMessage'
import { Swiper, SwiperSlide } from 'swiper/react'
import PinedUser from './pinedUser'
export default function Chats() {
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
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
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

                <ChatMessage isActive={true} />
                <ChatMessage statusColor={'red'} />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />

            </div>

        </div>
    )
}
