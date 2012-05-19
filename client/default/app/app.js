alert('alertFromapp');

/*Ext.Loader.setConfig({
        enabled: true
    });*/


Ext.application({
	
	name: 'App',  

	initialize: function () {
		alert('0');
		this.callParent();
	},	
	launch: function() {
		alert('1');
		App.viewport = Ext.create('Ext.Panel', {
			fullscreen: true,
			layout: 'hbox',
            items: [{xtype: 'button' , text: 'asdfasfd'}]
		});
		alert('2');
    },
    
});
alert('3');
