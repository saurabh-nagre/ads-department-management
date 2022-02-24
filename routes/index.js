const { query } = require('express');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');

const connection = mysql.createConnection(
  {
    user:'root',
    password:'Mydatabase_123',
    host:'localhost',
    database:'University'
  }
)
/* Add into tables */
router.post('/classroom', function(req, res, next) {
    try{
      connection.query("CREATE TABLE IF NOT EXISTS CLASSROOM(BUILDING VARCHAR(50),ROOM_NUMBER INT,CAPACITY INT,PRIMARY KEY (BUILDING,ROOM_NUMBER))");
      const _query = "INSERT INTO CLASSROOM VALUES('"+req.body.building+"',"+req.body.room_number+","+req.body.capacity+")";     
      connection.query(_query,(err, result, field)=>{
          if(!err){
              res.json({
              'status':true,
              'result':result,
              'field':field
              });
          }
          else{
              console.log(err);
              res.json({
                  'status':false
              });
          }
        });
      }
      catch(err){
        console.log("conneciton failed");
      }
});

router.post('/department', function(req, res, next) {
  try{
    connection.query("CREATE TABLE IF NOT EXISTS DEPARTMENT(DEPT_NAME VARCHAR(50),BUILDING VARCHAR(50),BUDGET INT,PRIMARY KEY (DEPT_NAME))");
    const _query = "INSERT INTO DEPARTMENT VALUES('"+req.body.dept_name+"','"+req.body.building+"',"+req.body.budget+")";     
    connection.query(_query,(err, result, field)=>{
        if(!err){
            res.json({
            'status':true,
            'result':result,
            'field':field
            });
        }
        else{
            console.log(err);
            res.json({
                'status':false
            });
        }
      });
    }
    catch(err){
      console.log("conneciton failed");
    }
});

router.post('/course', function(req, res, next) {
  try{
    connection.query("CREATE TABLE IF NOT EXISTS COURSE(COURSE_ID VARCHAR(50),TITLE VARCHAR(50),DEPT_NAME VARCHAR(50),CREDITS FLOAT,PRIMARY KEY (COURSE_ID))");
    const _query = "INSERT INTO COURSE VALUES('"+req.body.course_id+"','"+req.body.title+"','"+req.body.dept_name+"',"+req.body.credits+");";     
    connection.query(_query,(err, result, field)=>{
        if(!err){
            res.json({
            'status':true,
            'result':result,
            'field':field
            });
        }
        else{
            console.log(err);
            res.json({
                'status':false
            });
        }
      });
    }
    catch(err){
      console.log("conneciton failed");
    }
});

router.post('/instructor', function(req, res, next) {
  try{
    connection.query("CREATE TABLE IF NOT EXISTS INSTRUCTOR(ID INT,NAME VARCHAR(50),DEPT_NAME VARCHAR(50),SALARY INT,PRIMARY KEY (ID))");
    const _query = "INSERT INTO INSTRUCTOR VALUES("+req.body.id+",'"+req.body.name+"','"+req.body.dept_name+"',"+req.body.salary+")";     
    connection.query(_query,(err, result, field)=>{
        if(!err){
            res.json({
            'status':true,
            'result':result,
            'field':field
            });
        }
        else{
            console.log(err);
            res.json({
                'status':false
            });
        }
      });
    }
    catch(err){
      console.log("conneciton failed");
    }
});


router.post('/section', function(req, res, next) {
  try{
    connection.query("CREATE TABLE IF NOT EXISTS SECTION(COURSE_ID VARCHAR(50),SEC_ID INT,SEMESTER INT,YEAR INT,BUILDING VARCHAR(50),ROOM_NUMBER INT,TIME_SLOT_ID INT,PRIMARY KEY (COURSE_ID,SEC_ID,SEMESTER,YEAR))");
    const _query = "INSERT INTO SECTION VALUES('"+req.body.course_id+"',"+req.body.sec_id+","+req.body.semester+","+req.body.year+",'"+req.body.building+"',"+req.body.room_number+","+req.body.time_slot_id+")";     
    connection.query(_query,(err, result, field)=>{
        if(!err){
            res.json({
            'status':true,
            'result':result,
            'field':field
            });
        }
        else{
            console.log(err);
            res.json({
                'status':false
            });
        }
      });
    }
    catch(err){
      console.log("conneciton failed");
    }
});

