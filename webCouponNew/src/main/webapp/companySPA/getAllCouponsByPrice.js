var module = angular.module("companySPA");
module.controller("getAllCouponsByPriceCtrl", getAllCouponsByPriceCtrlCtor);

function getAllCouponsByPriceCtrlCtor($http, companyHttpService){
	
	var self = this;
	
	self.price = "";
	
	self.getCouponsByPrice = function(){
		
		companyHttpService.getAllCouponsByPrice($http, self.price).then(function(response)
        		{
			
        	self.arr = response.data;
        	
        		}, 
        		function(response)
        		{
        			self.resault = response.data;
        			
        		});
		
	};
	
	self.reverseSort = false;
	self.sortColumn = "Title";
	
	self.sortData = function(column){
		if (self.sortColumn == column){
			self.reverseSort = !self.reverseSort;
		}
		else {
			self.reverseSort = false;
		}
		
		self.sortColumn = column;
	};
	
	self.getSortClass = function(column){
		if (self.sortColumn == column){
			return self.reverseSort ? 'arrow-down' : 'arrow-up'
		}
		
		return '';
	};

	
}