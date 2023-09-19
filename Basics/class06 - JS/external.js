function validateUser() {
    alert("Welcome to Login page");
    var iUN = document.getElementById("userName").value;
    var iPWD = document.getElementById("password").value;
    
    if( iUN === iPWD ){
        document.write("<h3> Login success </h3>");
    }else{
        alert("Invalid credentials");    
    }


}

function changeCSS(){
    changeStyle = document.getElementById("color");
    changeStyle.style.backgroundColor = document.getElementsByTagName("button").value;
}

function addHtmlElement(){
    //1. Add HTML element 
    var oNewElement = document.createElement("h4");
    //2. Create text node
    var oTextNode = document.createTextNode("New Heading Tag H4")
    //3. add text to node inside newly created element
    oNewElement.appendChild(oTextNode);
    //4. get canvas object
    var oDiv = document.getElementById("addHere");
    //5. append newly created element to canvas 
    oDiv.appendChild(oNewElement);
}