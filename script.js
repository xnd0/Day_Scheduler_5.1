// ---------------------- //
// ----- Javascript ----- //
// ---------------------- //




window.setInterval(function () {
    $('#clock').html(moment().format('MMM Do, YYYY H:mm:ss'))
}, 1000);