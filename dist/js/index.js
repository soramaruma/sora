var input=document.getElementsByClassName("text")[0],ol=document.getElementsByClassName("text-ol")[0],flag=!0;input.addEventListener("compositionstart",function(){flag=!1}),input.addEventListener("compositionend",function(){flag=!0}),input.oninput=function(){ol.style.display="block",setTimeout(function(){if(flag){var t=input.value,o=document.createElement("script"),e="phone"+(new Date).getTime()+Math.random().toString().slice(2);o.src="https://suggest.taobao.com/sug?code=utf-8&q="+t+"&_ksTS=1563970517892_385&callback="+e+"&k=1&area=c2c&bucketid=10",window[e]=function(t){var e=t.result,n="";e.forEach(function(t){n+="<li>"+t[0]+"</li>"}),ol.innerHTML=n,o.remove()},document.body.appendChild(o)," "==input.value&&(ol.style.display="none")}},0)};