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
let text2 = $("#text2");
let text3 = $("#text3");
let text4 = $("#text4");
let text5 = $("#text5");
let text6 = $("#text6");
let text7 = $("#text7");
let text8 = $("#text8");
let text9 = $("#text9");


let currentHour = moment().hour();



// ---Functions Section--- ??

// Time Display Function
window.setInterval(function () {
    $('#clock').html(moment().format('MMM Do, YYYY H:mm:ss'));
    $('#currentHour').html("currentHour (militaryTime) is: " + currentHour);
}, 1000);


// load from storage function
function getText() {
    var userInfo1 = localStorage.getItem("text1");
    text1.text(userInfo1);

    var userInfo2 = localStorage.getItem("text2");
    text2.text(userInfo2);

    var userInfo3 = localStorage.getItem("text3");
    text3.text(userInfo3);

    var userInfo4 = localStorage.getItem("text4");
    text4.text(userInfo4);

    var userInfo5 = localStorage.getItem("text5");
    text5.text(userInfo5);
    
}

getText();



// save to storage function
function setText() {
    localStorage.setItem("text1", text1.val());
    localStorage.setItem("text2", text2.val());
    localStorage.setItem("text3", text3.val());
    localStorage.setItem("text4", text4.val());
    localStorage.setItem("text5", text5.val());
    localStorage.setItem("text6", text6.val());
    localStorage.setItem("text7", text7.val());
    localStorage.setItem("text8", text8.val());
    localStorage.setItem("text9", text9.val());
}

btn1.on("click", function () {
    console.log("btn1 clicked, text1 is: " + text1);
    setText();
} );

btn2.on("click", function () {
    console.log("btn2 clicked, text2 is: " + text2);
    setText();
} );

btn3.on("click", function () {
    setText();
});

btn4.on("click", function () {
    setText();
});




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
// function testFunction() {
//     console.log("testFunction OK")
// };


// btn1.on("click", testFunction);

// btn2.on("click", function() {
//     console.log("btn2 clicked")
// });
// btn3.on("click", function() {
//     console.log("btn3 works")
// });


