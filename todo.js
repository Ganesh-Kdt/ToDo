var counter=0;
function popup()
{
   var a= $("<div></div>").attr("id","secondbox").append($("<div></div>").attr("id","outsidebox").append([$("<div></div>").attr("id","new").text("Add New ToDo"),$("<input>").attr({id:"insidebox",type:"text"}),$("<div></div>").attr("id","addbox").append([$("<span></span>").attr("id","addtext").text("ADD")])]))
    $("#id1").append(a);         
    addinput();
}
function addinput()
{
    $("#addbox").click(function(){
        var a=document.getElementsByTagName("input")[0];
        if(a.value!="")
        {
            counter++;
            if(counter<=5)
            {
                var b=$("<div></div>").css({fontSize:"2rem",}).append([$("<i><i>").addClass("fa fa-check-circle space").attr("job","complete"),$("<p></p>").css({display:"inline-block",width:"75%",marginLeft:"10px"}).text(a.value),$("<i></i>").addClass("fa fa-trash-o space").attr("job","delete")]);
                $("#maindiv").append(b);
            }
            else
            {
                counter--;
                var c=document.getElementById("addbox").parentNode.parentNode;
                document.getElementById("id1").removeChild(c);
                setTimeout(listfull,0);
                setTimeout(removelistfull,2000);
                return;
            }
        }
        var c=document.getElementById("addbox").parentNode.parentNode;
        document.getElementById("id1").removeChild(c);
        
    })
}
document.getElementById("maindiv").addEventListener("click",function(event)
{
    var element=event.target;
    var b=event.target.getAttribute("job");
    if(b=="complete")
    completetodo(element);
    else if(b=="delete")
    deletetodo(element);
})
function completetodo(element)
{
    var a=element.parentNode;
    a.querySelector("p").classList.toggle("linethrough");
}
function deletetodo(element)
{
    counter--;
    var a=element.parentNode.parentNode;
    a.removeChild(element.parentNode);
}
function listfull()
{
    var a= $("<div></div>").attr("id","listfull").text("List Is Full");
    $("#id1").append(a); 
}
function removelistfull()
{
    var d=document.getElementById("listfull").parentNode;
    var e=document.getElementById("listfull")
    d.removeChild(e);
}