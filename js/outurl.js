function outlink(_domainName, _webUrl,_webUrlInner, _title) {
    $(".alert").remove();
    $("body").append("<div class='alert'><div" +
        " class=\"alert-warning\"><div class=\"alert-title\">" + _title + "</div><div" +
        " class=\"alert-wzsm\"><p>您访问的链接即将离开<br><span class='fB'>“" + _domainName + "”</span>网站</p><p" +
        " class='color'>是否继续？</p><p" +
        " id=\"outUrl\"" +
        " style=\"display:" +
        " none\"></p></div><div class='alert-footer'><div class='confirm'><span class='visits'" +
        " onclick=\"window.open(outUrl.innerText);\">继续访问</span><span class=\"cancel\">放弃</span></div></div></div><div class=\"alert-mengban\"></div></div>");
    $("a").each(function () {
        $(this).click(function () {
            if (this.href != "" && this.href.toLowerCase().indexOf("javascript") == -1 && this.href.toLowerCase().indexOf(_webUrl) == -1 && this.href.toLowerCase().indexOf("javascript:preVious") == -1 && this.href.toLowerCase().indexOf("javascript:next") == -1 && this.href != _webUrlInner) {
                document.getElementById('outUrl').innerText = this.href;
                $(".alert-mengban").fadeIn(200);
                $(".alert-warning").delay(200).show().animate({top: "75px"}, 300);
                $(".visits,.cancel").click(function () {
                    $(".alert-warning").animate({top: "-400px"}, 200).hide(300);
                    $(".alert-mengban").delay(300).fadeOut(300);
                });
                $(".visits,.cancel").click(function () {
                    $(".alert-warning").hide(200);
                    $(".alert-mengban").delay(200).fadeOut(200);
                });
                return false;
            }
        });
    });
    $(".m-link select").change(function () {
        var opVal = $(this).find("option:selected").val();
        if (this.value != '') {
            this.options[0].selected = true;
        }
        document.getElementById('outUrl').innerText = opVal;
        $(".selectpicker.form-control option:first").prop("selected", 'selected');
        $(".alert-mengban").fadeIn(200);
        $(".alert-warning").delay(200).show().animate({top: "75px"}, 300);
        $(".visits,.cancel").click(function () {
            $(".alert-warning").animate({top: "-400px"}, 200).hide(300);
            $(".alert-mengban").delay(300).fadeOut(300);
        });

        $(".visits,.cancel").click(function () {
            $(".alert-warning").hide(200);
            $(".alert-mengban").delay(200).fadeOut(200);
        })
    });
}

jQuery(function ($) {
    outlink("测试站点", "www.yourdomain1.com",'www.yourdomain2.com','温馨提示');
    $('.m-link option').on('change',function(){
        if($('.m-link option:selected').val() != ''){
            window.open($('.m-link option:selected').val());
        }
    })
});
