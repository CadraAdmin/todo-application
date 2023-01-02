const router = require("express").Router();
const { getAllTodos, getATodo, createATodo, createManyTodos, updateATodo, deleteATodo } = require("../controllers/todos.controller");

router.get("/api/v1/todos-all", getAllTodos);
router.get("/api/v1/todo/:id", getATodo);
router.post("/api/v1/todo/new", createATodo);
router.post("/api/v1/todos-many", createManyTodos);
router.put("/api/v1/todo/:id", updateATodo);
router.delete("/api/v1/todo/:id", deleteATodo);

module.exports = router;
