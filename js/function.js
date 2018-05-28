"use strict"; !
function(t, i) {
    var e = {
        id: "#cardArea",
        sid: ".card-item"
    };
    i.fn.cardArea = function(t) {
        var t = i.extend({},
        e, t);
        return this.each(function() {

            var e = i(t.id),
            n = e.find(t.sid);
            n.on("mouseenter",
            function() {
                changeArea($(this)[0].id)
                i(this).addClass("active").siblings().removeClass("active")

            })
        })
    };
} (window, jQuery);


$('.tab .menus li').each(function(){
    $('.tab .menus li').mouseover(function(){
        $('.tab .menus li').removeClass('bg');
        $(this).addClass('bg');
        var index = $(this).index();
        var arr = [
                // 'assets/bg1.png',
                // 'assets/bg2.png',
                // 'assets/bg3.png',
                // 'assets/bg4.png',
                // 'assets/bg5.png',
                // 'assets/bg6.png',
                // 'assets/bg7.png',
            ] // 鑳屾櫙鍥剧墖  涓嶉渶瑕佹敞閲婂嵆鍙�
        $('.tab .scroll').css('margin-top',-index*450+'px');
        $('.tab').css('background-image','url('+arr[index]+')')// 鑳屾櫙鍥剧墖  涓嶉渶瑕佹敞閲婂嵆鍙�
    })
})

$(function() {
           
    function list_on() {
        var the_this = $(".mainbox_one .list").eq(0);
        the_this.addClass("list_one");
        the_this.find("img").eq(1).attr("src", "images/site1-1.png");
        the_this.find(".on").show();
        the_this.find(".no_on").hide();
        the_this.css("border-right", "1px solid #ff7200");
    }
    list_on();


    $(".mainbox_one .list").on({
        mouseenter: function () {
            $(this).addClass("list_one");
            $(this).siblings().removeClass("list_one");
            $(this).siblings().find(".no_on").show();
            $(this).siblings().find(".on").hide();
            $(this).siblings().css("border-right", "1px solid #ccc");
            switch ($(this).index()) {
                case 0:
                    $(this).find("img").eq(1).attr("src", "images/site1-1.png");
                    $(".mainbox_one .list").eq(1).find("img").eq(1).attr("src", "images/site2.png");
                    $(".mainbox_one .list").eq(2).find("img").eq(1).attr("src", "images/site3.png");
                    $(".mainbox_one .list").eq(3).find("img").eq(1).attr("src", "images/site4.png");
                    $(this).find(".on").show();
                    $(this).find(".no_on").hide();
                    $(this).css("border-right", "1px solid #ff7200");
                    break;
                case 1:
                    $(this).find("img").eq(1).attr("src", "images/site2-1.png");
                    $(".mainbox_one .list").eq(0).find("img").eq(1).attr("src", "images/site1.png");
                    $(".mainbox_one .list").eq(2).find("img").eq(1).attr("src", "images/site3.png");
                    $(".mainbox_one .list").eq(3).find("img").eq(1).attr("src", "images/site4.png");
                    $(this).find(".on").show();
                    $(this).find(".no_on").hide();
                    $(this).prev().css("border-right", "none");
                    $(this).css("border-right", "1px solid #ff7200");
                    break;
                case 2:
                    $(this).find("img").eq(1).attr("src", "images/site3-1.png");
                    $(".mainbox_one .list").eq(0).find("img").eq(1).attr("src", "images/site1.png");
                    $(".mainbox_one .list").eq(1).find("img").eq(1).attr("src", "images/site2.png");
                    $(".mainbox_one .list").eq(3).find("img").eq(1).attr("src", "images/site4.png");
                    $(this).find(".on").show();
                    $(this).find(".no_on").hide();
                    $(this).prev().css("border-right", "none");
                    $(this).css("border-right", "1px solid #ff7200");
                    break;
                case 3:
                    $(this).find("img").eq(1).attr("src", "images/site4-1.png");
                    $(".mainbox_one .list").eq(0).find("img").eq(1).attr("src", "images/site1.png");
                    $(".mainbox_one .list").eq(1).find("img").eq(1).attr("src", "images/site2.png");
                    $(".mainbox_one .list").eq(2).find("img").eq(1).attr("src", "images/site3.png");
                    $(this).find(".on").show();
                    $(this).find(".no_on").hide();
                    $(this).prev().css("border-right", "none");
                    $(this).css("border-right", "1px solid #ff7200");
                    break;
            }
        },
        mouseleave: function () {
            switch ($(this).index()) {
                case 0:
                    break;
                case 1:
                    $(this).prev().css("border-right", "none");
                    break;
                case 2:
                    $(this).prev().css("border-right", "none");
                    break;
                case 3:
                    $(this).prev().css("border-right", "none");
                    break;
            }
        }
    })
    
    
});