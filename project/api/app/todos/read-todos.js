$(document).ready(function(){
 
    // show list of todo on first load
    showTodosFirstPage();
 
    // when a 'read todos' button was clicked
    $(document).on('click', '.read-todos-button', function(){
        showTodosFirstPage();
    });
 
    // when a 'page' button was clicked
    $(document).on('click', '.pagination li', function(){
        // get json url
        var json_url=$(this).find('a').attr('data-page');
 
        // show list of todos
        showTodos(json_url);
    });
 
 
});
 
function showTodosFirstPage(){
    var json_url="http://localhost/project/api/todo/read_paging.php";
    showTodos(json_url);
}
 
// function to show list of todos
function showTodos(json_url){
 
    // get list of todos from the API
    $.getJSON(json_url, function(data){
 
        // html for listing todos
        readTodosTemplate(data, "");
 
        // chage page title
        changePageTitle("My To-Do List");
 
    });
}