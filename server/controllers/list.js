const List = require("../model/lists");


const getAllList = async (req, res) => {
    try {
        const lists = await List.find({});
        res.status(200).json({ lists });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};




const getList = async (req, res) => {
    try {
        // getting the id from req.params and rename it as courseID
        const { id: listID } = req.params;
        const list = await List.findOne({ _id: listID });

        res.status(200).json({ list });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};



const createList = async (req, res) => {
    try {
        const newList = req.body;

        // create method post the data to mongoDB
        const list = await List.create(newList);
        res.status(201).json({ list });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};


const updateList = async (req, res) => {
    const { id: _id } = req.params;
    const list = req.body;
    try {
        const updatedList = await List.findByIdAndUpdate(
            { _id },
            { ...list, _id },
            { new: true }
        );

        console.log(updatedList);

        res.status(200).json(updatedList);
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};



const deleteList = async (req, res) => {
    const { id: listID } = req.params;

    try {
        const list = await List.findByIdAndDelete({ _id: listID });

        res.status(200).json(list);
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};



module.exports = {
    getAllList,
    getList,
    createList,
    updateList,
    deleteList,
};