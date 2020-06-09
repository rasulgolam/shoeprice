jQuery(document).ready(function(){
	//Right Click Protection
	//$(document).bind("contextmenu",function(e){ return false;});
	
	//Content Area Mods
	//Content Area Mods
	$(".pagecontainer > table:eq(1) tr:first td:first").addClass("org-background");
	$(".org-background table:eq(1)").addClass("org-content");
	$(".org-background table:eq(3)").addClass("content-middle");
	$(".v4stw").addClass("slider-content-middle");
	
	//Getting and Setting Store Categories
	if($("#org-categories").length > 0) {
		if($("#LeftPanel .lcat").length > 0) {
			$("#org-categories").html($("#LeftPanel .lcat").html());
		}
		$("#org-categories ul[class=lev1]").find("li:last").addClass("org-lastitem");
	}
	
	//Search Box
	var stxt = $("#org-search #org-input").find("input[class=v4sbox]").val();
	$("#org-search #org-input").find("input[class=v4sbox]").focus(function(){
		if($("#org-search #org-input").find("input[class=v4sbox]").val() == stxt) {
			$("#org-search #org-input").find("input[class=v4sbox]").val("");
		}
	});
	$("#org-search #org-input").find("input[class=v4sbox]").blur(function(){
		if($("#org-search #org-input").find("input[class=v4sbox]").val() == "") {
			$("#org-search #org-input").find("input[class=v4sbox]").val(stxt);
		}
	});
	$("#org-search #org-submit").find("input").click(function(){
		if($("#org-search #org-input").find("input[class=v4sbox]").val() == stxt) {
			$("#org-search #org-input").find("input[class=v4sbox]").val("");
		}
	});
    
	//Footer
	var d = new Date();
	var footer = "<div class=\"org-wrapcens\">\r\n<div id=\"org-footer\">\r\n<div class=\"ftr-top\">\r\n<div class=\"container\">\r\n<div class=\"row\">\r\n<div class=\"col-lg-4\">\r\n<div class=\"ftr-widget\">\r\n<!-- Hdr Logo -->\r\n<div class=\"ftr-logo\">\r\n<a href=\"http:\/\/www.ebaystores.co.uk\/Shoe-Price-UK\">\r\n<img src=\"https:\/\/rasulgolam.github.io\/shoeprice\/images\/logo.png\" alt=\"Logo\">\r\n<\/a>\r\n<\/div><!-- \/\/ End Hdr Logo -->\r\n<\/div>\r\n<\/div>\r\n<div class=\"col-lg-3 offset-lg-1\">\r\n<div class=\"ftr-widget\">\r\n<h4 class=\"ftr-widget-title\">Quick Links<\/h4>\r\n<ul class=\"ql-widget\">\r\n<li><a href=\"http:\/\/www.ebaystores.co.uk\/Shoe-Price-UK\">Home<\/a><\/li>\r\n<li><a href=\"http:\/\/www.ebaystores.co.uk\/Shoe-Price-UK\/Shoes-\/_i.html?_fsub=12428904017&amp;_sid=1170046747&amp;_trksid=p4634.c0.m322\">Shoes<\/a><\/li>\r\n<li><a href=\"http:\/\/www.ebaystores.co.uk\/Shoe-Price-UK\/Jeans-\/_i.html?_fsub=17736650017&amp;_sid=1170046747&amp;_trksid=p4634.c0.m322\">Jeans<\/a><\/li>\r\n<li><a href=\"http:\/\/www.ebaystores.co.uk\/Shoe-Price-UK\/Jackets-\/_i.html?_fsub=19051636017&amp;_sid=1170046747&amp;_trksid=p4634.c0.m322\">Jackets<\/a><\/li>\r\n<li><a href=\"http:\/\/www.ebaystores.co.uk\/Shoe-Price-UK\/Boots-\/_i.html?_fsub=12428930017&amp;_sid=1170046747&amp;_trksid=p4634.c0.m322\">Boots<\/a><\/li>\r\n<li><a href=\"http:\/\/www.ebaystores.co.uk\/Shoe-Price-UK\/Trainers-\/_i.html?_fsub=12433260017&amp;_sid=1170046747&amp;_trksid=p4634.c0.m322\">TRAINERS<\/a><\/li>\r\n<li><a href=\"#\">ABOUT US<\/a><\/li>\r\n<\/ul>\r\n<\/div>\r\n<\/div>\r\n<div class=\"col-lg-4\">\r\n<div class=\"ftr-widget\">\r\n<h4 class=\"ftr-widget-title\">Newsletter<\/h4>\r\n<div class=\"newsletter-widget\">\r\n<p>Add my Store to your Favorites and receive my email newsletters about new items and special promotions!<\/p>\r\n<a target=\"_blank\" href=\"http:\/\/my.ebay.co.uk\/ws\/eBayISAPI.dll?AcceptSavedSeller&sellerid=shoepriceuk&ssPageName=STRK:MEFS:ADDSTR&rt=nc\">subscribe<\/a>\r\n<\/div>\r\n<\/div>\r\n<\/div>\r\n<\/div>\r\n<\/div>\r\n<\/div>\r\n<div class=\"ftr-btm\">\r\n<div class=\"container\">\r\n<div class=\"row\">\r\n<div class=\"col-lg-12\">\r\n<div class=\"copyright-txt\">\r\n\u00a9 2020 <a href=\"http:\/\/www.ebaystores.co.uk\/Shoe-Price-UK\">SHOEPRICE<\/a>. All Rights Reserved.\r\n<\/div>\r\n<\/div>\r\n<\/div>\r\n<\/div>\r\n<\/div>\r\n<\/div>\r\n<\/div>";
	
    if(pageName != "PageAboutMeViewStore") {
		if($(".org-content").length > 0) {
			$(".org-content").after(footer);			
		}
	}
});