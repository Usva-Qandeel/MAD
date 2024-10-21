//empty array fill data later on
const arr=[];
arr[0]=1;
arr[1]='aatiqa';
console.log(arr);
//array with data
let arr1=['aatiqa', 2];
console.log(arr1)
//array with new keywoRd
let arr3= new Array(1,2,3,4,5,6);
console.log(arr3)
//array methods
arr3.map((a)=>{
    console.log(a)
})
//array method filter
const names = ['Izza' , 'laiba' , 'Hiba', 'Izza' ];
let filtered=names.filter((name)=>
{
return name!='Izza'
});
console.log(filtered)