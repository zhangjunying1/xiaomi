function getClass(classname,ranger){
	 	ranger=ranger?ranger:document;
	 	if(document.getElementsByClassName){
	 		return ranger.getElementsByClassName(classname)
	 	}
	 	else{
	 		var newarr=[];
	 		var all=ranger.getElementsByTagName('*')
	 		for(var i=0;i<all.length;i++){
	 			if(check(all[i].className,classname)){
	 			newarr.push(all[i]);
	 		}
	 	}
	 		return newarr;
	}
}

function check(className,classname){
	var arr=className.split(' ')
	for(let i=0;i<arr.length;i++){
	 	if(arr[i]==classname){
	 		return true;
	 	}
	}
	return false;
}


function $(select,ranger){
	ranger=ranger?ranger:document;
	var first=select.charAt(0);
	if(first=='.'){
		return getclass(select.substring(1),ranger);
	}
	else if(first=='#'){
		return ranger.getElementById(select.substring(1));
	}
	//判断是否是标签(正则表达式)
	else if(/^[a-z][a-z1-6]{0,7}$/.test(select)){
		return ranger.getElementsByTagName(select);
	}
}
