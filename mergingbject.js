console.log('Merging Object');

const obj1={
   name:"piyush",
   age:"34"
}

const obj2 = {
   name: "dohare",
   age: "42",
   role : " developer"
}
 
 const obj3={
   ...obj1, ...obj2
 }
 console.log(obj3);
 



 console.log('By Assign operator');
 
 const obj4={
   name:"Lucky",
   age:"45"
 }
  

const obj5 = {
   location: "noida",
   country: "India"
}

Object.assign(obj4,obj5)
console.log(obj4);
console.log(obj5);
