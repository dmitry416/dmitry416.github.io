$(() => {
    $(document).mouseup(function (e) {
      if (e.target.className == "fa-solid fa-bars hamburg") {
        $(".dropdown").slideToggle();
        $(".hamburg").hide();
      } else {
        $(".dropdown").hide();
        $(".hamburg").show();
      }
    });
});
