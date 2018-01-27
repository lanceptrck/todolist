$(document).ready(function(){
 
    // show html form when 'create todo' button was clicked
    $(document).on('click', '.create-todo-button', function(){
        // load list of categories
		$.getJSON("http://localhost/project/api/category/read.php", function(data){

			// build categories option html
			// loop through returned list of data
			var categories_options_html="";
			categories_options_html+="<select name='category_id' class='form-control'>";
			$.each(data.records, function(key, val){
    			categories_options_html+="<option value='" + val.id + "'>" + val.name + "</option>";
			});

			categories_options_html+="</select>";

			// we have our html form here where todo information will be entered
			// we used the 'required' html5 property to prevent empty fields
			var create_todo_html="";
 
			// 'read todos' button to show list of todos
			create_todo_html+="<div id='read-todos' class='btn btn-primary pull-right m-b-15px read-todos-button'>";
    			create_todo_html+="<span class='glyphicon glyphicon-list'></span> View To Do List";
			create_todo_html+="</div>";

			// 'create todo' html form
			create_todo_html+="<form id='create-todo-form' action='#' method='post' border='0'>";
			    create_todo_html+="<table class='table table-hover table-responsive table-bordered'>";
			 
			        // name field
			        create_todo_html+="<tr>";
			            create_todo_html+="<td>Name</td>";
			            create_todo_html+="<td><input type='text' name='name' class='form-control' required /></td>";
			        create_todo_html+="</tr>";

			        // description field
			        create_todo_html+="<tr>";
			            create_todo_html+="<td>Description</td>";
			            create_todo_html+="<td><textarea name='description' class='form-control' required></textarea></td>";
			        create_todo_html+="</tr>";
			 
			        // categories 'select' field
			        create_todo_html+="<tr>";
			            create_todo_html+="<td>Category</td>";
			            create_todo_html+="<td>" + categories_options_html + "</td>";
			        create_todo_html+="</tr>";

			        			        // description field
			        create_todo_html+="<tr>";
			            create_todo_html+="<td>Due Date</td>";
			            create_todo_html+="<td><input type='datetime-local' name='duedate' class='form-control' required></textarea></td>";
			        create_todo_html+="</tr>";
			 
			        // button to submit form
			        create_todo_html+="<tr>";
			            create_todo_html+="<td></td>";
			            create_todo_html+="<td>";
			                create_todo_html+="<button type='submit' class='btn btn-primary'>";
			                    create_todo_html+="<span class='glyphicon glyphicon-plus'></span> Create To Do";
			                create_todo_html+="</button>";
			            create_todo_html+="</td>";
			        create_todo_html+="</tr>";
			 
			    create_todo_html+="</table>";
			create_todo_html+="</form>";

			// inject html to 'page-content' of our app
			$("#page-content").html(create_todo_html);
			 
			// chage page title
			changePageTitle("Add To Do");
			 
		});
    });
 
    // will run if create todo form was submitted
	$(document).on('submit', '#create-todo-form', function(){
	    // get form data
		var form_data=JSON.stringify($(this).serializeObject());

		// submit form data to api
		$.ajax({
		    url: "http://localhost/project/api/todo/create.php",
		    type : "POST",
		    contentType : 'application/json',
		    data : form_data,
		    success : function(result) {
		        // todo was created, go back to todos list
		        showTodosFirstPage();
		    },
		    error: function(xhr, resp, text) {
		        // show error to console
		        console.log(xhr, resp, text);
		    }
		});
		 
		return false;

	}); // create data form

}); // end