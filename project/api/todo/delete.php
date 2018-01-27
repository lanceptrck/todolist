<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
 
// include database and object file
include_once '../config/database.php';
include_once '../objects/todo.php';
 
// get database connection
$database = new Database();
$db = $database->getConnection();
 
// prepare todo object
$todo = new todo($db);
 
// get todo id
$data = json_decode(file_get_contents("php://input"));
 
// set todo id to be deleted
$todo->id = $data->id;
 
// delete the todo
if($todo->delete()){
    echo '{';
        echo '"message": "Todo was deleted."';
    echo '}';
}
 
// if unable to delete the todo
else{
    echo '{';
        echo '"message": "Unable to delete object."';
    echo '}';
}
?>