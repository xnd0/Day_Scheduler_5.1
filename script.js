// ---------------------- //
// ----- Javascript ----- //
// ---------------------- //



let btn1 = $("#btn1");
let btn2 = $("#btn2");
let btn3 = $("#btn3");


window.setInterval(function () {
    $('#clock').html(moment().format('MMM Do, YYYY H:mm:ss'))
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


