import { useState } from "react";
import ActionButton from "./button";
import TextInput from "./textInput";
import { createList } from "../api/listApi";

export default function Form() {
    const [list, setList] = useState({text:""});
    function formSubmit(e){
        e.preventDefault();
        createList()
    }
    return (
        <>
            <form onSubmit={formSubmit} className="input-group mt-5" >
                    <input type="text" onChange={(e)=>{setList({text:e.target.value})}} value={list.text} />
                    <ActionButton color="primary" size="sm" value="Submit" type="submit" />
            </form>
        </>
    );
}
