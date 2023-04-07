import React from 'react'
import meetings from './meetings.json'
function NewMeeting () {
  return (
    <>
      {meetings.map((meeting, index) => (
          <span>{meeting.date}</span>
      ))}
    </>
  )
}

export default NewMeeting;