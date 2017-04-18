/*
* @Author: hzyjsys
* @Date:   2017-04-05 14:52:30
* @Last Modified by:   hzyjsys
* @Last Modified time: 2017-04-05 15:51:38
*/

'use strict';
$(document).ready(function(){
	$(".commttee li").find("img").hover(function(){
		$(this).css({"width":"150px","height":"150px"});
	},function(){
		$(this).css({"width":"165px","height":"165px"});
	})
});