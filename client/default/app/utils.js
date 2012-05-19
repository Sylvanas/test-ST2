Ext.define('Global', {
	changeView: function(direction, currentItemId, targetItemId) {
		views = [
	 	    'splashView',
	 	    'homeView',
	 	    'setupMainView',
	 	    'setupTerminalAdminView',
	 	    'setupBankingPayOutAdminView',
	 	    'setupBankView','setupPayPalView','setupGoogleWalletView','setupMoneyBookersView', 'payMainView',
	 	    'ProcessingStatusView'
	 	];
	 	var source = views.indexOf(currentItemId);
    	var nextIndex;
    	if(targetItemId == null){
	    	if(direction == 'left')
	    		nextIndex = source + 1;
	    	else
	    		nextIndex = source - 1;
    	}
    	else{
    		nextIndex = views.indexOf(targetItemId);
    	}
    	
    	App.viewport.animateActiveItem(nextIndex, { type: 'slide', direction: direction, duration:250 });
	}
});