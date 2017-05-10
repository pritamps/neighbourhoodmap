// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
var toggled = true;

function AppViewModel() {
    this.firstName = ko.observable("Bert");
    this.lastName = ko.observable("Bertington");
}

$("#toggle_button").click(function() { 
    // assumes element with id='button'
    if (toggled == true) {
        $("#filter_box").animate({"left": "-=300px", "opacity":1}, "slow");
        $('#toggle_button').animate({"left": "-=300px", "opacity":1}, "slow");
    }
    else {
        $("#filter_box").animate({"left": "+=300px", "opacity":1}, "slow");
        $('#toggle_button').animate({"left": "+=300px", "opacity":1}, "slow");
    }
    toggled = !toggled;
});

// Activates knockout.js
ko.applyBindings(new AppViewModel());