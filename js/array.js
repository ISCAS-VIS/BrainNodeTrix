/**
 * extend several basic functions of Array
 */
Array.prototype.S=String.fromCharCode(2);
/**
 * judge the array have a certain element or not
 * @param e a certain element
 */
Array.prototype.in_array=function(e){
    var r=new RegExp(this.S+e+this.S);
    return (r.test(this.S+this.join(this.S)+this.S));
};
/**
 * judge the array have anyone of the two certain elements or not
 * @param e1
 * @param e2
 * @returns {boolean}
 */
Array.prototype.in_array=function(e1,e2){
    var r1=new RegExp(this.S+e1+this.S);
    var r2=new RegExp(this.S+e2+this.S);
    return (r1.test(this.S+this.join(this.S)+this.S)||r2.test(this.S+this.join(this.S)+this.S));
};
/**
 * return the index of a certain element in a array
 * @param val a certain element
 */
Array.prototype.indexOf = function(val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == val) return i;
    }
    return -1;
};
/**
 * remove a certain element in a array
 * @param val a certain element
 */
Array.prototype.remove = function(val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};
/**
 * sort the array and return the index order
 * @returns {Array}
 */
Array.prototype.sortIndex = function(){
    //storage the result of sort
    var order = new Array();
    var index = 0;
    for(var i = 0 ; i < this.length ; i++){
        var max = 0;
        for(var j = 0 ; j < this.length ; j++){
            if((max <= this[j])&&(!order.in_array(j))){
                max = this[j];
                index = j;
            }
        }
        order.push(index);
    }
    return order;
};

