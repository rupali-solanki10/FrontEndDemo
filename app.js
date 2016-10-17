
	var app = angular.module('onlineStore',[]);

app.controller('StoreController', function(){
	this.total = 0;
	this.products = productList;
	this.addItem = function(item,qty=1){
		temp = this.total;
		this.total = item.price*qty +temp;
		
	}
	

});
app.service('productService', ['', function(){
	
}])

productList = [{
	name: "Basket Ball from Brand A",
	description: "Basket Ball from Brand A, heavy duty basket ball.",
	price: 30,
	image:"images/basketball.png"
},
{
	name: "Hand Gloves",
	description: " Hand Gloves from Barand B , keeps you warm and comfortable",
	price: 5,
	image:"images/gloves.png"
},
{
	name: "Sports shoes",
	description: "Heavy duty Sports shoes for sale.",
	price: 50,
	image:"images/shoes.png"
},
{
	name: "Table tennis Kit",
	description: "Table Tennis Kit from band D ",
	price: 25,
	image:"images/ttkit.png"
},
];
