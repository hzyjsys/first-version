/*
* @Author: JMW
* @Date:   2017-03-27 16:43:07
* @Last Modified by:   hzyjsys
* @Last Modified time: 2017-04-07 11:34:45
*/
'use strict';
jQuery(document).ready(function($) {
	//鼠标移入显示菜单栏,移出隐藏菜单栏
    $(".bar-text").hover(function (){
        $(this).find(".bar-text0").addClass("on");
        $(this).find("div").show();
    },function (){
        $(this).find(".bar-text0").removeClass("on");
        $(this).find("div").hide();
    });
    $(".zhgx-con a").hover(function(){
        $(this).css("color","#fff");
        $(".zhgx-wx").show();
    },function(){
        $(this).css("color","#696052");
        $(".zhgx-wx").hide();
    });
});