/**Created by 18730 on 2016/12/30.*/
$(function () {
    var ch = $(window).height();
    $('.container').css('height', ch - 60);


    var act = $('.show').children('.active');

    function active(obj) {
        if (obj.next().is('.hide')) {
            obj.next().css({
                'padding': 0,
                'display': 'block',
                'height': obj.next().find('li').length * 50
            });
        }
    }

    active(act);
    //侧边栏点击展开
    var showLi = $('.side-bar .show').children('li');
    showLi.click(function () {
        if ($(this).next().css('display') == 'none') {
            showLi.removeClass('active');
            showLi.next('.hide').css('display', 'none');
            $(this).addClass('active');
            active($(this))
        }
    });
    //侧边栏内部隐藏部分点击
    $('.hide li').click(function () {
        $('.hide li').removeClass('active');
        $(this).addClass('active');
    });

    //更多操作执行

    $('.main .more').click(function(e){
        e.stopPropagation();
        if($(this).next('.more-hide').css('display')=='none'){
            $(this).next('.more-hide').slideDown(100);
            $(this).next('.more-hide').find('li').click(function(){
                var text='<a href="#">'+$(this).text()+'<i class="iconfont">&#xe609</i></a>';
                $('.main .more').html(text);
                $('.main .more').next('.more-hide').slideUp(50);

            });
        }else {
            $('.main .more').next('.more-hide').slideUp(50);
        }
        $(document).click(function(){
            $('.main .more').next('.more-hide').slideUp(50);
        })
    });


});