<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
 
// include database and object files
include_once '../config/database.php';
include_once '../objects/todo.php';
 
// instantiate database and todo object
$database = new Database();
$db = $database->getConnection();
 
// initialize object
$todo = new Todo($db);
 
// get keywords
$keywords=isset($_GET["s"]) ? $_GET["s"] : "";
 
// query todos
$stmt = $todo->search($keywords);
$num = $stmt->rowCount();
 
// check if more than 0 record found
if($num>0){
 
    // todos array
    $todos_arr=array();
    $todos_arr["records"]=array();
 
    // retrieve our table contents
    // fetch() is faster than fetchAll()
    // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);
 
        $todo_item=array(
            "id" => $id,
            "name" => $name,
            "description" => html_entity_decode($description),
            "category_id" => $category_id,
            "category_name" => $category_name,
            "duedate" => $duedate,
            "created" => $created,
        );
 
        array_push($todos_arr["records"], $todo_item);
    }
 
    echo json_encode($todos_arr);
}
 
else{
    echo json_encode(
        array("message" => "No todos found.")
    );
}
?>