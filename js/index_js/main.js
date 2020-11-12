

$(function(){
	
	var
	  winW = $(window).width(),
		winH = $(window).height(),
		nav = $('#mainnav ul a'),
		curPos = $(this).scrollTop();
	
	if (winW > 880){
		var headerH =20;
	}
	else{
		var headerH =60;
	}
	
	$(nav).on('click', function(){
		nav.removeClass('active');
  	var $el = $(this),
		id = $el.attr('href');
 		$('html, body').animate({
   		scrollTop: $(id).offset().top - headerH
 		}, 500);
		$(this).addClass('active');
		if (winW < 880){
			$('#menuWrap').next().slideToggle();
			$('#menuBtn').removeClass('close');
		}
 		return false;
	});
	
	$('.panel').hide();
	$('#menuWrap').toggle(function(){
		$(this).next().slideToggle();
		$('#menuBtn').toggleClass('close');
	},
	function(){
		$(this).next().slideToggle();
		$('#menuBtn').removeClass('close');
	});
});


// $(document).ready(function () {
// 	const element1 = document.querySelector("#wrk");
// 	element1.addEventListener("click", () => {
// 		$(document.body).fadeOut("slow", () => {});
// 	});
// });

//分子
particlesJS('particle',{
  "particles":{
 
//--シェイプの設定----------
      "number":{
        "value":5, //シェイプの数
        "density":{
          "enable":true, //シェイプの密集度を変更するか否か
          "value_area":100 //シェイプの密集度
        }
      },
      "shape":{
        "type":"circle", //シェイプの形（circle:丸、edge:四角、triangle:三角、polygon:多角形、star:星型、image:画像）
        "stroke":{
          "width":0, //シェイプの外線の太さ
          "color":"#ffcc00" //シェイプの外線の色
        },
        //typeをpolygonにした時の設定
        "polygon": {
          "nb_sides": 5 //多角形の角の数
        },
        //typeをimageにした時の設定
        "image": {
          "src": "images/hoge.png",
          "width": 100,
          "height": 100
        }
      },
      "color":{
        "value":"#ffabce" //シェイプの色
      },
      "opacity":{
        "value":0.3, //シェイプの透明度
        "random":false, //シェイプの透明度をランダムにするか否か
        "anim":{
          "enable":true, //シェイプの透明度をアニメーションさせるか否か
          "speed":1, //アニメーションのスピード
          "opacity_min":0.1, //透明度の最小値
          "sync":false //全てのシェイプを同時にアニメーションさせるか否か
        }
      },
      "size":{
        "value":100, //シェイプの大きさ
        "random":true, //シェイプの大きさをランダムにするか否か
        "anim":{
          "enable":false, //シェイプの大きさをアニメーションさせるか否か
          "speed":40, //アニメーションのスピード
          "size_min":0.1, //大きさの最小値
          "sync":false //全てのシェイプを同時にアニメーションさせるか否か
        }
      },
//--------------------

//--線の設定----------
      "line_linked":{
        "enable":true, //線を表示するか否か
        "distance":150, //線をつなぐシェイプの間隔
        "color":"#808080", //線の色
        "opacity":0.8, //線の透明度
        "width":0.5 //線の太さ
      },
//--------------------

//--動きの設定----------
      "move":{
        "speed":2, //シェイプの動くスピード
        "straight":false, //個々のシェイプの動きを止めるか否か
        "direction":"top", //エリア全体の動き(none、top、top-right、right、bottom-right、bottom、bottom-left、left、top-leftより選択)
        "out_mode":"out" //エリア外に出たシェイプの動き(out、bounceより選択)
      }
//--------------------

    },
 
    "interactivity":{
      "detect_on":"canvas",
      "events":{

//--マウスオーバー時の処理----------
        "onhover":{
          "enable":true, //マウスオーバーが有効か否か
          "mode":"repulse" //マウスオーバー時に発動する動き(下記modes内のgrab、repulse、bubbleより選択)
        },
//--------------------

//--クリック時の処理----------
        "onclick":{
          "enable":true, //クリックが有効か否か
          "mode":"remove" //クリック時に発動する動き(下記modes内のgrab、repulse、bubble、push、removeより選択)
        },
//--------------------

      },
 
      "modes":{

//--シェイプがカーソルから逃げる----------
        "repulse":{
          "distance":200 //カーソルからの反応距離
        },
//--------------------

//--シェイプが膨らむ----------
        "bubble":{
          "distance":400, //カーソルからの反応距離
          "size":40, //シェイプの膨らむ大きさ
          "opacity":8, //膨らむシェイプの透明度
          "duration":2, //膨らむシェイプの持続時間(onclick時のみ)
          "speed":3 //膨らむシェイプの速度(onclick時のみ)
        },
//--------------------

//--シェイプが減る----------
        "remove":{
          "particles_nb":2 //減るシェイプの数
        }
//--------------------

      }
    },
    "retina_detect":true, //Retina Displayを対応するか否か
    "resize":true //canvasのサイズ変更にわせて拡大縮小するか否か
  }
);

//ロゴフェードアウト
$(function(){
  $("#biglogo").click(function(){
    $("#biglogo").fadeOut(2000, () => {});
  });
});

//フェードイン
$(function(){
	$(window).scroll(function (){
		$('.fadein').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 200){
				$(this).addClass('scrollin');
			}
		});
	});
});

// 画面遷移遅延用
$(function() {
  //'#'から始まるhrefを持つaタグ、target属性を持つaタグを除く
  $('a:not([href^="#"]):not([target])').on('click', function(e){
    //クリック時の挙動を停止
    e.preventDefault(); 
    //href属性の属性情報を取得
    url = $(this).attr('href');
    if (url !== '') {
      //bodyタグへ任意のクラスを追加
      $('body').addClass('class_name');
      //setTimeOutを用いて500s後にurl遷移を実行
      setTimeout(function(){
        window.location = url;
      }, 300);
    }
    return false;
  });
});

// animation
const el1 = document.querySelector("#im1")
el1.addEventListener("click", function () {
  if (el1.style.animationPlayState == "paused") {
    el1.style.animationPlayState = "running";
  }
})


// ノート切り替え
$(function(){
  $("#im2").click(function(){
    $(this).fadeOut("normal", () => {});
    $(this).attr("src","images/note_manga.png")
    $(this).fadeIn("fast", () => {});
  });
});