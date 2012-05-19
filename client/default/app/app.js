
Ext.application({
	name: 'App',  

	initialize: function () {
		//Ext.Msg.alert('1','1');
		this.callParent();
	},	
	launch: function() {
		//Ext.Msg.alert('2','3');
		App.mainView = Ext.create('Ext.Panel', {
			//id: 'appContainer',
			//html: 'asdfasdf',
			fullscreen: true,
			layout: 'hbox',
            items: [{xtype: 'button' , text: 'asdfasfd'}]
		});
		/*Ext.getStore('LocalStore').load({
            callback: this.onSearchesStoreLoad,
            scope: this
        });*/
		this.startApp();
    },
    
    startApp: function() {
    },
    
    goToFirstView: function() {},
});

