// Opening A Database
const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('./Employeedb.sqlite');

// create table
db.run(`CREATE TABLE employee(
    EmpID INT PRIMARY KEY     NOT NULL,
    NAME           TEXT    NOT NULL,
    EmpCode        TEXT,   
    SALARY         REAL
 );`);