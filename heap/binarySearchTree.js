var BST = function(){
	this.root = null;
}
var Node = function(val){
	this.val = val; // the value attribute will be assigned based on user input when a node is instantiated
	this.left = null; // the left attribute will be assigned to a node later
	this.right = null; // the right attribute will be assigned to a node later
}
BST.prototype.isEmpty = function(){
	if(this.root==null){
		return true;
	}
	else {
		return false;
	}
}
var newBST = new BST;
// console.log(newBST.isEmpty());
// console.log(newBST);
BST.prototype.insert = function(val){
	if(this.isEmpty()){
		// console.log("it's empty");
		this.root = new Node(val);
	}
	else {
		var current = this.root;
		var inserted = false;
		while(inserted == false){
			if(val<current.val){
				// console.log("val is less than current");
				if(current.left != null){
					current = current.left;
				}
				else {
					current.left = new Node(val);
					inserted = true;
				}
			}
			else if(val>current.val){
				// console.log("val is greater than current");
				if(current.right != null){
					current = current.right;
				}
				else {
					current.right = new Node(val);
					inserted = true;
				}
			}
		}
	}
}
​
BST.prototype.insertRecursion = function(val){
	if(this.root == null){
		this.root = new Node(val);
	}
	else {
		this.root.add(val);
	}
}
​
​
Node.prototype.add = function(val){
	if(val<this.val){
		if(this.left == null){
			this.left = new Node(val);
		}
		else {
			this.left.add(val);
		}
	}
	else {
		if(this.right == null){
			this.right = new Node(val);
		}
		else {
			this.right.add(val);
		}
	}
}
​
BST.prototype.contains = function(val){
	if(this.isEmpty()){
		return false;
	}
	else {
		var current = this.root;
		while(current != null && current.val != val){
			if(val<current.val){
				current = current.left;
			}
			else{
				current = current.right;
			}
			
		}
		if(current != null){
			return true;
		}
		else {
			return false;
		}
	}
}
newBST.insert(15);
// console.log("just a root", newBST);
newBST.insert(21);
// console.log("15 and 21", newBST);
newBST.insert(10);
newBST.insert(9);
newBST.insert(7);
newBST.insert(4);
newBST.insert(17);
newBST.insert(27);
newBST.insert(41);
// console.log("4 to 41", newBST);
​
newBST.insertRecursion(33);
console.log("with insertRecursion", newBST.root.right.right.right.left);
// console.log("check for 22", newBST.contains(22));
// console.log("check for 17", newBST.contains(17));
// console.log("check for 10", newBST.contains(10));