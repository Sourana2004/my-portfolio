
const myString = "Hello, I'm Souvik, A Web Developer from West Bengal, INDIA.";
const textElement = document.getElementById("text");

let index = 0;
function displayNextCharacter() {
    if (index < myString.length) {
        textElement.textContent += myString[index];
        index++;
        setTimeout(displayNextCharacter, 100); // Adjust the delay as needed
    }
}
displayNextCharacter();

let intro = document.querySelector("#lower-intro");
let s = document.getElementById("skills"); // s for skills
intro.innerHTML = "";
s.addEventListener("click", function () {

    intro.innerHTML += `
    <div class="low-intro">
     <div class= "intro-logo">
        <i class="fa-brands fa-java"></i>
        <br>
        <i class="fa-solid fa-object-group"></i>
        <br>
        <i class="fa-solid fa-laptop-code"></i>
        <br>
        <i class="fa-solid fa-square-xmark"></i>
        <br>
        <i class="fa-solid fa-database"></i>
        <br>
        <i class="fa-brands fa-js"></i>
        <br>
        <i class="fa-solid fa-code"></i>
    </div>
    <div class= "intro-text">
    <p>Java</p>
    <p>Object-Oriented Programming</p>
    <p>Data Structure & Algorithm</p>
    <p>SQL</p>
    <p>DBMS</p>
    <p>HTML, CSS and JavaScript</p>
    <p>Web Development</p>
    </div>
    </div>`;


    s.style.color = "red";

})
s.addEventListener("mouseleave", function () {
    intro.innerHTML = "";
    s.style.color = "rgb(235, 227, 8)";

})

let e = document.getElementById("education"); //e for education
e.addEventListener("click", function () {

    intro.innerHTML += `
    <div class="low-intro">
    <div class= "intro-logo">
        <i class="fa-solid fa-graduation-cap"></i>
        <br>
        <i class="fa-solid fa-school"></i>
        <br>
        <i class="fa-solid fa-school"></i>
    </div>
    <div class="intro-text">
    <p>Diploma from Basirhat Govt. Polytechnic</p>
    <p>Completed XII from Baishnabchak M.C High School</p>
    <p>Completed X from Baishnabchak M.C High School</p>
    </div>
    </div>`;


    e.style.color = "red";

})
e.addEventListener("mouseleave", function () {
    intro.innerHTML = "";
    e.style.color = "rgb(235, 227, 8)";

})

let h = document.getElementById("hobbies"); //h for hobbies
h.addEventListener("click", function () {

    intro.innerHTML += `
    <div class="low-intro">
    <div class= "intro-logo">
        <i class="fa-solid fa-baseball-bat-ball"></i>
        <br>
        <i class="fa-solid fa-earth-americas"></i>
        <br>
        <i class="fa-solid fa-gamepad"></i>
    </div>
    <div class = "intro-text">
    <p>Playing & watching cricket</p>
    <p>Exploring new Places</p>
    <p>Playing Online Games</p>
    </div>
    </div>`;



    h.style.color = "red";

})
h.addEventListener("mouseleave", function () {
    intro.innerHTML = "";
    h.style.color = "rgb(235, 227, 8)";

})

let p1 = document.getElementById("pro-box1");
p1.addEventListener("mouseenter", function () {
    p1.innerHTML = `
    <h3 class="project-h3">Ecommerce Website</h3>
    <p class="project-p">It was a basic project. I wanted to create an Ecommerce website to replicate meesho with Html & CSS.</p
    `;
    p1.style.border = "5px solid yellow";
})
p1.addEventListener("mouseleave", function () {
    p1.innerHTML = "";
    p1.style.border = "none";
})

let p2 = document.getElementById("pro-box2");
p2.addEventListener("mouseenter", function () {
    p2.innerHTML = `
    <h3 class="project-h3">Ecommerce Website</h3>
    <p class="project-p">It was a basic project. I wanted to create an Ecommerce website to replicate Amazon with Html, CSS & JavaScript.</p
    `;
    p2.style.border = "5px solid yellow";
})
p2.addEventListener("mouseleave", function () {
    p2.innerHTML = "";
    p2.style.border = "none";
})


let message_submit = document.getElementById("message-submit");

message_submit.addEventListener("click",function(){
    
    message_submit.style.backgroundColor = "red";
    
})
message_submit.addEventListener("mouseleave",function(){
    message_submit.style.backgroundColor = "#db7b0d";
})




