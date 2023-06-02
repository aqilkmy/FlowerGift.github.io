const flower = document.querySelector(".flower");
const tombol = document.querySelector(".tombol")
const spin1 = document.querySelector(".spin1")

const a1 = document.querySelector(".a1")
const a2 = document.querySelector(".a2")
const a3 = document.querySelector(".a3")
const a4 = document.querySelector(".a4")
const a5 = document.querySelector(".a5")
const a6 = document.querySelector(".a6")

const b1 = document.querySelector(".b1")
const b2 = document.querySelector(".b2")
const b3 = document.querySelector(".b3")
const b4 = document.querySelector(".b4")
const b5 = document.querySelector(".b5")
const b6 = document.querySelector(".b6")

const fw1 = document.querySelector(".fw1")
const fw2 = document.querySelector(".fw2")

const flower1 = document.querySelector(".flower1")
const flower2 = document.querySelector(".flower2")

spin1.addEventListener("click", () => {
    fw1.classList.toggle("fw1Move")
    fw2.classList.toggle("fw2Move")

})

tombol.addEventListener("click", () => {
    fw1.classList.toggle("fw1Move")
    fw2.classList.toggle("fw2Move")

    a1.classList.toggle("n1")
    a2.classList.toggle("n2")
    a3.classList.toggle("n3")
    a4.classList.toggle("n4")
    a5.classList.toggle("n5")
    a6.classList.toggle("n6")
    a1.classList.toggle("flower1on")
    a2.classList.toggle("flower1on")
    a3.classList.toggle("flower1on")
    a4.classList.toggle("flower1on")
    a5.classList.toggle("flower1on")
    a6.classList.toggle("flower1on")

    b1.classList.toggle("m1")
    b2.classList.toggle("m2")
    b3.classList.toggle("m3")
    b4.classList.toggle("m4")
    b5.classList.toggle("m5")
    b6.classList.toggle("m6")
    b1.classList.toggle("flower2on")
    b2.classList.toggle("flower2on")
    b3.classList.toggle("flower2on")
    b4.classList.toggle("flower2on")
    b5.classList.toggle("flower2on")
    b6.classList.toggle("flower2on")
})