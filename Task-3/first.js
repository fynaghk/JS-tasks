var arr = [5, 1, 8, 21, 4];
var newArr=[];
var max=0;

for (var i = 0; i < arr.length; i++) {
  for (var j = i+1; j < arr.length; j++) {
     if(arr[i] > arr[j]) {
         max = arr[i];
         arr[i] = arr[j];
         arr[j] = max;
     }
  }
}


for (var i = 0; i < arr.length; i++) {
  console.log(arr[i] + " ");
}