Ext.Loader.setConfig({
        enabled: true
    });
alert('sdf');
Ext.Msg.alert('adsf','sdf');
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
    },
    
});

