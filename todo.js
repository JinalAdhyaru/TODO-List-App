var today = new Date(); 
var dayy = today.getDay();     
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
var day = daylist[dayy];      
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
document.getElementById("p3").innerHTML="<b>" + day+', '+date+ "</b>";

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('p1').innerHTML = "<b>"+h + ":" + m + ":" + s+"</b>";
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
}

var add = document.getElementById('add');
var list = document.getElementById('list');
var usrip = document.getElementById('userinput');

//adding a new list element
add.onclick = function() {
    addlis(list);
    usrip.value = '';
    usrip.focus(); 
}

function addlis(targetUl) {
    var inputtext = usrip.value;
    var li = document.createElement('li');
    var textNode = document.createTextNode(inputtext + ' ');
    var removebtn = document.createElement('button');
       
    if(inputtext != ''){
    var x = document.getElementById("form_sample");
    var createform = document.createElement('form'); // Create New Element Form
    createform.setAttribute("action", ""); // Setting Action Attribute on Form
    createform.setAttribute("method", "post"); // Setting Method Attribute on Form
   
    var namelabel = document.createElement('select');    

    var inputelement = document.createElement('option');
    inputelement.setAttribute("index","1");
    inputelement.innerHTML = "TODO";    

    var inputelement1 = document.createElement('option');
    inputelement1.setAttribute("index","2");
    inputelement1.innerHTML = "In Progress";     

    var inputelement2 = document.createElement('option');
    inputelement2.setAttribute("index","3");
    inputelement2.innerHTML = "Done";   

    removebtn.className = 'btn btn-danger'; 
    removebtn.innerHTML = '&times ';
    removebtn.setAttribute('onclick','removeMe(this)');
    x.appendChild(createform);
    createform.appendChild(namelabel);
    namelabel.appendChild(inputelement);
    namelabel.appendChild(inputelement1);
    namelabel.appendChild(inputelement2);
    li.appendChild(textNode);
    li.appendChild(namelabel);
    li.appendChild(removebtn);
    targetUl.appendChild(li);
    }
    else {
        alert("Please enter a TODO");
    }   
}

    function removeMe(item) {
        var p = item.parentElement;
        p.parentElement.removeChild(p);
        
}