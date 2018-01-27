<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
 
// include database and object files
include_once '../config/core.php';
include_once '../shared/utilities.php';
include_once '../config/database.php';
include_once '../objects/todo.php';
 
// utilities
$utilities = new Utilities();
 
// instantiate database and todo object
$database = new Database();
$db = $database->getConnection();
 
// initialize object
$todo = new Todo($db);
 
// query todos
$stmt = $todo->readPaging($from_record_num, $records_per_page);
$num = $stmt->rowCount();
 
// check if more than 0 record found
if($num>0){
 
    // todos array
    $todos_arr=array();
    $todos_arr["records"]=array();
    $todos_arr["paging"]=array();
 
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
            "created" => $created,
            "duedate" => $duedate,
            "category_id" => $category_id,
            "category_name" => $category_name
        );
 
 
        array_push($todos_arr["records"], $todo_item);
    }
 
 
    // include paging
    $total_rows=$todo->count();
    $page_url="{$home_url}todo/read_paging.php?";
    $paging=$utilities->getPaging($page, $total_rows, $records_per_page, $page_url);
    $todos_arr["paging"]=$paging;
 
    echo json_encode($todos_arr);
}
 
else{
    echo json_encode(
        array("message" => "No todos found.")
    );
}
?>