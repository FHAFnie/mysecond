function getMonthDays(date){//获取给定时间当月的天数
		var temp = new Date();
		// alert(temp);
		temp.setFullYear(date.getFullYear());//获取给定日期的年份
		// alert(temp);
		temp.setDate(1);
		temp.setMonth(date.getMonth()+1);

		temp.setDate(0);
		// alert(temp);
		return temp.getDate();
	}

	function getMonthWeek(date){//获取给定日期当月的第一天是星期几
		var temp = new Date();
		temp.setDate(1);
		temp.setFullYear(date.getFullYear());
		temp.setMonth(date.getMonth());
		// temp.setDate(date.getDate());
		// alert(temp);
		return temp.getDay();
	}

	function gerLastMonthDays(date){//获得给定日期上个月的天数
		var temp = new Date();
		// alert(temp);
		temp.setDate(1);
		temp.setFullYear(date.getFullYear());
		// alert(temp);
		temp.setMonth(date.getMonth());
		// alert(temp);
		// temp.setDate(date.getDate());
		// alert(temp);
		temp.setDate(0);
		// alert(temp);
		return temp.getDate();
	}
