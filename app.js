// back to top button
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if ( window.pageYOffset > 85) {
        toTop.classList.add("active");
    }else {
        toTop.classList.remove("active")
    }
})


// let barBtn = document.getElementById("bar");
// let mvNav = document.getElementsByClassName("mvNav");

// mvNav.style.right = "-250px";
// barBtn.onclick = function() {
//     if (mvNav.style.right == "-250px") {
//         mvNav.style.right == "0px";
//     }else {
//         mvNav.style.right = "-250px";
//     }
// }

// contact form 

function sendEmail () {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "aidencolins401@gmail.com",
        Password : "Macbookpro1",
        To : 'oyewalefavour424@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New contact form",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}