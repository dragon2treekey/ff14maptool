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
      $(".form2").show();
      $("#G8_map2 > li.selected").removeClass("selected");
      $("#G8_kouti_kanri").addClass("selected");
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


  $("img.G8_map_syousai").click(function(){
    $("input#memo_text").val(this.id);
  });

//画像切り替え
  var i = 0;
  $(".map_kirikae").on("click", function() {
    i++;

    if (i % 2 == 0){
      $(".G8_map2").hide();
      $(".G8_map_syousai").show();
    }else{
      $(".G8_map_syousai").hide();
      $(".G8_map2").show();
    }

  });

//自動更新
  var kousin = 0;
  $(".kousin").on("click", function() {
    kousin++;
    // console.log(kousin);

    if (kousin % 2 == 0){
      $('.kousin').text("自動更新:OFF")

    }else{
      $('.kousin').text("自動更新:ON")
      var zkousin = 0;
      var zkousin_z = setInterval(function(){
        zkousin++;
        console.log(zkousin);

        if (kousin % 2 == 0){
          clearInterval(zkousin_z);
        }

        if (zkousin % 15 == 0){
          $.ajax({
          url: "/g8map?method=patch",
          type: "GET",
          data: {},
          dataType: "script",
          // success: function(data) {
          //     console.log("自動更新に成功しました");
          // },
          // error: function(data) {
          //     console.log("自動更新に失敗しました。");
          // }
          });
        }
      }, 100);
    };
  });

});