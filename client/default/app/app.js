alert('alertFromapp');

/*Ext.Loader.setConfig({
        enabled: true
    });*/


Ext.application({
	name: 'App',  

	initialize: function () {
		this.callParent();
	},	
	launch: function() {
		App.viewport = Ext.create('Ext.Panel', {
			fullscreen: true,
			layout: 'hbox',
            items: [{xtype: 'button' , text: 'asdfasfd'}]
		});
		alert('sdf2');
    },
    
});

