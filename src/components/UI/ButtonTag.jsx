import React from 'react'
 import star from "../../../public/about/star.png"

const ButtonTag = ({tag}) => {
  return (
    <button className="flex items-center gap-2 text-blue border-2 border-blue text-md font-semibold px-4 py-2 rounded-full 
             bg-[#F1F5FF] hover:bg-[#e5ecff] transition">
             <img src={star} alt="star" height={2} />
             {tag}
           </button>
  )
}

export default ButtonTag
