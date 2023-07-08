import React from 'react'
import { useNavigate } from 'react-router';

const FeedbackCard = () => {
    const navigate = useNavigate();
  return (
    <div>
        <h1>Title of the card</h1>
        <p>Description of the card</p>
        <p>Author of the card</p>
        <button onClick={() => navigate(`/feedback/1`)}>View</button>
    </div>
  )
}

export default FeedbackCard