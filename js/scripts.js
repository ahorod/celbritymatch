$(document).ready(function() {
  $("#form").submit(function(event) {
    var color = $("#color").val();
    var personality = $("input:radio[name=personality]:checked").val();
    console.log(color + personality);

    if (personality === 'romantic' && (color === "black" || color === "red")) {
      $("#adam").show();
    }
    else if (personality === "outgoing" && (color === "black" || color === "red" || color === "green")) {
      $("#rhinna").show();
    }
    else if (color ==="blue") {
      $("#adele").show();
    }
    else {
      $("#robertdeniro").show();
    }
      event.preventDefault();
  });
});
