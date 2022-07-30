const mysql = require("mysql");
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "mysql@123",
    database: "testdb",
    connectionlimit: 10,
});
let rootdb = {};
rootdb.employeelist = () => {
    return new Promise((resolve, reject) => {
        pool.query(`select  * from employee `, (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};
rootdb.jobt = () => {
    return new Promise((resolve, reject) => {
        pool.query(`select e.empid,e.ename,j.job_title,b.ename ,e.hiredate,e.salary,e.comission,d.dname from 
employee e left join employee b on e.empid=b.mgrid inner join departments d on e.deptid=d.deptid
inner join  jobs j on e.jobid=j.job_id; `, (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};
rootdb.employeebyid = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('select * from employee where empid = ?', [id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

rootdb.departmentlist = () => {
    return new Promise((resolve, reject) => {
        pool.query('select * from departments', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

rootdb.departmentbyid = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('select * from departments where deptid = ?', [id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};
rootdb.joblist = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('select * from jobs', [id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};
rootdb.mgrid = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('select * from employee where jobid="mgr"', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

rootdb.employeeinsert = (input) => {
    var sql = `INSERT INTO employee
            ( empid, ename, jobid, mgrid, hiredate, salary, comission, deptid)
            VALUES
            (
                ?, ?, ?, ?, ?, ?,?,?
            )`;
    return new Promise((resolve, reject) => {
        pool.query(sql, [input.empid, input.ename, input.jobid, input.mgrid, input.hiredate, input.salary, input.comission, input.deptid], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve('successfullinsert');
        });
    });
};

rootdb.departmentinsert = (input) => {
    var sql = `INSERT INTO departments
            ( deptid, dname, mgrid, locationid)
            VALUES
            (
                ?, ?, ?, ?
            )`;
    return new Promise((resolve, reject) => {
        pool.query(sql, [input.depid, input.dname, input.mgrid, input.locationid], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve('successfullinsert');
        });
    });
};


rootdb.employeeupdate = (input) => {
    var sql = `update employee set ename = ?,
     jobid = ?,
     mgrid = ?,
     hiredate = ?, 
     salary = ?,
    comission =?,
    deptid = ?
    where empid = ?`;
    return new Promise((resolve, reject) => {
        pool.query(sql,
            [
                input.ename,
                input.jobid,
                input.mgrid,
                input.hiredate,
                input.salary,
                input.comission,
                input.deptid,
                input.empid],
            (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve('successfullupdate');
            });
    });
};

rootdb.employeedelete = (id) => {
    return new Promise((resolve, reject) => {
        pool.query(`delete from employee where empid = ?`, [id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve('successfullupdate');
        });
    });
};
rootdb.departmentdelete = (id) => {
    return new Promise((resolve, reject) => {
        pool.query(`delete from departments where deptid = ?`, [id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve('successfullupdate');
        });
    });
};
module.exports = rootdb