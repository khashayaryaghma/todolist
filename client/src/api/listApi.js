import axios from "axios"

const baseUrl = ""
export const createList = async (course) => {
    try {
        await axios.post(baseUrl, course);
    } catch (error) {
        console.log(error);
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
