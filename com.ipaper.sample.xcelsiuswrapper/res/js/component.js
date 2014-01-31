// Global Xcelsius callback function
function setSWFIsReady(xlcID) {
	var ref = swfStatus.getInstanceById(xlcID);
	if(!ref) return;
	ref.loaded = true;
	// Issue callback notifying DS that Xcelsius SWF is loaded.
	ref.dsRef.swfLoaded();
}

// Singleton-type registry for Xcelsius callback tracking
var swfStatus = swfStatus || {
		instances : [],
		registerInstance : function(dsRef){
			for(var i=0;i<this.instances.length;i++){
				if(this.instances[i].dsRef==dsRef) return this.instances[i];
			}
			var newRef = {
				dsRef : dsRef,
				id : "xlcsWrapper" + this.instances.length
			};
			this.instances.push(newRef);
			return newRef;
		},
		getInstance : function(dsRef){
			for(var i=0;i<this.instances.length;i++){
				if(this.instances[i].dsRef==dsRef) return this.instances[i];
			}
			return null;
		},
		getInstanceById : function(id){
			for(var i=0;i<this.instances.length;i++){
				if(this.instances[i].id==id) return this.instances[i];
			}
			return null;
		},
		loaded:false,
		id:null,
		dsRef:null
};


sap.designstudio.sdk.Component.subclass("com.ipaper.sample.xcelsiuswrapper.XcelsiusWrapper", function() {

	var that = this;
	this.swfAPI = null;
	this._title = "";
	this._swf = "";
	this._chartVals = "";
	this._chartLabels = "";
	
	this.chartVals = function(value){
		if(value!=undefined) {
			this._chartVals = value;
			this.redraw();
		}
		return this;
	};
	
	this.chartLabels = function(value){
		if(value!=undefined) {
			this._chartLabels = value;
			this.redraw();
		}
		return this;
	};
	
	this.swf = function(value) {
		if(value!=undefined) {
			this._swf = value;
			this.redraw();
		}
		return this;
	};
	this.title = function(value) {
		if(value!=undefined) {
			this._title = value;
			this.redraw();
		}
		return this;
	};
	
    this.afterUpdate = function() {
    	// alert("after update");
    };
	this.redraw = function(){
		var regRef = swfStatus.registerInstance(this);
		regRef.loaded = false;
		this.swfAPI = this.$().flashembed({
			src : this._swf,
			id : regRef.id
		},{
			title : this._title,
			chartVals : this._chartVals,
			chartLabels : this._chartLabels
		});		
	};
    this.init = function() {
		this.$().css("padding","5px");
		this.redraw();
	};
	this.swfLoaded = function(){
		// Xcelsius Loaded Callback
		var swfID = swfStatus.getInstance(this).id;
		var movie = document.getElementById(swfID);
		// Insert Xcelsius External Interface API calls at this point, if I wanted.
	};
	this.color = function(value) {
		if (value === undefined) {
			return this.$().css("background-color");
		} else {
			this.$().css("background-color", value);
			return this;
		}
	};
});