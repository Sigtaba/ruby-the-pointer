$(document).ready(function() {
    $("button#day").click(function() {
      $("body").removeClass();
      $("body").addClass("day-mode");
  });

  $("button#night").click(function() {
    $("body").removeClass();
    $("body").addClass("night-mode");

});
});
