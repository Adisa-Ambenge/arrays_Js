//QUESTION 1
const arr1 = [3,7,34,90,12];
const arr2 = [true,"green","where",12,56];

//last element of arr1
const lastElement1 = arr1[arr1.length - 1];
console.log(lastElement1);

//last element of arr2

const lastElement2 = arr2[arr2.length - 1];
console.log(lastElement2);

//QUESTION 2
let myPets = ["Cow","Bird","Snake","Dog"];
let str = myPets.join(" ,");
console.log(str);

//QUESTION 3
var arr3 = [-5,9,5,3,2,-3,6,8,4,1];
let sorted = arr3.sort((a,b)=> a -b);
console.log(sorted);

//QUESTION 4
var arr= ["apple","mango","apple","orange","mango","mango"];
var notRepeatedArr = [];
var repeatedArr = [];
for (var i = 0; i<arr.length;i++){
    if(notRepeatedArr.indexOf(arr[i]===-1)){
        notRepeatedArr.push(arr[i]); 
    } else{
        repeatedArr.push(arr[i]); 

    }  
}
console.log(notRepeatedArr);
console.log(repeatedArr);

//QUESTION 5
let arr5 = ["the","way","x",4];
let word = "we";
if (arr5.includes(word)){
    console.log(word);
}
else{
    console.log("the search word was not found");
}

//QUESTION 6

let x = "sevink";
let sortedword = x.split("").sort().join("");
console.log(sortedword);