import { useEffect, useState } from "react";
import { getAllLists } from "../api/listApi";
import Lists from "./lists";


export default function List() {

    const [lists, setList] = useState([]);

    useEffect(() => {
        getAllLists().then(({ data }) => setList(data.lists));
    });

    return <div>{lists && <Lists listData={lists} />}</div>;
    
}
