function House(){ //constructor function
	this.floors = null;
	this.furnitures = [];
	this.isExist = true;
}
House.prototype.destroy = function(){
	this.isExist = false;
}
module.exports = House;
