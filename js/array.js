//var marks = [15, 10, 25, 18, 20, 35, 30, 45];
//for (i = 0; i < marks.length; i++) {
//    document.getElementById("result").innerHTML += marks[i] + "<br/>";
//};

	
	function myFunction(){
		
		var	search_item = Number(prompt("Enter your search element:"));
		
		var len = [15, 10, 25, 20, 55, 40, 50];
			
			flag=0;
		
		for(i=0;i<len.length;i++){
			if(search_item==len[i])
			{
				flag=1;
				break;
			};
			
		};
		if(flag==1){
			document.getElementById("result").innerHTML = search_item+" Your Search Element Found";
			document.getElementById("result").style.color = "green";
		}else{
			document.getElementById("result").innerHTML = search_item+" Your Search Element Found";
			document.getElementById("result").style.color = "red";
		};
		
	};
