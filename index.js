$(document).on("click", ".label-header", function () {
  $(".label-header").removeClass("label-active");
  $(this).addClass("label-active");
  console.log($(this).index());
  if ($(this).index() == 1) {
    console.log("123");
    $(document).find(".del").removeClass("del");
    $(document).find(".tab-form").addClass("del");
  } else {
    $(document).find(".del").removeClass("del");
    $(document).find(".reg-form").addClass("del");
  }
});
