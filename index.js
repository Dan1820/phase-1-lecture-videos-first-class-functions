
// console.log(books.length)


// const loopThroughArray=function (array){
//     for(let items of array){
//         console.log(items)
//     }
    
// }
// const  capitalizedArray= function(array){
//     let newArray=[]
//     for(let item of array){
//         newArray.push(item.toUpperCase())
//     }
//     console.log(newArray)
// }

// function handleBooks(fun){
//     let books=['js','python','java book','rubis','how to code']
//     console.log(fun(books))

// //     fun()
//     //capitalize array will be called
// }

// console.log(handleBooks(capitalizedArray))
// console.log(handleBooks(loopThroughArray))
// console.log(capitalizedArray())




// const loopThroughChildren=function (array){
//     for(items of array){
//         console.log(items)
//     }
// }
// const capitalizeArray =function(array){
//     let newArray=[]
//     for(let item of array){
//         newArray.push(item.toUpperCase())
//     }
//     console.log(newArray)
// } 


// function handleChildren(names){
//     const childrenName =['pkoech','pkemo','brian','pyegon','protio','cherry','korkoren']
//     console.log(names(childrenName))

// }
// console.log(handleChildren(loopThroughChildren))
// console.log(handleChildren(capitalizeArray))


// function greeting(name){
//     alert(`hello ${name}`);

// }
// function processInput(callback){
//     const name= prompt('please enter your name');
//     callback(name)
// }
// console.log(processInput(greeting));


let books=[
    {
        title:'intro to js',
        price: 26,
        inventory :0
    },
    {
        title:'intro to c#',
        price: 100,
        inventory :10
    },
    {
        title:'intro to php',
        price: 40,
        inventory :2
    },
    {
        title:'intro to java',
        price: 50,
        inventory :30
    }
]
function printReport(foo){
    console.log(foo(books))

}
function totalCost(array){
    let total=0
    for(item of array){
        total+=item.price
    }
    return `The total cost is ${total} usd`
}
function totalInventories(array){
    let sum=0
    for(item of array){
        sum+=item.inventory
    }
    return `the total inventory available is ${sum} books`
}
function restock(array){
    let restockList=[]
    for(item of array){
        if (item.inventory<3){
            restockList.push(item.title)
        }
    }
    return `place order for ${restockList.join(' ')}`
}
console.log(printReport(totalCost))
console.log(printReport(totalInventories))
console.log(printReport(restock))
// function totalPrice(array){
//     let summation =0
//     for (let items of array){
//         summation+=items.price
//     }
//     return `the total price of the books is ${summation}`
// }
// function totalInventory(array){
//     let total=0
//     for(let item of array){
//         total+=item.inventory

//     }
//     return `Total inventory ${total} items`
// }
// console.log(printReport(totalInventory))
// console.log(printReport(totalPrice))


