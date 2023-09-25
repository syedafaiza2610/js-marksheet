 var name1 = prompt("Enter Your Name");
 var sub1 = +prompt("Enter Your English Marks");
 var sub2 = +prompt("Enter Your Maths Marks");
 var sub3 = +prompt("Enter Your Urdu Marks");
 var sub4 = +prompt("Enter Your Computer Marks");
 var sub5 = +prompt("Enter Your Islamiat Marks");
 var total = (sub1 + sub2 + sub3 + sub4 +sub5);
 var per = (total/500*100);
 var grade = "";
 
 if(per >= 80 && per < 101){
    grade = "A+";
 }
 else if(per >=70 && per < 81){
    grade = "A";
 }
 else if(per >=60 && per < 71){
    grade = "B";
 }
 else if(per >=50 && per < 61){
    grade = "C";
 }
 else if(per >=40 && per < 51){
    grade = "D";
 }
 else if(per >= 101){
    grade = "Invalid percentage";
 }
 else{
    grade = "Fail";
 }

 document.write(
    "<table border =1px > " +
    "<tr>" + 
    "<td>" + 
    "<th>" + "Name" + "</th>"
    + "</td>" +
    "<td>" + 
    "<th>" + "English" + "</th>"
    + "</td>"+
    "<td>" + 
    "<th>" + "Maths" + "</th>"
    + "</td>"+
    "<td>" + 
    "<th>" + "Urdu" + "</th>"
    + "</td>"+
    "<td>" + 
    "<th>" + "Computer" + "</th>"
    + "</td>"+
    "<td>" + 
    "<th>" + "Islamiat" + "</th>"
    + "</td>"+
    "<td>" + 
    "<th>" + "Total" + "</th>"
    + "</td>"+
    "<td>" + 
    "<th>" + "Percentage" + "</th>"
    + "</td>"+
    "<td>" + 
    "<th>" + "Grade" + "</th>"
    + "</td>"
    + "</tr>"+
    "<tr>" + 
    "<td>" +
    "<th>" + name1 + "</th>"
    + "</td>" +
    "<td>" +
    "<th>" + sub1 + "</th>"
    + "</td>"+
    "<td>" +
    "<th>" + sub2 + "</th>"
    + "</td>"+
    "<td>" + 
    "<th>" + sub3 + "</th>"
    + "</td>"+
    "<td>" + 
    "<th>" + sub4 + "</th>"
    + "</td>"+
    "<td>" + 
    "<th>" + sub5 + "</th>"
    + "</td>"+
    "<td>" + 
    "<th>" + total + "</th>"
    + "</td>"+
    "<td>" + 
    "<th>" + per + "%" + "</th>"
    + "</td>"+
    "<td>" + 
    "<th>" + grade + "</th>"
    + "</td>"
    + "</tr>"
     + "</table>"
 )
 

