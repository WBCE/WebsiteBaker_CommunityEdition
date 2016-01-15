$(function(){
	$('.wbstats_bar, .wbstats_vbar, .wbstats_expand').poshytip({
		className: 'tip-twitter',
		showTimeout: 1,
		alignTo: 'cursor',
		offsetX: 15,
		alignX: 'left',
		alignY: 'center',
		followCursor: true,
		fade: true,
		slide: false
	});
	$('.wbstats_expandunder').poshytip({
		className: 'tip-twitter',
		alignTo: 'target',
		showTimeout: 1,
		offsetX: 15,
		alignX: 'center',
		alignY: 'bottom',
		fade: true,
		slide: false
	});
	$(".wbstats_bar").each(function() { $.data(this, "realHeight", $(this).height()); }).css({ height: "1px" }).each(function() { $(this).animate({ height: $(this).data("realHeight") }, 1000); });
}); 
function OnBeforeUnLoad () { if (document.getElementById('wbstats_loading') != null) { document.getElementById('wbstats_loading').style.display = 'block';} }
window.onbeforeunload = OnBeforeUnLoad;
function GetCurrentPage() { 
	if (!document.getElementsByTagName) return;
	var anchors = document.getElementsByTagName("a");
	var thisPage = location.href;
	for (var i=0; i<anchors.length; i++) {
		var anchor = anchors[i];
		thisHREF = anchor.getAttribute("href");
		if (thisHREF == thisPage || location.protocol + "//" + location.hostname + thisHREF == thisPage) {
			anchor.id = "current";
			return;
		}
	}
} 
window.onload = GetCurrentPage;