let arr=[];
let books={
title:"Beauty of the nature",
author:"Gowtham",
yearPublished:2021,
readStatus:"read",
getsummary(){
alert("The tilte of the book "+this.title+" written by "+this.author+" released in "+this.yearPublished+" and the status is "+this.readStatus);
}
};
let content=document.getElementById("os");
content.innerHTML="<button type='submit' name='f' class='ef'onclick='add()'>INITIAL BOOKS</button><br><br>";
content.innerHTML+="<button type='submit' name='f' class='ef'onclick='addbooks()'>Add a books</button><br><br>";
content.innerHTML+="<button type='submit' name='f' class='ef'onclick='getAllstatus()'>Status of the books</button><br><br> ";
content.innerHTML+="<button type='submit' name='f' class='ef'onclick='books.getsummary()'>Summary of the book</button><br><br>";
content.innerHTML+="<button type='submit' name='f' class='ef'onclick='removebooks()'>Remove Book</button><br><br>";
content.innerHTML+="<button type='submit' name='f' class='ef'onclick='add_at_first()'>Add at a first</button><br><br>";
content.innerHTML+="<button type='submit' name='f' class='ef'onclick='remove_first()'>Delete at first</button><br><br>";
content.innerHTML+="<button type='submit' name='f' class='ef'onclick='getAlltitles()'>Get_titles</button><br><br>";
content.innerHTML+="<button type='submit' name='f' class='ef'onclick='getBookbyAuthors()'>Book_by_Author</button><br><br>";
content.innerHTML+="<button type='submit' name='f' class='ef'onclick='verify()'>Reading_Status</button><br><br>";
content.innerHTML+="<button type='submit' name='f' class='ef'onclick='sub()'>Portion of the book</button><br><br>";
content.innerHTML+="<button type='submit' name='f' class='ef'onclick='remove_title()'>Removed_by_title</button>";
let head=document.getElementById("ns");
head.innerHTML+="The list of properties performed:";
function add(){
arr.push(books);
alert("Books added successfully");
}
function value(t,a,y,r){
return{
title:t,
author:a,
yearPublished:y,
readStatus:r,
};

}
function addbooks(){
let t=prompt("Enter the title of the book:");
let a=prompt("Enter the author of the book:");
let y=prompt("Enter the year:");
let r=prompt("Enter the status:");
let b2=value(t,a,y,r);
arr.push(b2);
let c=document.getElementById("gg");
c.innerHTML+="<hr>";
for(let i of arr){
c.innerHTML+="Title:"+i.title+"<br>"
c.innerHTML+="Author:"+i.author+"<br>"
c.innerHTML+="Year:"+i.yearPublished+"<br>"
c.innerHTML+="Status:"+i.readStatus+"<br>"
}
}
function removebooks(){
alert("The book has been removed successfully");
console.log(arr.pop());
let c=document.getElementById("gg");
c.innerHTML+="<hr>";
    for(let i of arr){
        c.innerHTML+="Title:"+i.title+"<br>"
        c.innerHTML+="Author:"+i.author+"<br>"
        c.innerHTML+="Year:"+i.yearPublished+"<br>"
        c.innerHTML+="Status:"+i.readStatus+"<br><hr>"
        }
}
function add_at_first(){
let t=prompt("Enter the title of the book:");
let a=prompt("Enter the author of the book:");
let y=prompt("Enter the year:");
let r=prompt("Enter the status:");
let b2=value(t,a,y,r);
arr.unshift(b2);
let c=document.getElementById("gg");
c.innerHTML+="<hr>";
for(let i of arr){
    c.innerHTML+="Title:"+i.title+"<br>"
    c.innerHTML+="Author:"+i.author+"<br>"
    c.innerHTML+="Year:"+i.yearPublished+"<br>"
    c.innerHTML+="Status:"+i.readStatus+"<br>"
    }
}
function remove_first(){
console.log(arr.shift());
alert("The book had been removed at the first");
let c=document.getElementById("gg");
c.innerHTML+="<hr>";
for(let i of arr){
    c.innerHTML+="Title:"+i.title+"<br>"
    c.innerHTML+="Author:"+i.author+"<br>"
    c.innerHTML+="Year:"+i.yearPublished+"<br>"
    c.innerHTML+="Status:"+i.readStatus+"<br>"
    }
}
function getAlltitles(){
let p1=temp=>(temp.title);
let p2=arr.map(p1);
document.getElementById("gg").innerHTML+= "The titles of the books :"+p2+"<br><hr>";
console.log(p2);
}
function getBookbyAuthors(){
    let a=prompt("Enter the author to want:");
let s=arr.filter((t=>t.author==a));
console.log(s);
let c=document.getElementById("gg");
c.innerHTML+="<hr>";
for(let i of s){
    c.innerHTML+="Title:"+i.title+"<br>"
    c.innerHTML+="Author:"+i.author+"<br>"
    c.innerHTML+="Year:"+i.yearPublished+"<br>"
    c.innerHTML+="Status:"+i.readStatus+"<br>"
    }
}
function verify(){
let s1=arr.filter((t=>t.readStatus=='read'));
console.log(s1);
let c=document.getElementById("gg");
c.innerHTML+="<hr>";
for(let i of s1){
    c.innerHTML+="Title:"+i.title+"<br>"
    c.innerHTML+="Author:"+i.author+"<br>"
    c.innerHTML+="Year:"+i.yearPublished+"<br>"
    c.innerHTML+="Status:"+i.readStatus+"<br>"
    }
}
function sub(){
let y=arr.slice(1,2);
console.log(y);
let c=document.getElementById("gg");
c.innerHTML+="<br>";
for(let i of y){
    c.innerHTML+="Title:"+i.title+"<br>"
    c.innerHTML+="Author:"+i.author+"<br>"
    c.innerHTML+="Year:"+i.yearPublished+"<br>"
    c.innerHTML+="Status:"+i.readStatus+"<br>"
    }
}
function remove_title(){
let a=prompt("book removed for the title:");
let q=arr.filter((t=>t.title==a));
console.log(arr.pop(q));
let c=document.getElementById("gg");
c.innerHTML+="<hr>"
for(let i of arr){
    c.innerHTML+="Title:"+i.title+"<br>"
    c.innerHTML+="Author:"+i.author+"<br>"
    c.innerHTML+="Year:"+i.yearPublished+"<br>"
    c.innerHTML+="Status:"+i.readStatus+"<br>"
    }
}
function getAllstatus(){
    let p1=temp=>(temp.readStatus);
    let p2=arr.map(p1);
    document.getElementById("gg").innerHTML+="Reading status of each books:"+ p2+"<br>";
    console.log(p2);
    }

