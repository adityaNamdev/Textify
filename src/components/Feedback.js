import React from 'react'

export default function Feedback() {
  return (
    <div className='conatainer '>
      <h1> Share your Feedback</h1>
      <p>Tell us about your experience </p>
        <form action="/" method='post' id='feedbackForm'>
          <textarea name="feedback"placeholder='Enter your feedback here' id="feedback" cols="30" rows="5"></textarea>
      <button type='button' name="feedback" className='btn btn-danger mx-3'>Submit</button>
     </form>
    </div>
  )
}
