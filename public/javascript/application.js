$(document).ready(function() {
  $("h1").html("BOOM DYNAMIC!");
  createBox();
  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});


      //Version 2: Using dynamic variables (no assignment)
// function createBox() {
//   $("h1").after(
//     "<div>" + articleTitle + "</div>"
//
//   );}



      //Version 1: Totally static.

function createBox() {
  $("h1").after(`
    <div>
      <h1>The Title</h1>
      <img src="academic-sloth.jpg" width="120px">
      <p>This is what I thought of that one article</p>
    </div>`);
}
