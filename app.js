
	var app = angular.module('onlineStore',[]);

app.controller('StoreController', function(){
	this.cart = {};
	this.total;
	this.products = productList;
	/*add Item to a Set of products
	total should be calculated from item and its quantitity present in set
	*/
	
	this.addItem = function(item){
		item.qty++;
		this.cart[item.name] = item;
		this.calculateTotal();
	}
	this.calculateTotal = function(){
		this.total = 0;
		for(var name in this.cart){
			var obj = this.cart[name];
			console.log(obj.name);
			this.total += obj.price* obj.qty;
		}
	}
	

});
app.service('productService', ['', function(){
	
}])

productList = [{
	name: "Basket Ball from Brand A",
	description: "Basket Ball from Brand A, heavy duty basket ball.",
	price: 30,
	qty: 0,
	image:"images/basketball.png"
},
{
	name: "Hand Gloves",
	description: " Hand Gloves from Barand B , keeps you warm and comfortable",
	price: 5,
	qty: 0,
	image:"images/gloves.png"
},
{
	name: "Sports shoes",
	description: "Heavy duty Sports shoes for sale.",
	price: 50,
	qty: 0,
	image:"images/shoes.png"
},
{
	name: "Table tennis Kit",
	description: "Table Tennis Kit from band D ",
	price: 25,
	qty: 0,
	image:"images/ttkit.png"
},
];
