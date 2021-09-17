$(document).ready(function() {
    function changeTagLine(){
        $("#tag_line").text("Welcome to my little place on the web where I do something")
    }
    $("#tag_line").fadeOut(4800)
    setTimeout(changeTagLine, 5000)
});