
(function(w, d) {
	'use strict';
	function query(selector) {
		var result = [];
		if(d.querySelectorAll) {
			var res = d.querySelectorAll(selector),
				i = 0,
				len = res.length;
			for(; i < len; i++) {
				result.push(res.item(i));
			}

		} else {

			var sheet = d.styleSheets.length > 0 ? d.styleSheets[0] : d.createStyleSheet(),
				elements = d.all,
				len = elements.length;
				result = [],
				i = 0,

			sheet.addRule(selector, 'summer:yu');

			for(; i < len; i++) {
				if(elements[i].currentStyle.summer) result.push(elements[i]);
			}

			sheet.removeRule(0);
		}
		return result;

	}
	
	window.$ = query;

})(window, document);

