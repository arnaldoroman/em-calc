var val = 0, res = 0, type, field;

jQuery(document).ready(function() {
	jQuery('input[name=px]').focus();
	jQuery('input').keyup(function() {
		val = parseFloat(jQuery(this).val());
		field = jQuery(this).attr('name') == 'px' ? 'em' : 'px';
		
		if(/^([0-9.]+)$/.test(val) && val > 0) {
			if(jQuery(this).attr('name') == 'px') {
				console.log('d');
				res = Math.round(val * 0.0625 * 100) / 100;
				if(res < 1) { res = ('' + res).substr(1); }
			} else {
				res = Math.round(val / 0.0625);
			}
			
			jQuery('input[name='+field+']').val(res);
		}
	});
	jQuery('#copy').click(function() {
		widget.system('/bin/echo -n "'+jQuery('input[name=em]').val()+'em" | /usr/bin/pbcopy',function() {});
	});
});