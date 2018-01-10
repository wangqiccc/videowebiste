//顶部导航
{
    let flag = true;
    $("#course").click(function () {
        if (flag) {
            $(".header-sec").show();
            $("#course").css("background", "#ff5988");
            $(".header-sec-list").each(function (index) {
                $(this).css({
                    opacity: 0,
                    transform: "rotate(90deg)",
                    animation: "showlist .3s ease-in " + index * 0.2 + "s forwards"
                })
            })
        } else {
            $(".header-sec-list").each(function (index) {
                $(this).css({
                    opacity: 1,
                    transform: "rotate(0)",
                    animation: "hidelist .3s ease-in " + (1 - index * 0.2) + "s forwards"
                })
            });
            setTimeout(function () {
                $(".header-sec").hide();
                $("#course").css("background", "");
            }, 1000)
        }
        flag = !flag;
    })
}
//banner点击
{
    $(".banner-next").click(function () {
        $(".banner-box").css("rotateY", "-=60");
    });
    $(".banner-prev").click(function () {
        $(".banner-box").css("rotateY", "+=60");
    });
    let st = setInterval(function () {
        $(".banner-box").css("rotateY", "-=60");
    }, 3000);
    $(".banner-inner").hover(function () {
        clearInterval(st);
    }, function () {
        clearInterval(st);
        st = setInterval(function () {
            $(".banner-box").css("rotateY", "-=60");
        }, 3000);
    });
    $(window).focus(function () {
        clearInterval(st);
        st = setInterval(function () {
            $(".banner-box").css("rotateY", "-=60");
        }, 3000);
    });
    $(window).blur(function () {
        clearInterval(st);
    })
}
//视频列表效果
{
    let n = 0;
    let ox, oy;
    $(".video-thumb").data("hover", false).data("dir", "");
    $(".video-thumb").mousemove(function (e) {
        let index = $(this).index(".video-thumb");
        let [cx, cy] = [e.offsetX, e.offsetY];
        let dir = Math.abs(cx - ox) > Math.abs(cy - oy) ? "hon" : "ver";
        if (dir === "hon") {
            if (cx > ox) {
                $(this).data("dir", "right")
            } else {
                $(this).data("dir", "left")
            }
        } else {
            if (cy > oy) {
                $(this).data("dir", "bottom")
            } else {
                $(this).data("dir", "top")
            }
        }

        if (!$(this).data("hover")) {
            if (n === 3) {
                n = 0;
                $(this).data("hover", true);
                $(".video-mask").eq(index).attr("class", "video-mask");
                if (dir === "hon") {
                    if (cx > ox) {
                        $(".video-mask").eq(index).addClass("leftIn");
                    } else {
                        $(".video-mask").eq(index).addClass("rightIn");
                    }
                } else {
                    if (cy > oy) {
                        $(".video-mask").eq(index).addClass("topIn");
                    } else {
                        $(".video-mask").eq(index).addClass("bottomIn");
                    }
                }
            }
            n++;
        }
        ox = cx;
        oy = cy;
    });
    $(".video-thumb").mouseleave(function () {
        $(this).data("hover", false);
        let index = $(this).index(".video-thumb");
        switch ($(this).data("dir")) {
            case "left":
                $(".video-mask").eq(index).addClass("leftOut");
                break;
            case "right":
                $(".video-mask").eq(index).addClass("rightOut");
                break;
            case "top":
                $(".video-mask").eq(index).addClass("topOut");
                break;
            case "bottom":
                $(".video-mask").eq(index).addClass("bottomOut");
                break;
        }
    });
    $(".video-mask").on("animationend", function () {
        if (!$(this).parent().parent().data("hover")) {
            $(this).attr("class", "video-mask");
        }
    })
}
//新闻列表展示
{
    let max = $(".news-title").offset().top;
    let flag = true;
    $(window).scroll(function () {
        if ($(this).scrollTop() > max) {
            if (flag) {
                flag = false;
                $(".news-clip").animate({top: -15});
                $(".news-list").each(function (index) {
                    $(this).delay((index + 1) * 300).animate({top: 0});
                })
            }
        }
        if ($(this).scrollTop() < max - $(window).height()) {
            flag = true;
            $(".news-clip").css({top: 1000});
            $(".news-list").css({top: 1000});
        }
    })
}
//返回顶部
{
    $(".totop").click(function () {
        $("html,body").animate({scrollTop: 0},300);
    })
}