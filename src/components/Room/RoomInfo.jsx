import { Arrow } from '../icons'
import RoomData from '../RoomData'
import ImageSlider from './ImageSlider'

function RoomInfo({ room, handleNextRoom, handlePreviousRoom }) {
  return (
    <div className='relative my-12 mx-10 md:m-0 md:px-10 lg:px-22 2xl:px-32 flex md:flex-1 flex-col md:justify-center gap-3'>
      <h1 className='font-bold text-3xl lg:text-5xl leading-7'>
        {RoomData.roomsInfo[room].title}
      </h1>
      <p className='text-primary-dark-gray/50 text-sm 2xl:text-base font-semibold'>
        {RoomData.roomsInfo[room].details}
      </p>
      <div className='flex items-center gap-5 '>
        <p className=' tracking-[0.5rem] uppercase font-semibold cursor-pointer hover:text-primary-dark-gray/50 transition-colors'>
          Shop Now
        </p>
        <Arrow className={'text-primary-black/70 '} />
      </div>
      <div className='hidden md:block'>
        <ImageSlider
          handleNextRoom={handleNextRoom}
          handlePreviousRoom={handlePreviousRoom}
        />
      </div>
    </div>
  )
}

export default RoomInfo
