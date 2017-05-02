// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {
    this.firstName = ko.observable("Bert");
    this.lastName = ko.observable("Bertington");
}

// Overlay menu open/close
/* Open when someone clicks on the span element */
function openNav(x) {
    document.getElementById("myNav").style.width = "20%";
    // x.classList.toggle("change");
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());