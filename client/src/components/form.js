import ActionButton from "./button";
import TextInput from "./textInput";

export default function Form() {
    return (
        <>
            <form action="" className="input-group mt-5" >
                    <TextInput />
                    <ActionButton color="primary" size="sm" value="Submit" />
            </form>
        </>
    );
}
