//顶部导航
{
    let flag = true;
    $("#course").click(function () {
        if (flag) {
            $(".header-sec").show();
            $("#course").css("background","#ff5988");
            $(".header-sec-list").each(function(index){
                $(this).css({
                    opacity:0,
                    transform:"rotate(90deg)",
                    animation:"showlist .3s ease-in "+index*0.2+"s forwards"
                })
            })
        } else {
            $(".header-sec-list").each(function(index){
                $(this).css({
                    opacity:1,
                    transform:"rotate(0)",
                    animation:"hidelist .3s ease-in "+(1-index*0.2)+"s forwards"
                })
            });
            setTimeout(function(){
                $(".header-sec").hide();
                $("#course").css("background","");
            },1000)
        }
        flag = !flag;
    })
}