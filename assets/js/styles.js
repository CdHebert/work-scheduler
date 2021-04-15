
var newTime = new Date();
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//console.log(time);

function localTime() {
    var newTime = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var thisDate = newTime.toLocaleDateString("en-US", options);
    document.getElementById("currentDay").innerHTML = thisDate;
}

localTime();

var loadEvents = function () {
    var event9 = (localStorage.getItem("event9"));
    var event10 = (localStorage.getItem("event10"));
    var event11 = (localStorage.getItem("event11"));
    var event12 = (localStorage.getItem("event12"));
    var event13 = (localStorage.getItem("event13"));
    var event14 = (localStorage.getItem("event14"));
    var event15 = (localStorage.getItem("event15"));
    var event16 = (localStorage.getItem("event16"));
    var event17 = (localStorage.getItem("event17"));

    $("#9").val(event9)
    $("#10").val(event10)
    $("#11").val(event11)
    $("#12").val(event12)
    $("#13").val(event13)
    $("#14").val(event14)
    $("#15").val(event15)
    $("#16").val(event16)
    $("#17").val(event17)
};


$(".btn").click(function () {
    var areaText = $(this).siblings("textarea")[0].value;
    var id = $(this).siblings("textarea")[0].id;
    console.log(areaText);
    localStorage.setItem("event" + id, areaText);
});



loadEvents();