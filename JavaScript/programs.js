const arr=[10,20,30,40,50];
const arr1=new Array(1,2,3,4,5)
const myStr="hello";
const newarr=Array.from(myStr);
const myarr=[1,"two",true,["five","four"],{six:6}]
console.log(myarr)
console.log(newarr[1])
console.log(arr.at(1))
console.log(arr1)

// for loops(means iteration)
// const arr=[10,20,90,70,11,12,30,40,50];
arr.push(60)
arr.push(70,80)
console.log(arr)
arr.pop();
console.log(arr)
arr.sort()
console.log(arr)
const state=["mumbai","delhi","kolkata","hyderabad"];
const slicestate=state.slice(-4)
console.log(slicestate)
for(const element of arr){
  console.log(element)
}
for(const element in arr){
  console.log(arr[element])
}

///const arr1=[1,2,3]
const arr2=[4,5,6]
const arr3=[...arr1,...arr2]
console.log(arr3)
const newArray=[...arr1]

//let arr=[1,2,3,4,5]
for(let i=0;i<arr.length;i++){
arr[i]=arr[i]*4
}
console.log(arr)

let modifiedarr=arr.map(function(element){
  return element*4
})
console.log(modifiedarr)

let modifiedarr1=arr.map((element)=>{
  return element*4
})
console.log(modifiedarr1)

const numbers=[1,2,3,4,5]
const product=numbers.reduce(function(accumulator,currentValue){
  return accumulator*currentValue;
},2)
console.log(product)

const words=["apple","banana","grape","orange","kiwi"]
for(let i=0;i<words.length;i++){
  if(words[i].length>5){
    console.log(words[i])
  }
}

const filteredWords=words.filter(function(word){
    return word.length>5;
})
console.log(filteredWords)


const person = {
 name: 'Peter',
 age: 30,
 greet: function() {
 console.log('Hello, my name is ' + this.name + ' and I am ' +
 this.age + ' years old.');
 }
 };
 person.greet();

 function greet(name){
    console.log(`hello ${name}!`);
}
const timeoutId=setTimeout(greet,10000,"Narendar")
clearTimeout(timeoutId)