let Player1WinCount = (Player2WinCount = 0);
$(document).ready(function() {
  $(".next").click(function(e) {
    $("#my-form .form-control").removeClass("is-invalid");
    const player1Name = $.trim($("#player1Name").val());
    const player2Name = $.trim($("#player2Name").val());
    if (!player1Name || !player2Name) {
      e.preventDefault();
      if (!player1Name) {
        $("#player1Name").addClass("is-invalid");
      }
      if (!player2Name) {
        $("#player2Name").addClass("is-invalid");
      }
      return;
    }
    $(".player1Namelabel").empty().text(player1Name);
    $(".player2Namelabel").empty().text(player2Name);
    const current_fs = $(this).parent().closest("fieldset");
    const next_fs = $(this).parent().closest("fieldset").next();
    let opacity;
    next_fs.show();
    current_fs.animate(
        {
          opacity: 0,
        },
        {
          step: function(now) {
          // for making fielset appear animation
            opacity = 1 - now;
            current_fs.css({
              display: "none",
              position: "relative",
            });
            next_fs.css({
              opacity: opacity,
            });
          },
          duration: 600,
        },
    );
    Player1WinCount = Player2WinCount = 0;
    if ($(this).hasClass("final")) {
      saveUserData();
    }
  });

  $(".player1Counter").click(function(e) {
    Player1WinCount++;
    $(".Player1WinCount, #Player1WinCount").empty().text(Player1WinCount);
    $("#Player1WinCount").empty().val(Player1WinCount);
    decideWinner();
  });

  $(".player2Counter").click(function(e) {
    Player2WinCount++;
    $(".Player2WinCount, #Player2WinCount").empty().text(Player2WinCount);
    $("#Player2WinCount").empty().val(Player2WinCount);
    decideWinner();
  });

  function decideWinner() {
    if (Player1WinCount === Player2WinCount) {
      $(".winner-name, #winner-name").empty().text("Tie").val("Tie");
      $(".winning-difference, #winning-difference").empty().val("");
      return;
    }

    const player1Name = $.trim($("#player1Name").val());
    const player2Name = $.trim($("#player2Name").val());

    const winner_name = Player1WinCount > Player2WinCount ? player1Name : player2Name;
    const winning_difference = Math.abs(Player1WinCount - Player2WinCount);

    $(".winner-name, #winner-name").empty().text(winner_name).val(winner_name);
    $(".winning-difference, #winning-difference").empty().text(winning_difference).val(winning_difference);
  }
});

function saveUserData() {
  $.ajax({
    method: "POST",
    url: "/save",
    data: $("#my-form").serialize(),
  })
      .done(function(msg) {})
      .fail(function(jqXHR, textStatus) {});
}
