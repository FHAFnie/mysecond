// 引用本js的代码为：
// <script src = "../../common.js"></script>
// 
// 
// 第一个，数组按升序排列（冒泡）
	function sort(list){

			for(var j = 0;j<list.length-1;j++){

				for(var i = 0;i<list.length-1;i++){
					if(list[i+1]<list[i]){
						var temp = list[i+1];
						list[i+1] = list[i];
						list[i]	=temp;
					}
				}
			}
			return list;
		}

// 第二种，数组按降序排列
	function sort(list){
		for(var j = 0;j<list.length-1;j++){
			for(var i = 0;i<list.length-1;i++){

				if(list[i+1]>list[i]){
					var temp = list[i+1];
					list[i+1] = list[i];
					list[i]	=temp;
				}
			}
		}
		return list;
	}


// 第三种，数组反转
function fz(list){
	for(var i = 0; i<parseInt(list.length/2);i++){
		var temp = "";
		temp = list[i];
		// temp = list[0]
		// list[0] = list[9];
		list[i] = list[list.length-1-i];
		// list[9] = temp;
		list[list.length-1-i] = temp;
	}
	return list;
}

// 第四种，判断一个数在数组中是否存在
// 返回值为index即为相同元素的下标
function indexOf(str,list){
		var index = -1;
		for(var i = 0;i<list.length;i++){
			var item = list[i];
			if(str ==list[i]){
				index = i;
				break;
			}
		}
		// if(index==-1){
		// 	document.write(codeList+"中不存在"+str);
		// }else{
		// 	document.write(codeList+"中存在"+str);
		// }这一段为不在函数中写的内容（如果直接在script中就是这样表示）
		return index;
	}
// 第五种，插入一个数,将num按顺序插入到数组中（前提是数组是升序排列）
//  var arr = [1, 3, 5, 7, 9, 10];//集合 是一个排好序的集合
    // var num = 5;//把num放到arr中指定的位置
//  //第一步找到6的位置
    //第二步移动 [1,3,5,7,7,9,10]
    //第三不替换[1,3,5,6,7,9,10]
    
function cr(arr,num){

	if(num>arr[arr.length-1]){//此处判断给出的数是否比数组中最大的数还要大，如果是，则直接放在最后面即可，如果不是，在进入else里面的操作
		arr[arr.length] = num;
	}else{					//这一串的目的是找到num应该插入的位置为index
		var index = 0;
		for(var i = 0 ;i<arr.length;i++){
			if(arr[i]>=num){
				index = i;
				break;
			}
		}
		
		for(var i =arr.length-1;i>=index;i--){//将index后面的所有数都向后面移动一位，给num留出空位来
			arr[i+1] = arr[i];
		}
		// alert(arr);
		arr[index] = num;//将num插入到指定的位置
	}
	return arr;
}


// 第六种，给出数组列表，从中自动生成不重复的四位字符验证码
// 

function yanzhengma(list){
        var list2 = [];//此处为设置一个空的数组，先将给的数组中重复的数挑出去
        var html = "";//验证码存放
        for (var i = 0; i < 4; i++) {//循环四次，得到四个元素
            var randIndex = Math.round(Math.random() * (codeList.length - 1));//随机下标
            var randNum = codeList[randIndex];//表示根据下标 取出对应的数
            if (indexOf(randNum, list2) == -1) {//表示该数不在集合中，此处调用函数indexOf（str,list）
                list2[list2.length] = randNum;
                html += randNum;
            } else {
                i--;//由于会去取出重复的元素，浪费一次循环的次数，所以要将浪费的循环数，补回来，所以执行i--操作，相当于只要取出重复的元素，则i不进行加1的动作
            }
        }
        return html;
}



// 第七种,银行常用，数字转汉字


function nzh(str){
     var list = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
     var list1 = [];
     var list2=[];
     //将数字0到9放入到list1中，待用
    
    for(var i=0;i<=9;i++){
        list1.push(i);
    }
    // 此处是将输入的字符串给分解为汉字连接的字符串类型
    var html="";
    for(var j=0;j<str.length;j++){
         var con = str.charAt(j);
         var index = indexOf(con,list1);
         // alert(index);
         list2.push(list[index]);
         html +=list[index];
    }
    // document.write(list2+"<br/>");
    // document.write(html+"<br/>");

    // 将单位专门放到一个数组中
    
    var str2 =["元","十","百","千","万","十万","百万","千万","亿","十亿","百亿","千亿","万亿"];

    var html1="";
    // 将最终转换的内容以字符串的形式输出（放在html1里面）
    
    // 给每一位配上单位
    for(var j=0;j<str.length;j++){
        html1+=list2[j]+str2[list2.length-1-j];
    }
    // document.write(html1);
    // 
    // 最终返回的是转换为带单位的字符串
    return html1;
}



// 第八种，封装大写字母
function bigCodeList(){
	var bigList = [];
	for(var i=65;i<(65+26);i++){
		bigList.push(String.fromCharCode(i));
	}
	return bigList;
}
// 第九种，封装小写字母
function lowreCodeList(){
	var lowreList = [];
	for(var i=97;i<(97+26);i++){
		lowreList.push(String.fromCharCode(i));
	}
	return lowreList;
}
// 第九种，封装数字0到9
function numList(){
	var numBiao = [];
 	for(var i=0;i<=9;i++){
 		numBiao.push(String(i));
 	}
 	return numBiao;
}





