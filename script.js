// ---------------------- //
// ----- Javascript ----- //
// ---------------------- //



let btn1 = $("#btn1");
let btn2 = $("#btn2");
let btn3 = $("#btn3");
let btn4 = $("#btn4");
let btn5 = $("#btn5");
let btn6 = $("#btn6");
let btn7 = $("#btn7");
let btn8 = $("#btn8");
let btn9 = $("#btn9");

let currentHour = moment().hour();


window.setInterval(function () {
    $('#clock').html(moment().format('MMM Do, YYYY H:mm:ss'));
    $('#currentHour').html("currentHour (militaryTime) is: " + currentHour);
}, 1000);




// ---Tester Area--- ??
function testFunction() {
    console.log("testFunction OK")
};


btn1.on("click", testFunction);

btn2.on("click", function() {
    console.log("btn2 clicked")
});
btn3.on("click", function() {
    console.log("btn3 works")
});


