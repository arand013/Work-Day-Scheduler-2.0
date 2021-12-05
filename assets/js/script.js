// Moment.js 

var currentDate = moment().format('dddd') + " " + moment().format("Dd MMM YYYY");
var currentHour = moment().format('h:mm:ss a');

// Text hour var
var nineAm = $("#9am");
var tenAm = $("#10am");
var elevenAm = $("#11am");
var twelvePm = $("#12pm");
var onePm = $("#13pm");
var twoPm = $("#14pm");
var threePm = $("#15pm");
var fourPm = $("#16pm");
var fivePm = $("#17pm");
var sixPm = $("#18pm");
var sevenPm = $("#19pm");

var hour = moment().hours();
var userInput;
var hourSpan;

// Date and Hour

var interval = setInterval(function () {

    var momentNow = moment();
    $('#currentDay').html(momentNow.format('YYYY MMMMM DD') + ' '
        + momentNow.format('dddd')
            .subtring(0, 3).toUpperCase());

    $('#currentDay').html(currentDate + " " + momentNow.format('hh:mm:ss A'));
}, 100);

function initPage() {

    console.log("Current Hour " + hour);
    var init9 = JSON.parse(localStorage.getItem("09:00 am"));
    nineAm.val(init9)
}

function background() {
    $(".form-control").each(function() {

        var timeTest = parseInt($(this).attr("id"));
        hour = parseInt(hour);
        console.log(timeTest);
        console.log(hour);

        if (hour > timeTest) {
            $(this).addClass("past");
        } else if (hour < timeTest) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
    })
}