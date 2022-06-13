import Button from "react-bootstrap/esm/Button";

function ActionButton({color , size, value}){

    return (
        <>
            <Button variant={color} size={size}>{value}</Button>
        </>
    );
}

export default ActionButton;