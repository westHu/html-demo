
function init(){
	
	$(".inputBox input").each(function(){
		
		//初始化
		if($(this).val()){//当输入框不为空，隐藏提示信息
			$(this).siblings(".placeholder").css("display","none");
		}
		else{
			$(this).siblings(".placeholder").css("display","block");
		}
		
		this.onkeyup=function(){
		}
		this.onfocus = function(){
			$(".inputBox").removeClass("focus");
			$(this).parent(".inputBox").addClass("focus");
			$(this).siblings(".placeholder").css("display","none");
			$("#loginBtn").attr("disabled",false);
			$("#loginBtn").removeClass("disabledBtn").addClass("normal");
		}
		this.onblur = function(){
			$(this).parent(".inputBox").removeClass("focus");
			if(!$(this).val()){//当输入框为空，显示提示信息
				$(this).siblings(".placeholder").css("display","block");
			}
		}
	});
}
