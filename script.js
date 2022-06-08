// ---------------------- //
// ----- Javascript ----- //
// ---------------------- //


// Declare Variables
let btn1 = $("#btn1");
let btn2 = $("#btn2");
let btn3 = $("#btn3");
let btn4 = $("#btn4");
let btn5 = $("#btn5");
let btn6 = $("#btn6");
let btn7 = $("#btn7");
let btn8 = $("#btn8");
let btn9 = $("#btn9");


let text1 = $("#text1");

let currentHour = moment().hour();



// ---Functions Section--- ??

// Time Display Function
window.setInterval(function () {
    $('#clock').html(moment().format('MMM Do, YYYY H:mm:ss'));
    $('#currentHour').html("currentHour (militaryTime) is: " + currentHour);
}, 1000);



// save to storage function

function setText() {
    localStorage.setItem("text1", text1.val());
}

btn1.on("click", function () {
    console.log("btn1 clicked, text1 is: " + text1);
    setText();
} );

// Color Display Function
// Not Working Yet
// function currentTime() {

//     let rowTime = $(row).data("data-number");

//     console.log(rowTime +"rowtime");
//     console.log(currentHour +"currentHour");

//     if (currentHour > rowTime) {
//         $("row").addClass("past");
//     }
// }

// currentTime();



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


