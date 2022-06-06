import RoomData from './RoomData'

function About() {
  return (
    <div className='md:flex h-full'>
      <img
        src='./images/image-about-dark.jpg'
        alt='room_about_dark'
        className='w-screen md:w-auto md:max-w-[240px] lg:max-w-[350px] xl:max-w-[500px]'
      />
      <div className='my-8 mx-9 md:m-0 md:flex md:flex-col md:gap-3 md:px-5 xl:px-14 self-center'>
        <h2 className='font-bold tracking-[0.2em] mb-3 md:mb-0 uppercase md:text-lg'>
          About Our Furniture
        </h2>
        <p className='text-primary-dark-gray/50 text-sm font-semibold'>
          {RoomData.roomAbout}
        </p>
      </div>
      <img
        src='./images/image-about-light.jpg'
        alt='room_about_light'
        className='w-screen md:w-auto md:max-w-[240px] lg:max-w-[350px] xl:max-w-[500px]'
      />
    </div>
  )
}

export default About
