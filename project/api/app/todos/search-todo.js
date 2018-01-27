$(document).ready(function(){
 
    // when a 'search todos' button was clicked
    $(document).on('submit', '#search-todo-form', function(){
 
        // get search keywords
        var keywords = $(this).find(":input[name='keywords']").val();
        
            // get data from the api based on search keywords
            $.getJSON("http://localhost/project/api/todo/search.php?s=" + keywords, function(data){
     
                // template in todos.js
                readTodosTemplate(data, keywords);
     
                // chage page title
                changePageTitle("Search To Do: " + keywords);
     
            });
 
        // prevent whole page reload
        return false;
    });
 
});