console.log("Numbers between -10 and 19");  /*We can use the same variable name for all i.e., var counter  instead of num,even, odd,nums */
var num=-10;
while(num<=19)
{
	console.log(num);
	num++;
}


// =================================================
console.log("Even numbers between 10 and 40");
var even=10;
// while(even<=40)
// {
// 	if(even % 2 === 0)
// 		console.log(even);
// 	even++;
// }	


while(even<=40)
{
	console.log(even);
	even+=2;
}	



// ==================================================
console.log("Odd numbers between 300 and 333");
var odd=300;
while(odd<=333)
{
	if(odd % 2 !== 0)
		console.log(odd);
	odd++;
}
// ===================================================
console.log("Numbers divisible by 3 AND 5 between 5 and 50");
var nums=5;
while(nums<=50)
{
	if(nums % 3 === 0 && nums % 5 === 0)
		console.log(nums);
	nums++;
} 