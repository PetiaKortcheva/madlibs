$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    let inputs = ["#person1", "#person2", "#animal", "#exclamation", "#verb" , "#noun"]
    let spans = [".person1", ".person2", ".animal", ".exclamation", ".verb" , ".noun"]

    inputs.forEach(function(input, index) {
        $(spans[index]).text($(input).val())
    });
    $("#story").show();
  });
});