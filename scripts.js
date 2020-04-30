console.log("Script file is loaded");
$('h1').html("This is done by <em>JS!</em>");
$('h2').toggleClass('blue');

function myLittleFunction(){
    $('main').append('<p>A p is appended in the main</p>');
    $('p').css('border', '1px solid red');
    $('p').css('10px', 'padding');
}
$('#add').click(myLittleFunction);
$('#remove').click (function (){
    $('p:last-child').remove();
});