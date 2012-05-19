Ext.define('App.view.main.SplashView', {
    extend: 'Ext.Panel',
    id:'splashView',
    alias: "widget.main-SplashView",

    config: {
    	scrollable: false,
    	layout: { type: 'card', align: 'stretch' },
    	items:[{
    		xtype:'panel',
    		id:'facePanel',
    		layout:'fit',
    		items : [{ html:'<img src="resources/images/mobihead.jpg" id="mobiFacePic"/>' }],
    		listeners: {
    			painted: function(){
    				Ext.get('mobiFacePic').dom.width=this.element.getWidth();
    				Ext.get('mobiFacePic').dom.height=this.element.getHeight();
   					this.show();
    			},
    			resize: function(){
    				Ext.get('mobiFacePic').dom.width=this.element.getWidth();
    				Ext.get('mobiFacePic').dom.height=this.element.getHeight();
    				this.show();
    			}
    		}
    	},{
    		xtype:'panel',
    		id:'payPanel',
    		layout:'vbox',
    		cls:'centeredBtn',
    		style:'background-color:Black !important;',
    		items : [{
    			xtype:'spacer'
    		}, { 
    			xtype:'button',
    			cls:'btnNoStyles swipeText',
    			text:'PAY',
    			id:'payButton'
    		}, {
    			xtype:'spacer'
    		}]
    	},{
    		xtype:'panel',
    		id:'refundPanel',
    		layout:'vbox',
    		cls:'centeredBtn',
    		style:'background-color:Black !important;',
    		items : [{
    			xtype:'spacer'
    		}, { 
    			xtype:'button',
    			cls:'btnNoStyles swipeText',
    			text:'REFUND',
    			id:'refundButton'
    		}, {
    			xtype:'spacer'
    		}]
    	},{
    		xtype:'panel',
    		id:'setupPanel',
    		layout:'vbox',
    		cls:'centeredBtn',
    		style:'background-color:Black !important;',
    		items : [{
    			xtype:'spacer'
    		}, { 
    			xtype:'button',
    			cls:'btnNoStyles swipeText',
    			text:'SETUP',
    			handler: function(){
    				console.log('button pressed!');
    			} 
    		}, {
    			xtype:'spacer'
    		}]
    	},{
			xtype : 'panel',
			docked : 'bottom',
			layout : 'hbox',
			align : 'stretch',
			cls:'bottom_menu',
			scrollable : false,
			style:'background-color:Black !important;',
			items : [{
				xtype : 'button',
				ui : 'decline',
				align : 'left',
				icon:'resources/images/cancel.png',
				margin : '10 0 10 20',
				id:'backToSplashBtn',
				hidden: true
				},{
					xtype:'spacer'
				}, {
					xtype : 'button',
					ui : 'decline',
					align : 'center',
					text:'Lock',
					height:'50px',
					width:'150px',
					margin : '10 0 10 0',
					id:'lockDeviceBtn',
					hidden:false
				},{
					xtype:'spacer'
				},{
				xtype : 'button',
				ui : 'confirm',
				align : 'right',
				icon:'resources/images/accept.png',
				margin : '10 20 10 0',
				hidden:true
				}]
    	},{
				xtype : 'panel',
				docked : 'bottom',
				layout :{ type:'fit', align:'center'} ,
				scrollable : false,
				id:'sliderBar',
				height:'30px',
				style:'background-color:Black !important;',
				items : [{ html:'<div style="text-align:center;"><img src="resources/images/arrow.png" style="width:90% !important; padding-top:10px;" /></div>' }]
		}]
	},

	initialize: function() {
		this.callParent(arguments);
				
		this.setActiveItem(0);

		var viewport = this;

    var swipeHandler = function(direction) {z}

    this.element.on('dragend', function(e, o) {
      //console.log('dragend');
      //console.log(e);

      if (e.deltaX > 100) {
        swipeHandler('right');
      }
      else if (e.deltaX < -100) {
        swipeHandler('left');
      }

      //console.log('startX: ' + e.startX);
      //console.log('pageX: ' + e.pageX);
      //console.log('deltaX: ' + e.deltaX);
    });

    this.element.on('dragstart', function(e, o) {
      //console.log('dragstart');
      //console.log(e);

      //console.log('startX: ' + e.startX);
      //console.log('pageX: ' + e.pageX);
      //console.log('deltaX: ' + e.deltaX);
    });

    this.element.on('swipe', function(e, o){
      //swipeHandler(e.direction);
    });
	}
});

