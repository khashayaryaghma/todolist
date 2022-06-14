import Button from "react-bootstrap/esm/Button";

function ActionButton({color , size, value,type,click}){

    return (
        <>
            <Button variant={color} size={size} type={type} onClick={click}>{value}</Button>
        </>
    );
}

export default ActionButton;