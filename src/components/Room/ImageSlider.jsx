import { AngleLeft, AngleRight } from '../icons'

function ImageSlider({ handleNextRoom, handlePreviousRoom }) {
  return (
    <div className='absolute bottom-0 right-0 md:right-auto md:left-0'>
      <div className='flex items-center '>
        <div onClick={handleNextRoom}>
          <div className='w-14 h-16 bg-black flex items-center justify-center hover:bg-primary-dark-gray cursor-pointer'>
            <AngleLeft className={'text-primary-white scale-[80%]'} />
          </div>
        </div>
        <div onClick={handlePreviousRoom}>
          <div className='w-14 h-16 bg-black flex items-center justify-center hover:bg-primary-dark-gray cursor-pointer'>
            <AngleRight className={'text-primary-white scale-[80%]'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageSlider
