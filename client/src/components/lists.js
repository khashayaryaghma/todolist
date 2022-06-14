import React from 'react'
import ActionButton from './button';

export default function Lists({listData}) {
  console.log(listData);
  return (
    <>
        <ul>
            {listData?.map((ele,index)=>{
                return (
                    <li
                        key={index}
                        style={{
                            listStyle: "none",
                            display: "flex",
                            justifyContent: "space-between",
                            width: "30rem",
                            marginLeft: "30rem",
                            marginBottom: "0.5rem",
                            border: "solid 1px",
                            borderRadius: "5px",
                            padding: "7px",
                        }}
                    >
                        {ele.text}
                        <div>
                            <ActionButton
                                value="Edit"
                                size="sm"
                                color="primary"
                            />
                            <ActionButton
                                value="Delete"
                                size="sm"
                                color="danger"
                            />
                        </div>
                    </li>
                );
            })}
        </ul>
    </>
  )
}
