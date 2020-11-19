// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
console.log(Array.isArray(a)); //false
console.log(Array.isArray(b));  //true


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
console.log(a.map(x => x * 2));



// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
console.log(colors.join(' '));
// case 2 output: 'Red+Green+White+Black'
console.log(colors.join('+'));
// case 3 output: 'Red,Green,White,Black'
console.log(colors.join(','));



// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
console.log(a.sort((a, b) => b - a));



// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var highestItem;
var count = 0;
var highestCount = 0;

for (var i=0; i<a.length; i++){
     for (var j=i; j<a.length; j++){
         if(a[i]==a[j]){
             count++;
         }
     }
     if(count>highestCount){
         highestCount=count;
         highestItem=a[i];
     }
     count=0;
}
console.log(highestItem);
