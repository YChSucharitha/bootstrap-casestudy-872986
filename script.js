function validation() {
  var name = document.forms["editForm"]["name"].value;
  if (name == "") {
    alert("Name is required");
    return false;
  }
 
  }
  var price=document.getElementById("price").value;
    if (price == "") {
    alert("Price is required");
    return false;
  }
 
   var dol=document.getElementById("dateOfLaunch").value;
    if ( dol== "") {
    alert("Date Of Launch is required");
    return false;
  } 
  
}