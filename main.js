
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

const c1 = document.querySelector(".c1")
const c2 = document.querySelector(".c2")
const c3 = document.querySelector(".c3")
const c4 = document.querySelector(".c4")
const c5 = document.querySelector(".c5")
const c6 = document.querySelector(".c6")

const d1 = document.querySelector(".d1")
const d2 = document.querySelector(".d2")
const d3 = document.querySelector(".d3")
const d4 = document.querySelector(".d4")
const d5 = document.querySelector(".d5")
const d6 = document.querySelector(".d6")

const e1 = document.querySelector(".e1")
const e2 = document.querySelector(".e2")
const e3 = document.querySelector(".e3")
const e4 = document.querySelector(".e4")
const e5 = document.querySelector(".e5")
const e6 = document.querySelector(".e6")

const fw1 = document.querySelector(".fw1")
const fw2 = document.querySelector(".fw2")
const fw3 = document.querySelector(".fw3")
const fw4 = document.querySelector(".fw4")
const fw5 = document.querySelector(".fw5")

const flower1 = document.querySelector(".flower1")
const flower2 = document.querySelector(".flower2")
const flower3 = document.querySelector(".flower3")
const flower4 = document.querySelector(".flower4")
const flower5 = document.querySelector(".flower5")

spin1.addEventListener("click", () => {
    fw1.classList.toggle("fw1Move")
    fw2.classList.toggle("fw2Move")
    fw3.classList.toggle("fw3Move")
    fw4.classList.toggle("fw4Move")
    fw5.classList.toggle("fw5Move")

})

tombol.addEventListener("click", () => {
    fw1.classList.toggle("fw1Move")
    fw2.classList.toggle("fw2Move")
    fw3.classList.toggle("fw3Move")
    fw4.classList.toggle("fw4Move")
    fw5.classList.toggle("fw5Move")

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
    
    c1.classList.toggle("o1")
    c2.classList.toggle("o2")
    c3.classList.toggle("o3")
    c4.classList.toggle("o4")
    c5.classList.toggle("o5")
    c6.classList.toggle("o6")
    c1.classList.toggle("flower3on")
    c2.classList.toggle("flower3on")
    c3.classList.toggle("flower3on")
    c4.classList.toggle("flower3on")
    c5.classList.toggle("flower3on")
    c6.classList.toggle("flower3on")
    
    d1.classList.toggle("p1")
    d2.classList.toggle("p2")
    d3.classList.toggle("p3")
    d4.classList.toggle("p4")
    d5.classList.toggle("p5")
    d6.classList.toggle("p6")
    d1.classList.toggle("flower4on")
    d2.classList.toggle("flower4on")
    d3.classList.toggle("flower4on")
    d4.classList.toggle("flower4on")
    d5.classList.toggle("flower4on")
    d6.classList.toggle("flower4on")

    e1.classList.toggle("q1")
    e2.classList.toggle("q2")
    e3.classList.toggle("q3")
    e4.classList.toggle("q4")
    e5.classList.toggle("q5")
    e6.classList.toggle("q6")
    e1.classList.toggle("flower5on")
    e2.classList.toggle("flower5on")
    e3.classList.toggle("flower5on")
    e4.classList.toggle("flower5on")
    e5.classList.toggle("flower5on")
    e6.classList.toggle("flower5on")

   
})