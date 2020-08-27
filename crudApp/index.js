const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

// Opening A Database
const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('./Employeedb.sqlite');


app.listen(3000,()=>console.log(`server running in port ${3000}`));

// get all employees
app.get('/employees', (req,res)=>{
    db.all("SELECT * FROM employee;",(err,rows)=>{
        if (err){
            throw err
        }else{
            res.send(rows);
        }
    });
});

// get an employee
app.get('/employees/:id', (req,res)=>{
    //console.log(req.param('id'));
    db.get(`SELECT * FROM employee WHERE EmpID = ?`,[req.param('id')], (error, row) => {
        res.send(row); 
    });
});

// delete an employee
app.delete('/employees/:id', (req,res)=>{
    //console.log(req.param('id'));
    try {
        db.run(`DELETE FROM employee WHERE EmpID = ?`,[req.param('id')], (err) => {
            if (err){
                throw err;
            }
            res.send(`Deleted employee detail of EmpID ${req.param('id')}`); 
        });
    }
    catch(err){
        res.send(err);
    }
});

// insert an employee
app.post('/employees', (req,res)=>{
    try {
        let emp = req.body;
        console.log(emp);
        let query = `INSERT INTO employee (empID, NAME, EmpCode, SALARY) VALUES (?, ?, ?, ?);`
        db.run(query,[emp.empID,emp.NAME , emp.EmpCode, emp.SALARY], (error) => {
            if (error){
                throw error;
            }
            res.send(`inserted employee details`); 
        });
    }
    catch(err){
        res.send(err);
    }
});

// update an employee
app.put('/employees/:id', (req,res)=>{
    //console.log(req.param('id'));
    try {
        let emp = req.body;
        let query = `UPDATE employee SET NAME = ?,EmpCode = ?,SALARY = ?   WHERE EmpID = ?`;
        db.run(query,[emp.NAME , emp.EmpCode, emp.SALARY, req.param('id')], (err) => {
            if (err){
                throw err;
            }
            res.send(`updated employee detail of EmpID ${req.param('id')}`); 
        });
    }
    catch(err){
        res.send(err);
    }
});

