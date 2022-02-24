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
/* GET users listing. */
router.get('/classroom', function(req, res, next) {
  try{
    const _query = "SELECT * FROM CLASSROOM;";    
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
router.get('/department', function(req, res, next) {
  try{
    const _query = "SELECT * FROM DEPARTMENT;";    
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
router.get('/course', function(req, res, next) {
  try{
    const _query = "SELECT * FROM COURSE;";    
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
router.get('/instructor', function(req, res, next) {
  try{
    const _query = "SELECT * FROM INSTRUCTOR;";    
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
router.get('/section', function(req, res, next) {
  try{
    const _query = "SELECT * FROM SECTION;";    
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
router.get('/teaches', function(req, res, next) {
  try{
    const _query = "SELECT * FROM TEACHES;";    
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
router.get('/student', function(req, res, next) {
  try{
    const _query = "SELECT * FROM STUDENT;";    
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
router.get('/takes', function(req, res, next) {
  try{
    const _query = "SELECT * FROM TAKES;";    
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
router.get('/advisor', function(req, res, next) {
  try{
    const _query = "SELECT * FROM ADVISOR;";    
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
router.get('/time_slot', function(req, res, next) {
  try{
    const _query = "SELECT * FROM TIME_SLOT;";    
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
router.get('/prereq', function(req, res, next) {
  try{
    const _query = "SELECT * FROM PREREQ;";    
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
