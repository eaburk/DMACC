$(() => {
  $("#btnClickMe").click(() => {
    $.get("snippet.php", (responseText) => {
      $("#container").html(responseText);
    });
  });
});