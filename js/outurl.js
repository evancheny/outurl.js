var _styles="<style>" +
    ".alert-mengban{position: fixed; top: 0; left: 0; z-index: 1000; display: none; width: 100%; height: 100%; background: #000; filter: alpha(opacity=80) !important; opacity: 0.5 !important;}" +
    ".alert-warning{position: fixed; top: -400px; left: 50%; z-index: 1001; display: none; width: 450px; height: 230px; margin-left: -225px; background: #fff;}" +
    ".alert-title{position: relative; width: 100%; height: 44px; font-size: 20px; line-height: 44px; color: #fff; text-align: center; background: #94070a;}" +
    ".alert-wzsm{margin: 15px auto 0; font-size: 18px; line-height: 30px; color: #2b2b2b; text-align: center;}" +
    ".alert-wzsm p{font-size: 16px; margin: 0 15px;}" +
    ".alert-wzsm p.color{color: #df0000; font-size: 20px; font-weight: bold; line-height: 48px;}" +
    ".alert-footer{font-size: 18px; color: #000; text-align: center; margin-top: 16px;}" +
    ".alert-footer span{float: left; cursor: pointer;}" +
    ".alert-footer .confirm{margin: 0 auto; height: auto; overflow: hidden; text-align: center; display: block; width: 220px;}" +
    ".alert-footer .confirm .visits," +
    ".cancel{width: 100px; height: 32px; font-size: 16px; line-height: 32px; color: #fff; background: #94070a; border-radius: 16px;}" +
    ".alert-footer .confirm .cancel{background: #ccc; margin-left: 15px;}" +
    " </style>";
function outlink(_domainName, _webUrl,_webUrlInner, _title) {
    $(".alert").remove();
    $("body").append(_styles)
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
