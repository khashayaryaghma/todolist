const router = require("express").Router();


const {
    getAllList,
    getList,
    createList,
    updateList,
    deleteList,
} = require("../controllers/list");


router.get("/", getAllList);
router.get("/:id", getList);

router.post("/", createList);

router.patch("/:id", updateList);

router.delete("/:id", deleteList);

module.exports = router;