import axios from "axios"

const baseUrl = "http://localhost:5000/list"

export const getAllLists = async () => {
    try {
        const lists = await axios.get(baseUrl);
        return lists;
    } catch (error) {
        console.log(error);
    }
};

export const createList = async (list) => {
    try {
        await axios.post(baseUrl, list);
    } catch (error) {
        console.log(error,"hi");
    }
};

export const deleteList = async (id) => {
    try {
        await axios.delete(`${baseUrl}/${id}`);
    } catch (error) {
        console.log(error);
    }
};

export const editList = async (id, list) => {
    try {
        await axios.patch(`${baseUrl}/${id}`, list);
    } catch (error) {
        console.log(error);
    }
};
