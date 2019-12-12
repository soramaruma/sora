var input = document.getElementsByClassName("text")[0];
var ol = document.getElementsByClassName("text-ol")[0];
var flag = true;//判断用户是否输入完成,默认是完成的
		input.addEventListener('compositionstart',function(){
			flag = false;
		})
		input.addEventListener('compositionend',function(){
			flag = true;
		})
		input.oninput = function(){
            ol.style.display='block'
			setTimeout(function(){
				if(flag){
                    var keyword = input.value;
                    var script = document.createElement('script');
					//定义一个函数名
					var cbName = 'phone'+new Date().getTime()+Math.random().toString().slice(2);	
					//设置该标签的src属性
					script.src = "https://suggest.taobao.com/sug?code=utf-8&q="+keyword+"&_ksTS=1563970517892_385&callback="+cbName+"&k=1&area=c2c&bucketid=10";								
					//定义一个函数,以备调用
					window[cbName] = function(data){
						var result = data.result;//是一个数组
						var str = "";
						result.forEach(function(value){
							str+="<li>"+value[0]+"</li>"
						})
						ol.innerHTML = str;
						script.remove()
					}
                document.body.appendChild(script);
                if(input.value==' '){
                    ol.style.display='none';
                }
            }
    },0)
}
            