router.post('/teaches', function(req, res, next) {
  try{
    connection.query("CREATE TABLE IF NOT EXISTS TEACHES(ID INT,COURSE_ID VARCHAR(50),SEC_ID INT,SEMESTER INT,YEAR INT,PRIMARY KEY (ID,COURSE_ID,SEC_ID,SEMESTER,YEAR))");
    const _query = "INSERT INTO TEACHERS VALUES("+req.body.id+","+req.body.course_id+","+req.body.sec_id+","+req.body.semester+","+req.body.year+")";     
    connection.query(_query,(err, result, field)=>{
        if(!err){
            res.json({
            'status':true,
            'result':result,
            'field':field
            });
        }
        else{
            console.log(err);
            res.json({
                'status':false
            });
        }
      });
    }
    catch(err){
      console.log("conneciton failed");
    }
});


router.post('/student', function(req, res, next) {
  try{
    connection.query("CREATE TABLE IF NOT EXISTS STUDENT(ID INT,NAME VARCHAR(50),DEPT_NAME VARCHAR(50),TOT_CRED INT,PRIMARY KEY (ID))");
    const _query = "INSERT INTO STUDENT VALUES("+req.body.id+",'"+req.body.name+"','"+req.body.dept_name+"',"+req.body.tot_cred+")";     
    connection.query(_query,(err, result, field)=>{
        if(!err){
            res.json({
            'status':true,
            'result':result,
            'field':field
            });
        }
        else{
            console.log(err);
            res.json({
                'status':false
            });
        }
      });
    }
    catch(err){
      console.log("conneciton failed");
    }
});


router.post('/takes', function(req, res, next) {
  try{
    connection.query("CREATE TABLE IF NOT EXISTS TAKES(ID INT,COURSE_ID VARCHAR(50),SEC_ID INT,SEMESTER INT, YEAR INT, GRADE FLOAT,PRIMARY KEY (ID,COURSE_ID,SEC_ID,SEMESTER))");
    const _query = "INSERT INTO TAKES VALUES("+req.body.id+",'"+req.body.course_id+"',"+req.body.sec_id+","+req.body.semester+","+req.body.year+","+req.body.grade+")";     
    connection.query(_query,(err, result, field)=>{
        if(!err){
            res.json({
            'status':true,
            'result':result,
            'field':field
            });
        }
        else{
            console.log(err);
            res.json({
                'status':false
            });
        }
      });
    }
    catch(err){
      console.log("conneciton failed");
    }
});


router.post('/adviser', function(req, res, next) {
  try{
    connection.query("CREATE TABLE IF NOT EXISTS ADVISER(S_ID INT,I_ID VARCHAR(50),PRIMARY KEY (S_ID))");
    const _query = "INSERT INTO ADVISER VALUES("+req.body.s_id+",'"+req.body.i_id+"')";     
    connection.query(_query,(err, result, field)=>{
        if(!err){
            res.json({
            'status':true,
            'result':result,
            'field':field
            });
        }
        else{
            console.log(err);
            res.json({
                'status':false
            });
        }
      });
    }
    catch(err){
      console.log("conneciton failed");
    }
});


router.post('/time_slot', function(req, res, next) {
  try{
    connection.query("CREATE TABLE IF NOT EXISTS TIME_SLOT(TIME_SLOT_ID INT,DAY VARCHAR(50),START_TIME VARCHAR(10),END_TIME VARCHAR(10),PRIMARY KEY (TIME_SLOT_ID,DAY,START_TIME))");
    const _query = "INSERT INTO TIME_SLOT VALUES("+req.body.time_slot_id+",'"+req.body.day+"','"+req.body.start_time+"','"+req.body.end_time+"')";     
    connection.query(_query,(err, result, field)=>{
        if(!err){
            res.json({
            'status':true,
            'result':result,
            'field':field
            });
        }
        else{
            console.log(err);
            res.json({
                'status':false
            });
        }
      });
    }
    catch(err){
      console.log("conneciton failed");
    }
});


router.post('/prereq', function(req, res, next) {
  try{
    connection.query("CREATE TABLE IF NOT EXISTS PREREQ(COURSE_ID VARCHAR(50),PREREQ_ID INT,PRIMARY KEY (COURSE_ID,PREREQ_ID))");
    const _query = "INSERT INTO PREREQ VALUES('"+req.body.course_id+"',"+req.body.prereq_id+")";     
    connection.query(_query,(err, result, field)=>{
        if(!err){
            res.json({
            'status':true,
            'result':result,
            'field':field
            });
        }
        else{
            console.log(err);
            res.json({
                'status':false
            });
        }
      });
    }
    catch(err){
      console.log("conneciton failed");
    }
});

module.exports = router;
