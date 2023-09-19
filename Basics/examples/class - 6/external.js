function onButtonClick(){
    // output - 1 - Window 
    alert('Welcome to this class');
    // output - 2 - developers (internal use)
    console.log("JS - code - onclick executed successfully");
    // output - 3 - end users (External use)
    document.write("<h3 style='color:red'>User clicked on CLICK HERE button</h3>");

}

function validateUserData(){
    // var iUserName = document.getElementById("idUsername").value;

    var iUserNameTag = document.getElementById("idUsername");

    var valueUserName = iUserNameTag.value;  

    var iPassword = document.getElementById("idPassword").value;


    if(valueUserName == iPassword )
    {
        document.write("login success");
    } else{
        document.getElementById("errorMsg").innerHTML = "Invalid credentilas";
    }

}