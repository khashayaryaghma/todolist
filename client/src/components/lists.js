import React from 'react'

export default function Lists({listData}) {
  console.log(listData);
  return (
    <>
        <ul>
            {listData?.map((ele,index)=>{
                return <li key={index}>{ele.text}</li>
            })}
        </ul>
    </>
  )
}
