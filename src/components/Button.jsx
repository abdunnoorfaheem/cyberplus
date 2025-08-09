import React from 'react'

const Button = ({children,className}) => {
  return (
    <>
      <button className={`px-[21px] py-[12px] rounded-[8px] text-white font-semibold bg-gradient-to-r from-[#F0B71F] to-[#E03609] hover:opacity-90 transition duration-700 ${className} text-[17px] font-semibold font-montserrat`}>{children}</button>
    </>
  )
}

export default Button
