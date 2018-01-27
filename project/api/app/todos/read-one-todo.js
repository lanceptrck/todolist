$(document).ready(function(){
 
    // handle 'read one' button click
    $(document).on('click', '.read-one-todo-button', function(){
        // get todo id
		var id = $(this).attr('data-id');

		// read todo record based on given ID
		$.getJSON("http://localhost/project/api/todo/read_one.php?id=" + id, function(data){
		    // start html
			var read_one_todo_html="";
			 
			// when clicked, it will show the todo's list
			read_one_todo_html+="<div id='read-todos' class='btn btn-primary pull-right m-b-15px read-todos-button'>";
			    read_one_todo_html+="<span class='glyphicon glyphicon-list'></span> View To Do List";
			read_one_todo_html+="</div>";

			// todo data will be shown in this table
			read_one_todo_html+="<table class='table table-bordered table-hover'>";
			 
			    // todo name
			    // read_one_todo_html+="<tr>";
			    //     read_one_todo_html+="<td class='w-30-pct'>Name</td>";
			    //     read_one_todo_html+="<td class='w-70-pct'>" + data.name + "</td>";
			    // read_one_todo_html+="</tr>";
			 
			    // todo description
			    read_one_todo_html+="<tr>";
			        read_one_todo_html+="<td>Description</td>";
			        read_one_todo_html+="<td>" + data.description + "</td>";
			    read_one_todo_html+="</tr>";
			 
			    // todo category name
			    read_one_todo_html+="<tr>";
			        read_one_todo_html+="<td>Category</td>";
			        read_one_todo_html+="<td>" + data.category_name + "</td>";
			    read_one_todo_html+="</tr>";

			    			    // todo category name
			    read_one_todo_html+="<tr>";
			        read_one_todo_html+="<td>Due Date</td>";
			        read_one_todo_html+="<td>" + data.duedate+ "</td>";
			    read_one_todo_html+="</tr>";
			 
			read_one_todo_html+="</table>";

			// inject html to 'page-content' of our app
			$("#page-content").html(read_one_todo_html);
			 
			// chage page title
			changePageTitle("To Do: " + data.name);


    	});
 
	});
});