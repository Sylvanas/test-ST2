/*Ext.require([    
    'Ext.XTemplate',
    'Ext.Panel',
	'Ext.Button',
    'Ext.List',
    'Ext.application'
]);*/

Ext.application({
	name: 'App',  
	views : [ 'main.SplashView'],
	//controllers: [ 'main.SplashController', 'main.PaymentController', 'main.PaymentTypeController', 'main.CardSIController', 'card.CCDetailsController', 'card.PinAuthController', 'receipt.ReceiptEmailController'],
	//models: [ 'card.CCDetailsModel' ],
	//stores : [ 'card.CCDetailsStore' ],
	initialize: function () {
		this.callParent(arguments);
	},	
	launch: function() {
		App.viewport = Ext.create('Ext.Panel', {
			id: 'appContainer',
		    fullscreen: true,
		    layout: { type: 'card', align: 'stretch' },
		    alias: 'widget.Viewport',
		    cls:'transparent_bg',
			items: [{ xtype: 'main-SplashView' }
			]
		});
		
		App.viewport.setActiveItem(0);
		this.startApp();
    },

    startApp: function() {
    	//App.Global = Ext.create('Global');
    },
});


