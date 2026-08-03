
// array: 
var arr = [1,2, true , "anmol", function(){}];

// foreach:
let y= arr.forEach((element , index, arr) => {   //element at each index , index , actual array;
    console.log(index + " " + element);
});

//map:
let x = arr.map((element , index, arr) => {
    return 2*index;
});

console.log(x);


//filter:
let f = arr.filter((element,index) => {
    return index < 4;
});
console.log(f);


// filter with array of objects:
let students = [
    { name: "Anmol", marks: 95 },
    { name: "Rahul", marks: 60 },
    { name: "Riya", marks: 82 }
];

let paas = students.filter((element)=>{
    if(element.marks >= 75) return true;
});

console.log(paas);


// find() is used to find the first element in an array that satisfies a condition.
let arr1 = [1, 3, 5, 8, 10];

let ans = arr1.find((element) => {
    return element % 2 === 0;
});
console.log(ans);
// for index, use - findIndex


// indexOf() is used to find the index of a specific value in an array or string.
let arr2 = [10, 20, 30, 30];
console.log(arr2.indexOf(30));

//---------------------------------------------------------------------------------------


//functions:
function fun(a, b){
    return a+b;
}

let ret = fun(3,2);
console.log(ret);

// ---------------------------------------------------------------------

// async function:
//place "await", jaha pr promise mile ki data milega after some time.
async function getData() {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
}

