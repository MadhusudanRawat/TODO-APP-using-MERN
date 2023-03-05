const exprees = require("express");
const route = exprees();

const { createTODO, getAllTODO,deleteTODO,updateTODO } = require("../controller/todoAppController")

route.get("/", getAllTODO);

route.post("/", createTODO);

route.delete("/:id", deleteTODO);

route.patch("/:id", updateTODO);



module.exports = route;