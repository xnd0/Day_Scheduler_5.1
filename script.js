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

    var userInfo6 = localStorage.getItem("text6");
    text6.text(userInfo6);
    
    var userInfo7 = localStorage.getItem("text7");
    text7.text(userInfo7);

    var userInfo8 = localStorage.getItem("text8");
    text8.text(userInfo8);

    var userInfo9 = localStorage.getItem("text9");
    text9.text(userInfo9);
    
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


// Button Clickers (9AM-5PM)

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

btn5.on("click", function () {
    setText();
});

btn6.on("click", function () {
    setText();
});

btn7.on("click", function () {
    setText();
});

btn8.on("click", function () {
    setText();
});

btn9.on("click", function () {
    setText();
});




// Color Display Function

function rowColor() {

    console.log("currentHour is: " + currentHour)
    if (currentHour > 9) {
        text1.addClass("past");
    } else if (currentHour < 9) {
        text1.addClass("future");
    } else {
        text1.addClass("present");
    }


    if (currentHour > 10) {
        text2.addClass("past");
    } else if (currentHour < 10) {
        text2.addClass("future");
    } else {
        text2.addClass("present");
    }


    if (currentHour > 11) {
        text3.addClass("past");
    } else if (currentHour < 11) {
        text3.addClass("future");
    } else {
        text3.addClass("present");
    }


    if (currentHour > 12) {
        text4.addClass("past");
    } else if (currentHour < 12) {
        text4.addClass("future");
    } else {
        text4.addClass("present");
    }


    if (currentHour > 13) {
        text5.addClass("past");
    } else if (currentHour < 13) {
        text5.addClass("future");
    } else {
        text5.addClass("present");
    }


    if (currentHour > 14) {
        text6.addClass("past");
    } else if (currentHour < 14) {
        text6.addClass("future");
    } else {
        text6.addClass("present");
    }


    if (currentHour > 15) {
        text7.addClass("past");
    } else if (currentHour < 15) {
        text7.addClass("future");
    } else {
        text7.addClass("present");
    }


    if (currentHour > 16) {
        text8.addClass("past");
    } else if (currentHour < 16) {
        text8.addClass("future");
    } else {
        text8.addClass("present");
    }


    if (currentHour > 17) {
        text9.addClass("past");
    } else if (currentHour < 17) {
        text9.addClass("future");
    } else {
        text9.addClass("present");
    }
}




rowColor();

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


