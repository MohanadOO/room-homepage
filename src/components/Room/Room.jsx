import { useState } from 'react'
import RoomImage from './RoomImage'
import RoomInfo from './RoomInfo'

function Room() {
  const [room, setRoom] = useState(0)

  const handleNextRoom = () => {
    if (room === 2) {
      return setRoom(0)
    }
    setRoom((prevRoom) => prevRoom + 1)
  }
  const handlePreviousRoom = () => {
    if (room === 0) {
      return setRoom(2)
    }
    setRoom((prevRoom) => prevRoom - 1)
  }

  return (
    <main className='md:flex md:min-h-[65%] xl:min-h-[60%]'>
      <RoomImage
        room={room}
        handleNextRoom={handleNextRoom}
        handlePreviousRoom={handlePreviousRoom}
      />
      <RoomInfo
        room={room}
        handleNextRoom={handleNextRoom}
        handlePreviousRoom={handlePreviousRoom}
      />
    </main>
  )
}

export default Room
