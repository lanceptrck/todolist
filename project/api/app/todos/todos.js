// todo list html
function readTodosTemplate(data, keywords){
 
        var read_todos_html="";

        // search todos form
        read_todos_html+="<form id='search-todo-form' action='#' method='post'>";
        read_todos_html+="<div class='input-group pull-left w-30-pct'>";
     
            read_todos_html+="<input type='text' value=\"" + keywords + "\" name='keywords' class='form-control todo-search-keywords' placeholder='Search To-Do's...' />";
     
            read_todos_html+="<span class='input-group-btn'>";
                read_todos_html+="<button type='submit' class='btn btn-default' type='button'>";
                    read_todos_html+="<span class='glyphicon glyphicon-search'></span>";
                read_todos_html+="</button>";
            read_todos_html+="</span>";
     
        read_todos_html+="</div>";
        read_todos_html+="</form>";
 
        // when clicked, it will load the create todo form
        read_todos_html+="<div id='create-todo' class='btn btn-primary pull-right m-b-15px create-todo-button'>";
            read_todos_html+="<span class='glyphicon glyphicon-plus'></span> Add To-Do";
        read_todos_html+="</div>";

        // start table
        read_todos_html+="<table class='table table-bordered table-hover'>";
     
            // creating our table heading
            read_todos_html+="<tr>";
                read_todos_html+="<th class='w-10-pct'>Name</th>";
                read_todos_html+="<th class='w-20-pct'>Description</th>";
                read_todos_html+="<th class='w-10-pct'>Category</th>";
                read_todos_html+="<th class='w-15-pct'>Due Date</th>";
                read_todos_html+="<th class='w-25-pct text-align-center'>Action</th>";
            read_todos_html+="</tr>";
         
            // loop through returned list of data
        $.each(data.records, function(key, val) {
     
            // creating new table row per record
            read_todos_html+="<tr>";
     
                read_todos_html+="<td>" + val.name + "</td>";
                read_todos_html+="<td>" + val.description + "</td>";
                read_todos_html+="<td>" + val.category_name + "</td>";
                read_todos_html+="<td>" + val.duedate + "</td>";
     
                // 'action' buttons
                read_todos_html+="<td>";
                    // read one todo button
                    read_todos_html+="<button class='btn btn-primary m-r-10px read-one-todo-button' data-id='" + val.id + "'>";
                        read_todos_html+="<span class='glyphicon glyphicon-eye-open'></span> View";
                    read_todos_html+="</button>";
     
                    // edit button
                    read_todos_html+="<button class='btn btn-info m-r-10px update-todo-button' data-id='" + val.id + "'>";
                        read_todos_html+="<span class='glyphicon glyphicon-edit'></span> Edit";
                    read_todos_html+="</button>";
     
                    // delete button
                    read_todos_html+="<button class='btn btn-danger delete-todo-button' data-id='" + val.id + "'>";
                        read_todos_html+="<span class='glyphicon glyphicon-remove'></span> Delete";
                    read_todos_html+="</button>";
                read_todos_html+="</td>";
     
            read_todos_html+="</tr>";
     
        })
     
        // end table
        read_todos_html+="</table>";

        // pagination
        if(data.paging){
            read_todos_html+="<ul class='pagination pull-left margin-zero padding-bottom-2em'>";
         
                // first page
                if(data.paging.first!=""){
                    read_todos_html+="<li><a data-page='" + data.paging.first + "'>First Page</a></li>";
                }
         
                // loop through pages
                $.each(data.paging.pages, function(key, val){
                    var active_page=val.current_page=="yes" ? "class='active'" : "";
                    read_todos_html+="<li " + active_page + "><a data-page='" + val.url + "'>" + val.page + "</a></li>";
                });
         
                // last page
                if(data.paging.last!=""){
                    read_todos_html+="<li><a data-page='" + data.paging.last + "'>Last Page</a></li>";
                }
            read_todos_html+="</ul>";
        }

        // inject to 'page-content' of our app
        $("#page-content").html(read_todos_html);
}