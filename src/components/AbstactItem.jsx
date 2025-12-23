import React from 'react'
import abstract from "../assets/abstract.png"

const AbstactItem = () => {
  return (
    <section id='footer' className="relative p-8 flex flex-col m-4">
        <div className='relative top-0 left-1/8 right-0 bottom-0'>
            <img src={abstract} alt="" />
        </div>
    </section>
  )
}

export default AbstactItem