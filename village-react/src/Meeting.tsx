import React from 'react'
import meetings from './meetings.json'
function NewMeeting () {
  return (
    <>
      {meetings.map((meeting, index) => (
          <span key={index}>{meeting.date}</span>
      ))}
    </>
  )
}

export default NewMeeting;