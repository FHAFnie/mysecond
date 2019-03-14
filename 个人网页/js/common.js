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
			if(str ===list[i]){
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



// 第七种
// 

