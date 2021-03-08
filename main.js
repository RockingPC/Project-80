listarray=[];
function submit(){
    itemarray=[];
    for(var i=1;i<=3;i++){
        var a1= document.getElementById("item"+i).value;
        console.log(a1);
        listarray.push(a1);
    }
    console.log(listarray);
    var l=listarray.length;
    console.log(l);
    for(var s=1;s<=l;s++){
itemarray.push("item-"+listarray[s]);
console.log(itemarray);
document.getElementById("displaylabel1").innerHTML=itemarray;
    } 
    console.log(itemarray);  
}
    function sorting(){
        listarray.sort();
        console.log(listarray);
        document.getElementById("displaylabel1").innerHTML=listarray;
    }
