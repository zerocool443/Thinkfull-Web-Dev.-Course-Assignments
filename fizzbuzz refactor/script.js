	
input=parseInt(prompt("Enter the value (no floating value)"));



function fizzbuzz(limit){
	for(i=1;i<=limit;i++){
		if(i%15==0)
			document.write("fizzbuzz"+"<br>")
		else if(i%5==0)
			document.write("buzz"+"<br>")
		else if(i%3==0)
			document.write("fizz"+"<br>") 
		else
			document.write(i+"<br>")
	}
};

if(input%1==0){
fizzbuzz(input);
}

