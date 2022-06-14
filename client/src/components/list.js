import { useEffect, useState } from "react";
import { getAllList } from "../api/listApi";

export default function list() {
  
    const [list, setList] = useState([]);

    useEffect(() => {
        getAllList().then(({ data }) => setList(data.list));
    }, []);

    return <></>;
}
