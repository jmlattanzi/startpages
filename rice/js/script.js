$(document).ready(function() {
    setInterval(function() {
        var date = new Date();
        $('#time').text(date.toLocaleTimeString());
    }, 1000);
})