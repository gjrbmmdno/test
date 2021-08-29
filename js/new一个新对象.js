var func=new Func ();

var obj = new Object();
obj.__proto__ = Func.prototype;
var result = Func.call(obj)