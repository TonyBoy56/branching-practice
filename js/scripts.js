$(document).ready(function() {
    var age = parseInt(prompt("How old art thou?"));

    if (age >= 18) {
        $("#voting-info").show();
    }   else {
        $("#minor").show();
    }
});