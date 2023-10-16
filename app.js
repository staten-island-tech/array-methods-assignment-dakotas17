console.log("connected");

const arr = [3,6,9]
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

const people = [
{
    name: "blair",
    numbers: [1,2,3],
    cool: true,
},
{
    name: "dakota",
    numbers: [4,5,6],
    cool: true,
},
{
    name: "oleg",
    numbers: [7,8,9],
    cool: false,
},
{
    name: "chenxi",
    numbers: [10,11,12],
    cool: true,
},
{
    name: "michael",
    numbers: [13,14,15],
    cool: true,
},
]

people.forEach((people)=> console.log(people.name))
people.forEach((yay)=> {
    yay.numbers.forEach((Fk)=> console.log(Fk))
})
const cool = people.filter((whopper)=> {
    return whopper.cool === true
})
console.log(cool)