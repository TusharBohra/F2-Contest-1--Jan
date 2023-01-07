/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

PrintDeveloperswithMap()
PrintDeveloperbyForEach()
addData()
concatenateArray()
removeAdmin()

function PrintDeveloperswithMap() {
  arr.map((item)=>{ 
    if(item.profession == "developer"){
        console.log(item.name)
    }
        
})
}

function PrintDeveloperbyForEach() {
    arr.forEach(function printDev(e) {
        if(e.profession == "developer"){
            console.log(e.name)
  }
})
}
  

function addData() {
  arr.push({id:4,name:"susan",age:"20",profession:"intern"})
  console.log(arr)
}

function removeAdmin() {
  arr.forEach(function printDev(e) {
        if(e.profession == "developer"){
            arr.pop()
  }
})
console.log(arr)
}

function concatenateArray() {
  let arr1 = [
  { id: 5, name: "Jet", age: "19", profession: "developer" },
  { id: 6, name: "Jay", age: "24", profession: "admin" },
  { id: 7, name: "Pope", age: "17", profession: "intern" },
];
const result = arr.concat(arr1)
console.log(result)
}
