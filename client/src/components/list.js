import { useEffect, useState } from "react";
import { getAllList } from "../api/listApi";
import Lists from "./lists";


export default function List() {

    const [lists, setList] = useState([]);

    useEffect(() => {
        getAllList().then(({ data }) => setList(data.list));
    }, []);

    return <div>{lists && <Lists listData={lists} />}</div>;
    
}
