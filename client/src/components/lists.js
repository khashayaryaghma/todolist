import React from 'react'
import ActionButton from './button';
import { deleteList,editList } from "../api/listApi";

export default function Lists({listData}) {
  function editTask(id){
    editList(id,listData);
    // window.location.reload();
  }
  function deleteTask(id){
    deleteList(id);
    window.location.reload();
  }

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
                                click={() => editTask(ele._id)}
                            />
                            <ActionButton
                                value="Delete"
                                size="sm"
                                color="danger"
                                click={() => deleteTask(ele._id)}
                            />
                        </div>
                    </li>
                );
            })}
        </ul>
    </>
  )
}
