// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
var toggled = false;

function AppViewModel() {
    this.firstName = ko.observable("Bert");
    this.lastName = ko.observable("Bertington");
}

$.ajax({
  type: "GET",
  url: "https://developers.zomato.com/api/v2.1/search?lat=12.942028&lon=77.5876644&establishment_type=restaurant",
  headers: { "user-key" : "8b76aaae3b80cca4284fac57a0f448ce",
             "Accept" : "application/json"
  },
  dataType: "json",
  cache: false,
  success: function(data){
     $("#sidebar").text(data["results_found"]);
  },
  error: function(data) {
     $("#sidebar").text("ERROR ERROR ERROR");  
  }
});

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