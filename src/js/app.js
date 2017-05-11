// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
var toggled = false;

function AppViewModel() {
    this.firstName = ko.observable("Bert");
    this.lastName = ko.observable("Bertington");
}

$("#toggle_button").click(function () {
    // assumes element with id='button'
    if (toggled == false) {
        $("#sidebar-wrapper").animate({
            "left": "-=300px",
            "opacity": 1
        }, "slow");
        $('#toggle_arrow').removeClass("left").addClass("right")

    } else {
        $("#sidebar-wrapper").animate({
            "left": "+=300px",
            "opacity": 1
        }, "slow");
        $('#toggle_arrow').removeClass("right").addClass("left")
    }
    toggled = !toggled;
});
// Activates knockout.js
ko.applyBindings(new AppViewModel());