// 插入一种，数字大小写字母还有美元符号和下划线集合
function bigCodeSuoYou(){
	var otherList = ["$","_"]
	return bigCodeList().concat(lowreCodeList(),numList(),otherList);
}
var big = bigCodeSuoYou();	//将函数bigCodeSuoYou()得到的数组赋值给big（big成为一个新的数组）


// 第十种，判断是否为小写字母
// 
function isLowerCode(str){
	// 先将小写字母放到lowreCodeList数组中
	var lowreCodeList = [];
	for(var i=97;i<(97+26);i++){
		lowreCodeList.push(String.fromCharCode(i));
	}
	// 判断是否为小写
	var flag = false;//首先假设都为大写
	for(var i=0;i<lowreCodeList.length;i++){
		var item = lowreCodeList[i];
		// console.log(item);
		if(str === item){
			flag = true;
			break;
		}
	}
	return flag;//true为小写；false为大写
}

// 第十一种，判断是否为大写字母
function isUpperCode(str){
	// 先将大写字母放到bigCodeList数组中
	var bigCodeList = [];
	for(var i=65;i<(65+26);i++){
		bigCodeList.push(String.fromCharCode(i));
	}
	// 判断是否为小写
	var flag = false;//首先假设都为小写
	for(var i=0;i<bigCodeList.length;i++){
		var item = bigCodeList[i];
		// console.log(item);
		if(str === item){
			flag = true;
			break;
		}
	}
	return flag;//true为大写；false为小写
}

// 判断是否为纯数字
function isNumber(str){
	// 数字数组
	var numList = [];
 	for(var i=0;i<=9;i++){
 		numList.push(String(i));
 	}
	// 判断是否为数字
	var flag = false;//首先假设不是数字
	for(var i=0;i<numList.length;i++){
		var item = numList[i];
		// console.log(item);
		if(str == item){
			flag = true;
			break;
		}
	}
	return flag;//true是数字；false不是数字
}




// 第十二种，小写字母改大写字母

function toUpperCode(str){
	// 先将小写字母放到lowreCodeList数组中
	var lowreCodeList = [];
	for(var i=97;i<(97+26);i++){
		lowreCodeList.push(String.fromCharCode(i));
	}
	// 再将大写字母放到bigCodeList数组中
	var bigCodeList = [];
	for(var i=65;i<(65+26);i++){
		bigCodeList.push(String.fromCharCode(i));
	}

	var str1="";
		for(var i=0;i<str.length;i++){

			var con = str.charAt(i);
			// alert(con);
			if(isLowerCode(con)){

				var index = indexOf(con,lowreCodeList);
				// alert(index);
				 str1 += bigCodeList[index];
			}else{
				str1 += con;
			}
		}
	return str1;
}




// 第十三种，大写字母改小写字母

function toLowerCode(str){
	// 先将小写字母放到lowreCodeList数组中
	var lowreCodeList = [];
	for(var i=97;i<(97+26);i++){
		lowreCodeList.push(String.fromCharCode(i));
	}
	// 再将大写字母放到bigCodeList数组中
	var bigCodeList = [];
	for(var i=65;i<(65+26);i++){
		bigCodeList.push(String.fromCharCode(i));
	}

	var str1="";
		for(var i=0;i<str.length;i++){

			var con = str.charAt(i);
			// alert(con);
			if(isUpperCode(con)){

				var index = indexOf(con,bigCodeList);
				// alert(index);
				 str1 += lowreCodeList[index];
			}else{
				str1 += con;
			}

		}
	return str1;
}


// 第十四种，判断用户名是否合法
// 


function pdyhm(username){//username为用户名需要判断,bigList为用户名可以使用的字符种类集合，我们直接在函数内部自己定义好

	if(username.length>=6&&username.length<20){//首先判断长度是否合法
		var con = username.charAt(0);
		if(isNaN(con)){//再判断首字符是否为数字
			// 两者都判断之后，再判断在字符串里面是否存在不在字符范围内的字符串
			// 此时需要一个一个字母的判断所以，需要用到for循环
			// 另外，假设，用户名字符串合法，然后筛选，只要发现不合法的，就可以终止循环，并返回不合法的结果了
			
			// var flag = true;//假设都合法
			// for(var j=0;j<username.length;j++){
			// 	var item = username.charAt(j);
			// 	var index = indexOf(item,bigCodeSuoYou());//判断字母是否在范围内
			// 		// alert(index);
			// 	if(index==-1){//一旦有不在范围内的，就可以结束循环，并返回结果了
			// 		flag = false;
			// 		break;
			// 	}
			// }
			// if(flag){	
			// 	return "用户名合法";
			// }else{
			// 	return "不能使用数字字母$和_以外的字符";
			// }

// 第二种判断
			
			for(var j=0;j<username.length;j++){
				var item = username.charAt(j);
				var index = indexOf(item,bigCodeSuoYou());//判断字母是否在范围内
					// alert(index);
				if(index==-1){//一旦有不在范围内的，就可以结束函数，并返回结果了
					return "不能使用数字字母$和_以外的字符";
				}
			}
			return "用户名合法";//如果遍历后，没有发现index为-1的，证明没有非法字符，可以直接返回合法

		}else{
			return "不能用数字开头";
		}

	}else{
		return "用户名长度不合法";
	}
}


// 生成验证码
function show(list,len){
			var newStr="";
			for(var i=0;i<len;i++){
				var randIndex = Math.round(Math.random()*(list.length-1));
				newStr +=list[randIndex];
			}
			return newStr;
		}









