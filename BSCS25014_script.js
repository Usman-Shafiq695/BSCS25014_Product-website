

window.onload=function greet()
{
    alert("Welcome to my website!");
}
greet();


 //const d = new Date();
 //let year = d.getFullYear();

 //document.getElementById("demo").innerHTML = year;

 document.getElementById("demo").innerHTML = new Date().getFullYear();

//const d = new Date();
//let year = d.getFullYear();
//document.getElementById("demo").innerHTML = year;



function availability(id)
{
    let check=document.getElementById(id).textContent;

    if (check==="in stock")
    {

       alert("This stock is available");
    }
    else{
        alert(" not available");
    }
}

function validateForm() {
  let x = document.forms["myForm"]["fname"].value;   // email
  let y = document.forms["myForm"]["fname1"].value; // password
  const s= document.getElementById('symbol').value;
  const ch = /@gmail/; 
  if (x == "") {
    alert("E-MAIL must be filled out");
    return false;
  }
  if (y == "") {
    alert("PASSWORD must be filled out");
    return false;
  }
  if(y.length <=6)
  {
    alert("The password length can be greater than 6");
    return false;
  }
  if(!(ch.test(s)))
  {
    alert("Email contains '@'gmail.com' symbol.");
    return false;
  }

  alert("Form submitted successfully");
  return true;
}


function send() {
    let i=document.getElementById("chatbox").value.toLowerCase();
    let write=document.getElementById('chat');
    //show user message
    let userMsg=document.createElement("p");
    userMsg.textContent="YOU: "+ i;
    write.appendChild(userMsg); 
    //get bot response
    let botMsg=document.createElement("p");
    botMsg.textContent="Bot: "+reply(i);
    write.appendChild(botMsg);
    //Clear input
    document.getElementById("chatbox").value="";
}
function reply(i) {
    if(i.includes("hello")|| i.includes("hi")) {
        return "HELLO! How may I help You ?";
    }
    else if(i.includes("how are you")) {
        return "I am fine. how are you?";
    }
    else if (i.includes("is wireless headsets available or not")) {
        return "no but upcoming we will launch wireless headsets";
    }
    else if(i.includes("what is the range of earbuds")) {
        return "The range of earbuds are 10-15 metres";
    }
    else if(i.includes("what is the play time of earbuds")) {
        return "The play time of earbuds are 20 hrs in one charge";
    }
    else if(i.includes("wireless charging available")) {
        return "Probably yes but more power banks are not wireless chargable";
    }
    else if(i.includes("bye")) {
        return "Goodbye! Have a nice Day";
    }
}



