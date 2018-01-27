$(document).ready(function(){
 
    // show html form when 'update todo' button was clicked
    $(document).on('click', '.update-todo-button', function(){
        // get todo id
		var id = $(this).attr('data-id');

		// read one record based on given todo id
		$.getJSON("http://localhost/project/api/todo/read_one.php?id=" + id, function(data){
		 
		    // values will be used to fill out our form
		    var name = data.name;
		    var description = data.description;
		    var category_id = data.category_id;
		    var category_name = data.category_name;
		    var duedate = data.duedate;
		     
		    // load list of categories
			$.getJSON("http://localhost/project/api/category/read.php", function(data){
			 
			    // build 'categories option' html
			    // loop through returned list of data
			    var categories_options_html="";
			    categories_options_html+="<select name='category_id' class='form-control'>";
			 
			    $.each(data.records, function(key, val){
			         
			        // pre-select option is category id is the same
			        if(val.id==category_id){
			            categories_options_html+="<option value='" + val.id + "' selected>" + val.name + "</option>";
			        }
			 
			        else{
			            categories_options_html+="<option value='" + val.id + "'>" + val.name + "</option>";
			        }
			    });
			    categories_options_html+="</select>";
			     
			    // store 'update todo' html to this variable
				var update_todo_html="";
				 
				// 'read todos' button to show list of todos
				update_todo_html+="<div id='read-todos' class='btn btn-primary pull-right m-b-15px read-todos-button'>";
				    update_todo_html+="<span class='glyphicon glyphicon-list'></span> View To Do List";
				update_todo_html+="</div>";

				// build 'update todo' html form
				// we used the 'required' html5 property to prevent empty fields
				update_todo_html+="<form id='update-todo-form' action='#' method='post' border='0'>";
				    update_todo_html+="<table class='table table-hover table-responsive table-bordered'>";
				 
				        // name field
				        update_todo_html+="<tr>";
				            update_todo_html+="<td>Name</td>";
				            update_todo_html+="<td><input value=\"" + name + "\" type='text' name='name' class='form-control' required /></td>";
				        update_todo_html+="</tr>";
				 
				 
				        // description field
				        update_todo_html+="<tr>";
				            update_todo_html+="<td>Description</td>";
				            update_todo_html+="<td><textarea name='description' class='form-control' required>" + description + "</textarea></td>";
				        update_todo_html+="</tr>";
				 
				        // categories 'select' field
				        update_todo_html+="<tr>";
				            update_todo_html+="<td>Category</td>";
				            update_todo_html+="<td>" + categories_options_html + "</td>";
				        update_todo_html+="</tr>";

				        // date/time field
				   		update_todo_html+="<tr>";
				            update_todo_html+="<td>Due Date</td>";
				            update_todo_html+="<td><input value=\"" + duedate + "\" type='datetime-local' name='duedate' class='form-control' required /></td>";
				        update_todo_html+="</tr>";


				 
				        update_todo_html+="<tr>";
				 
				            // hidden 'todo id' to identify which record to delete
				            update_todo_html+="<td><input value=\"" + id + "\" name='id' type='hidden' /></td>";
				 
				            // button to submit form
				            update_todo_html+="<td>";
				                update_todo_html+="<button type='submit' class='btn btn-info'>";
				                    update_todo_html+="<span class='glyphicon glyphicon-edit'></span> Update";
				                update_todo_html+="</button>";
				            update_todo_html+="</td>";
				 
				        update_todo_html+="</tr>";
				 
				    update_todo_html+="</table>";
				update_todo_html+="</form>";

				// inject to 'page-content' of our app
				$("#page-content").html(update_todo_html);
				 
				// chage page title
				changePageTitle("Edit To Do: "+ name);

			});
		});
    });
     
    // will run if 'create todo' form was submitted
	$(document).on('submit', '#update-todo-form', function(){
	     
	    // get form data
		var form_data=JSON.stringify($(this).serializeObject());

		// submit form data to api
		$.ajax({
		    url: "http://localhost/project/api/todo/update.php",
		    type : "POST",
		    contentType : 'application/json',
		    data : form_data,
		    success : function(result) {
		        // todo was created, go back to todo list
		        showTodosFirstPage();
		    },
		    error: function(xhr, resp, text) {
		        // show error to console
		        console.log(xhr, resp, text);
		    }
		});
	     
	    return false;
	});

});