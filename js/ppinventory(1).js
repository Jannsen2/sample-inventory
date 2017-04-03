	var archive = '<button id="archive" class="archive btn-xs" style="float: right">Archive</button>';
	var remove = '<button id="remove" class="remove btn-xs" style="float: right">Remove</button>';
	
    // ensure document is ready for manipulation
    $( document ).ready(function() {
    	$("button").click(function(event){
			event.preventDefault();
			// declare jQuery objects
			var itemCat = $("#category").val();
			var item = $("#item").val();
			var desc = $("#itemDesc").val();
			var itemVal = $("#itemVal").val();
			var serial = $("#serialNum").val();
			var archivebtn = $(archive);
			var removebtn = $(remove);
			
			// append user input to "current" table
			$("#current").append(
				$('<tr>')
					.append($('<td>').append(item))
					.append($('<td>').append(desc))
					.append($('<td>').append(itemCat))
					.append($('<td>').append(itemVal))
					.append(archivebtn)
			);


			$("#category").val("");
			$("#item").val("");
			$("#itemDesc").val("");
			$("#itemVal").val("");
			$("#serialNum").val("");

		
			// Add to archived table then remove from current table
			$(archivebtn).click(function(){
				$(this).parent().remove();
				$("#archived").append( 
					$('<tr>')
					.append($('<td>').append(item))
					.append($('<td>').append(desc))
					.append($('<td>').append(itemCat))
					.append($('<td>').append(itemVal))
					.append(removebtn)
				);
		
				// remove task from table
				$(removebtn).click(function(event){
					$(this).parent().remove();
				});
			});
		});		
    });
