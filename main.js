var Guest_array = [];

function submit()
{
       var Guest_name = document.getElementById("name1").value;
        Guest_array.push(Guest_name);
             
        var lenght_of_array = Guest_array.length;
       
}

function show()
{
    
  var i= Guest_array.join("<br>");
  document.getElementById("Result").innerHTML = i;

  document.getElementById("submit_button").style.display = "none";
  document.getElementById("sort_button").style.display = "inline-block";
  
}



function sorting()
{
    Guest_array.sort();
    var i= Guest_array.join("<br>");
  document.getElementById("Sorted_Result").innerHTML = i;
  document.getElementById("search_button").style.display = "inline-block";

}

    
function Search()
{
    var s = document.getElementById("s1").value;
    var found = 0;
    var j;
    for(j=0; j<Guest_array.length; j++) {
        if(s==Guest_array[j]) {
            found = found+1;
  
}
}
document.getElementById("Search_Result").innerHTML = "Name Found "+found+" Time/s";
}