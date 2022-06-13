import { useState } from "react";
import ActionButton from "./button";
import TextInput from "./textInput";

export default function Form() {
    const [list, setlist] = useState({text:""});
    function formSubmit(e){
        
    }
    return (
        <>
            <form onSubmit={formSubmit} className="input-group mt-5" >
                    <TextInput />
                    <ActionButton color="primary" size="sm" value="Submit" />
            </form>
        </>
    );
}
