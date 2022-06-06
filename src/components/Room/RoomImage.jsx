import ImageSlider from './ImageSlider'

function RoomImage({ room, handleNextRoom, handlePreviousRoom }) {
  return (
    <div className='relative md:flex-1 xl:flex-initial'>
      <img
        src={`./images/mobile-image-hero-${room + 1}.jpg`}
        alt={`room_image`}
        className='w-screen block md:hidden'
      />
      <img
        src={`./images/desktop-image-hero-${room + 1}.jpg`}
        alt={`room_image`}
        className='hidden md:block md:h-full'
      />
      <div className='md:hidden'>
        <ImageSlider
          handleNextRoom={handleNextRoom}
          handlePreviousRoom={handlePreviousRoom}
        />
      </div>
    </div>
  )
}

export default RoomImage
