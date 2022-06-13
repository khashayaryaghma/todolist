import Button from "react-bootstrap/esm/Button";

function ActionButton({color , size, value,type}){

    return (
        <>
            <Button variant={color} size={size} type={type}>{value}</Button>
        </>
    );
}

export default ActionButton;