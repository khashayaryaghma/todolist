import React from 'react'

export default function Lists({listData}) {

  return (
    <>
        <ul>
            {listData?.map((text)=>{
                return <li>{text}</li>
            })}
        </ul>
    </>
  )
}
