var sentence = "Javascript dili çox populyar dildir";
var arr= sentence.split(" ");
var string = ""

for (word of arr){
  string += (word[0].toUpperCase() + word.slice(1))+" ";
}

console.log(string)