function creatLinx(num1,num2,num3){
	for(var h=1;h<=num3;h++){

		for(var i = 1; i<num1; i++){
		for(var j = 1;j<=num2-i;j++){
			document.write("　");
		}

		for(var k = 1;k<=2*i-1;k++){
			document.write("锋");
		}

		document.write("<br/>");
		}
		for(var i = 1; i<=num1; i++){

			for(var j = 1;j<=i;j++){
				document.write("　");
			}

			for(var k = 1;k<=2*(num2-i)-1;k++){
				document.write("锋");
			}

			document.write("<br/>");
		}
	}
}

function szys(num1,opt,num2){

	 	switch (opt){
	 		case "+":
	 			result = num1 + num2;
	 			break;
	 		case "-":
	 			result = num1-num2;
	 			break;
	 		case "*":
	 			result = num1 * num2;
	 			break;
	 		case "/":
	 			result = num1 / num2;
	 			break;
	 	}
	 	// 必须带return，否则，函数没有输出值
	 	return result;
	}

