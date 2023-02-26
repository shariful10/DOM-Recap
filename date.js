const date = new Date();
console.log(date);
const date1 = new Date('1971-05-10');
const date2 = new Date('1971-12-16');


if(date1.getTime() < date2.getTime()){
    console.log("May was before December");
}
else{
    console.log("May was't before December");
}