const { ObjectId } = require("mongodb");
const { mongoDb } = require("../mongoDB")


const client = mongoDb();
async function connetDb() {
    await client.connect();
}

connetDb();
const database = client.db("Todo-App");
const todos = database.collection("todos");

//post todo
async function postTodo(req, res, next) {
    try {
        const result = await todos.insertOne(req.body);
        res.send(result);
    }
    catch (err) {
        next(err);
    }
};

//get todo
async function getTodo(req, res, next) {
    try {
        const result = await todos.find({}).toArray();
        res.send(result);
    }
    catch (err) {
        next(err);
    }
};

//update todo
async function updateTodo(req, res, next) {
    try {
        const filter = { _id: ObjectId(req.params.id) };
        const docs = { $set: req.body };
        const result = await todos.updateOne(filter, docs);
        res.send(result);
    }
    catch (err) {
        next(err);
    }
};

//get one todo
async function getOneTodo(req, res, next) {
    try {
        const result = await todos.findOne({ _id: ObjectId(req.params.id) });
        res.send(result);
    } catch (err) {
        next(err);
    }
}

//delete todo
async function deleteTodo(req, res, next) {
    try {
        const filter = { _id: ObjectId(req.params.id) };
        const result = await todos.deleteOne(filter);
        console.log(result);
        res.send(result);
    }
    catch (err) {
        next(err);
    }
}



module.exports = {
    postTodo,
    getTodo,
    deleteTodo,
    updateTodo,
    getOneTodo
}