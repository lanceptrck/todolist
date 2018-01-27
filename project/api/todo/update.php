<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
// include database and object files
include_once '../config/database.php';
include_once '../objects/todo.php';
 
// get database connection
$database = new Database();
$db = $database->getConnection();
 
// prepare todo object
$todo = new Todo($db);
 
// get id of todo to be edited
$data = json_decode(file_get_contents("php://input"));
 
// set ID property of todo to be edited
$todo->id = $data->id;
 
// set todo property values
$todo->name = $data->name;
$todo->description = $data->description;
$todo->category_id = $data->category_id;
$todo->duedate = $data->duedate;
 
// update the todo
if($todo->update()){
    echo '{';
        echo '"message": "Todo was updated."';
    echo '}';
}
 
// if unable to update the todo, tell the user
else{
    echo '{';
        echo '"message": "Unable to update Todo."';
    echo '}';
}
?>