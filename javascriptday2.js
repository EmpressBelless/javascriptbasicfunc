function firstNonConsecutive(arr){
  10	    var empty = arr[0]
  11	    for (var i =0; i < arr.length; i++) {
  12	      if ((empty + 1) !== arr[i])  {
  13	        return arr[i] 
  14	       } else return -1;
  16	      }
  17	    }
  18	}
  19	      
  20	//Call function here with arguments
  21	firstNonConsecutive([1, 2, 3, 5, 6, 7])


#2
// Write arrow function here
function addall(arr) {
  var sum = 0;
  for (var i=0; i < arr[i].length; i++) {
    while (i > 0) {
     sum += arr[i]
    }
      return sum;
  } 
};
addall([10, 12, -9, 3, -1, 0, 15])
// Call function here with arguments