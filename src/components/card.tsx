import React from 'react'

const Card = (props: any) => {
const {name, score} = props

  return (
    <div className="card-container">
      <div>
        {name} 
      </div>
      <div>
        {score}
      </div>
    </div>
  )
}

export default Card
