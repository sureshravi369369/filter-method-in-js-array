// filtering method:

const queue_by_age=[10,18,25,35,40]

let adults=queue_by_age.filter((value)=>{
 return value>=18
})

console.log("result:", adults);

// filtering odd number and even number:

const number=[1,2,3,4,5,6,7]

let evenNumber=number.filter((value)=>{
    return  value %2 ==0
})

console.log("evenNumber:",evenNumber);


let oddNumber=number.filter((value)=>{
    return  value %2 ==1
})

console.log("oddNumber:",oddNumber);


// filtering object:

const cartItems=[
    {id:1, items:"android moblie", cost:10000},
    {id:2, items:"iphone", cost:30000},
    {id:3, items:"window phone", cost:11000}
]

let moblies=cartItems.filter((value)=>{
    return value.cost<15000
})

console.log(moblies);