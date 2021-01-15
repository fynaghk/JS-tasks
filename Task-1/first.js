var sentence = "EcmaCode üzvlərini salamlayırıq.";
var arr = sentence.split(" ");
element=[];

for (var elem of arr){
  for (var i =0; i<=arr.length-1; i++){
    if(element.length<=arr[i].length){
      element=arr[i];
    }
    else{
      console.log(element)
    }
}
}