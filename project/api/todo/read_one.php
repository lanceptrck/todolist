<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');
 
// include database and object files
include_once '../config/database.php';
include_once '../objects/todo.php';
 
// get database connection
$database = new Database();
$db = $database->getConnection();
 
// prepare todo object
$todo = new Todo($db);
 
// set ID property of todo to be edited
$todo->id = isset($_GET['id']) ? $_GET['id'] : die();
 
// read the details of todo to be edited
$todo->readOne();
 
// create array
$todo_arr = array(
    "id" =>  $todo->id,
    "name" => $todo->name,
    "description" => $todo->description,
    "category_id" => $todo->category_id,
    "category_name" => $todo->category_name,
    "created" => $todo->created,
    "duedate" => $todo->duedate,
 
);
 
// make it json format
print_r(json_encode($todo_arr));
?>