//Movie App jQuery
$(document).ready(function(){
    //prevent default form submission
    $('form').submit(function (event) {
        event.preventDefault(); 

    //set values from input 
    let title = $('#title').val();
    let rating = $('#rating').val();

    //Append your values to the DOM 
    $('#entries').append("<div><strong>Title of Film:</strong>" + title +  
    " </div><div><strong>Film Rating:</strong>" + rating + 
    "</div><div><button class='remove'>Remove</button></div>");

    //Clear your values from the input submission
    $('#title').val('');
    $('#rating').val('');
});
    //Remove your entries from the DOM 
    $('#entries').on('click', '.remove', function () {
        $(this).parent().remove()
    });
});

