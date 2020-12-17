$(function() {
    // Creates new burgers
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newBurger")
            .val()
            .trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("You added a new burger!");
            location.reload();
        });
    });

    // Changes to devoured
    $(".eatburger").on("click", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
        var devouredState = {
            devoured: 1
        };
    });

    // Send the PUT request
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredState
    }).then(function() {
        console.log("You ate the burger!");
        location.reload()
    });

    // Send the DELETE request
    $(".deleteburger").on("click", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
       $.ajax("/apie/burgers/" + id, {
           type: "DELETE"
       }).then(function() {
           console.log("You deleted the burger");
           location.reload();
       });
    });
});