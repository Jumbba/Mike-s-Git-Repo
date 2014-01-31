sap.designstudio.sdk.Component.subclass("com.ipaper.sample.charts.StackedBar", function() {

	var that = this;
	var _title = "Example Chart";
	var _chart = null;
	
	this.animated = function(value){
		/*if(value!=undefined){
			var c = this.$().dxChart("instance");
			c.option({
				animation : {enabled : value}
			});
		}
		*/
		return this;
	};
	
	this.legendVisible = function(value){
		/*if(value!=undefined){
			var c = this.$().dxChart("instance");
			c.option({
				legend : {visible : value}
			});
		}*/
		return this;
	};
	
	this.rotated = function(value){
		/*if(value!=undefined){
			var c = this.$().dxChart("instance");
			c.option({
				rotated : value
			});
		}*/
		return this;
	};
	
	this.title = function(value) {
		/*if(value!=undefined) {
			_title = value;
			var c = this.$().dxChart("instance");
			c.beginUpdate();
			c.option({title : _title});
			c.render({
				animate : false
			});
			c.endUpdate();
		}*/
		return this;
	};
	
    this.afterUpdate = function() {
    	// alert("after update");
    };
	this.init = function() {
		this.$().html("<textarea style='width:100%;height:100%'>"+JSON.stringify(sap.ui.commons)+"</textarea>");
		/*var oRating = new sap.ui.commons.RatingIndicator("myRating", {
	        maxValue: 6,
	        visualMode: sap.ui.commons.RatingIndicatorVisualMode.Continuous
		});*/
		//oRating.placeAt(this.$());
		/*
		var dataSource = [
		                  { state: "Germany", young: 6.7, middle: 28.6, older: 5.1 },
		                  { state: "Japan", young: 9.6, middle: 43.4, older: 9},
		                  { state: "Russia", young: 13.5, middle: 49, older: 5.8 },
		                  { state: "USA", young: 30, middle: 90.3, older: 14.5 }
		                  ];
		this.$().dxChart({
			    dataSource: dataSource,
			    commonSeriesSettings: {
			        argumentField: "state",
			        type: "stackedBar"
			    },
			    series: [
			        { valueField: "young", name: "0-14" },
			        { valueField: "middle", name: "15-64" },
			        { valueField: "older", name: "65 and older" }
			    ],
			    legend: {
			        verticalAlignment: "bottom",
			        horizontalAlignment: "center"
			    },
			    valueAxis: {
			        title: {
			            text: "millions"
			        },
			        position: "right"
			    },
			    title: _title,
			    tooltip: {
			        enabled: true,
			        customizeText: function () {
			            return this.seriesName + " years: " + this.valueText;
			        }
			    }
			});
		*/
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