;(function(){
	$.fn.extend({
		"according":function(opt){
			var pa=$(this);
			var DEFAULT={"start":0};
			var option=$.extend({},DEFAULT,opt);
			init();
			
				//alert(oldnum)
			function init(){
				pa.children("div").hide();
				pa.children("div").eq(option.start).show();
				pa.children(":header").eq(option.start).addClass("active");
			}
			pa.children(":header").each(function(){
				$(this).click(function(){
					var num=pa.children(":header").index($(this));
					
					//alert(num)
					if(num==opt.start){return}
					pa.children("div:visible").slideUp();
					pa.children("div").eq(num).slideDown();
					pa.children(":header.active").removeClass("active");
					pa.children(":header").eq(num).addClass("active");
					opt.start=num;
				})
			})
		}
	})//extend
})(jQuery)

