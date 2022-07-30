const express = require("express");
const res = require("express/lib/response");
const db = require('../db');
const router = express.Router();

router.get("/employee", async (req, res, next) => {
    try {
        let results = await db.employeelist();
        res.json(results);
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
    // res.json({ test: "test" });
});
router.get("/employee/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        let result = await db.employeebyid(id);
        res.json(result);
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});
router.get("/departments", async (req, res, next) => {
    try {
        //const {deptid} = req.params;
        let result = await db.departmentlist();
        res.json(result);
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});
router.get("/job", async (req, res, next) => {
    try {
        //const {deptid} = req.params;
        let result = await db.joblist();
        res.json(result);
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});
router.get("/jobt", async (req, res, next) => {
    try {
        //const {deptid} = req.params;
        let result = await db.jobt();
        res.json(result);
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});
router.get("/mgr", async (req, res, next) => {
    try {
        //const {deptid} = req.params;
        let result = await db.mgrid();
        res.json(result);
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});
router.get("/departments/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        let result = await db.departmentbyid(id);
        res.json(result);
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.post("/employeeinsert", async (req, res, next) => {
    try {
        //const { id } = req.params;
        //console.log(req);
        let result = await db.employeeinsert(req.body);
        res.json(result);
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});


router.post("/departmentinsert", async (req, res, next) => {
    try {
        //const { id } = req.params;
        //console.log(req);
        let result = await db.departmentinsert(req.body);
        res.json(result);
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});


router.put("/employeeupdate", async (req, res, next) => {
    try {
        //const { id } = req.params;
        //console.log(req);
        let result = await db.employeeupdate(req.body);
        res.json(result);
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});


router.delete("/employeedelete/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        //console.log(req);
        let result = await db.employeedelete(id);
        res.json(result);
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});
router.delete("/departmentdelete/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        //console.log(req);
        let result = await db.departmentdelete(id);
        res.json(result);
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});
module.exports = router;