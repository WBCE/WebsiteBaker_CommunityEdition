/*** overall needed confirmation **************************************/
function confirm_link(message, url) {
	if (confirm(message)) {
		location.href = url;
	}
}

/*** get the url variables and return them as an associative array ****/
function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

$(document).ready(function () {

    // menulink --> check if link is active link and add active class to parent <li>
    var pageurl = window.location.pathname,
    urlRegExp = new RegExp(pageurl.replace(/\/$/,'') + "$");
    $('#board a').each(function () {
        if (urlRegExp.test(this.href.replace(/\/$/,''))) {
            $(this).parent().addClass('current');
        }
    });

    // special for hard coded page pages --> add class 'page_titel' to first head of page
	var page_url = document.URL;
	var page_url_searchstring = ADMIN_URL + '/pages/index';
	if (page_url.indexOf(page_url_searchstring) != -1) {
	  $('h2').first().addClass('id_pages_addpages page_titel');
	} // ENDE special add class page_titel to page pages

	// special for themeboxes --> remove commas after links to format links as buttons
	$('.themebox .tb_content').each(function () {
		var tb_replacestring = $(this).html();
		tb_replacestring = tb_replacestring.replace(/<\/a>\, /g, '</a>');
		$(this).html(tb_replacestring);
	}); // ENDE special remove commas from themeboxes

	/*** enable tabs in textareas (class "tabbed") ********************/
	$(document).delegate('.tabbed', 'keydown', function (e) {
		var keyCode = e.keyCode || e.which;

		if (keyCode == 9) {
			e.preventDefault();
			var start = $(this).get(0).selectionStart;
			var end = $(this).get(0).selectionEnd;

			// set textarea value to: text before caret + tab + text after caret
			$(this).val($(this).val().substring(0, start)
						+ "\t"
						+ $(this).val().substring(end));

			// put caret at right position again
			$(this).get(0).selectionStart =
			$(this).get(0).selectionEnd = start + 1;
		}
	});

	/*** toggle the advanced links in addons **************************/
	$('#show-advanced a').click(function (e) {
		e.preventDefault();
		$('#advanced-block').toggle();
	});

}); // ENDE document.ready