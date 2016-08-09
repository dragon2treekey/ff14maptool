$(window).on("load", function() {
  $("#G8_map1 > li").on("click", function() {
    $("#G8_map1 > li.selected").removeClass("selected");
    $(this).addClass("selected");
    $(".contents div").hide(); // 二つの要素を非表示にする
    $("." + this.id).show(); //クリックされたボタンに対応する要素を表示する

    if ($("#G8_map1 > li.G8_kanri").on("click")) {
      $(".contents_kanri").show();
      $(".map_serect").show();
      $(".user_kanri").show();
      $(".show_map").show();
      $(".G8_kouti_kanri").show();
    }
  });

  $("#G8_map2 > li").on("click", function() {
    $("#G8_map2 > li.selected").removeClass("selected");
    $(this).addClass("selected");
    $(".contents_kanri .map_serect div").hide(); // 二つの要素を非表示にする
    $(".contents_kanri").show();
    $(".map_serect").show();
    $(".user_kanri").show();
    $(".show_map").show();
    $("." + this.id).show(); // クリックされたボタンに対応する要素を表示する
  });
});