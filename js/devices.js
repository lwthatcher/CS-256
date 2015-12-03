$( document ).ready(function() {
    
var curr = $('.page').html();

    $('.add-d').on('click',function(){

    	$(this).siblings('.add-child').remove();

    	var adding = "<div class='add-child'><div class='input-field'><input id='new-name' style='width:100%' type='text' name='name' placeholder='name'></div><div class='input-field'><input id='new-name' style='width:100%' type='text' name='id' placeholder='device id'></div><div class='save-d'><div class='save-text'>Save</div><div class='cancel-text'>cancel</div></div><div>";
    	$('.page').append(adding);

    	$('.save-text').on('click',function(){

    		var htmlN = '<div class="location alt"><div class="loc_name">' + $("#new-name").val() +'</div><div class="d"><img class="removed" src="../images/x_icon_02.png" width="15%" height="15%"/></div></div>';
    		$(this).closest('.add-child').remove();
       		$('.page').prepend(htmlN);
       		// $('.page').html(curr);

    	});

    	$('.cancel-text').on('click',function(){
       		$(this).closest('.add-child').remove();

    	});
    });

    $('.removed').on('click',function(){
    	$(this).closest('.location').remove();
    })
});
