let toDisplay = "";
let signAcceptance = false;


// RESET toDisplay WHEN AC BUTTON IS PRESSED
$(".btn-ac").click(function () {
    toDisplay = "";
    $("#display").text("0");
});


// DISPLAY ONCE WHEN ANY SIGN IS PRESSED
$(".sign").click(function () {
    if (signAcceptance) {
        let useSign = $(this).text();
        if (toDisplay === "") {
            toDisplay = "0" + useSign;
        } else {
            toDisplay += useSign;
        }
        $("#display").text(toDisplay);
        signAcceptance = false;
    }
});


// DISPLAY NUMBER WHEN ANY NUMBER IS PRESSED
$(".nums").click(function () {
    toDisplay += $(this).text();
    $("#display").text(toDisplay);
    signAcceptance = true;
});


// BACKSPACE
$(".btn-bs").click(function () {
    toDisplay = toDisplay.substring(0, toDisplay.length-1);
    if (toDisplay.length === 0 || toDisplay[toDisplay.length-1] == "0") {
        toDisplay = "";
        $("#display").text("0");
    } else {
        $("#display").text(toDisplay);
    }
    signAcceptance = true;
});


// EVALUATE THE ARITHMATIC OPERATION
$(".btn-equal").click(function () {
    toDisplay = eval(toDisplay);
    $("#display").text(toDisplay);
})


// ANIMATION WHEN ANY BUTTON IS PRESSED
$(".btn").click(function () {
    let pressedBTN = this;

    $(pressedBTN).addClass("pressed");
    setInterval(function () {
        $(pressedBTN).removeClass("pressed");
    }, 400);
});