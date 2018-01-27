<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
// get database connection
include_once '../config/database.php';
 
// instantiate todo object
include_once '../objects/todo.php';
 
$database = new Database();
$db = $database->getConnection();
 
$todo = new todo($db);
 
// get posted data
$data = json_decode(file_get_contents("php://input"));
 
// set todo property values
$todo->name = $data->name;
$todo->description = $data->description;
$todo->category_id = $data->category_id;
$todo->created = date('Y-m-d H:i:s');
$todo->duedate = $data->duedate;
 
// create the todo
if($todo->create()){
    echo '{';
        echo '"message": "todo was created."';
    echo '}';
}
 
// if unable to create the todo, tell the user
else{
    echo '{';
        echo '"message": "Unable to create todo."';
    echo '}';
}
?>