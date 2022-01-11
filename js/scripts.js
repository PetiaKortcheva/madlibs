$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const animalInput= $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

    $("#story").show();
  });
});


// $(document).ready(function() {
//   $("#formOne").submit(function(event) {
//     event.preventDefault();
//     let inputs = ["#person1", "#person2", "#animal", "#exclamation", "#verb" , "#noun"]
//     let spans = [".person1", ".person2", ".animal", ".exclamation", ".verb" , ".noun"]

//     inputs.forEach(function(input, index) {
//         $(spans[index]).text($(input).val())
//     });
//     $("#story").show();
//   });
// });