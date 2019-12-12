var products =
    {
        name:"五宝茶",
        pic:"./img/20190227175059JmWaoIhU_Thumb.jpg",
        price:69,
        id:1,
        number:1,
    }
var arr = [];
var jiaru = document.getElementById('mai');
var json = JSON.parse(localStorage.getItem('list')||"[]")
jiaru.onclick = function(){
    if(json){
        for(i=0;i<json.length;i++){
            if(json[i].id==1){
                json[i].number++
                localStorage.setItem('list',JSON.stringify(json))
                return
            }
        }
        json.push(products)
        localStorage.setItem('list',JSON.stringify(json))
    }
    if(!json){
        arr.push(products)
        localStorage.setItem('list',JSON.stringify(arr))
    }
}