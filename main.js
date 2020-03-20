// Tabbed Content

// Global Variable
let currentTab = 1;

// Event Listeners
document.getElementById("b1").addEventListener("click", setTab1);
document.getElementById("b2").addEventListener("click", setTab2);
document.getElementById("b3").addEventListener("click", setTab3);
document.getElementById("b4").addEventListener("click", setTab4);
document.getElementById("b5").addEventListener("click", setTab5);

document.getElementById("div1").style.display = "block";
document.getElementById("div2").style.display = "none";
document.getElementById("div3").style.display = "none";
document.getElementById("div4").style.display = "none";
document.getElementById("div5").style.display = "none";

function setTab1() {
    document.getElementById("b" + currentTab).classList.remove("active");
    currentTab = 1;
    document.getElementById("b" + currentTab).classList.add("active");

    document.getElementById("div1").style.display = "block";
    document.getElementById("div2").style.display = "none";
    document.getElementById("div3").style.display = "none";
    document.getElementById("div4").style.display = "none";
    document.getElementById("div5").style.display = "none";
}

function setTab2() {
    document.getElementById("b" + currentTab).classList.remove("active");
    currentTab = 2;
    document.getElementById("b" + currentTab).classList.add("active");

    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").style.display = "block";
    document.getElementById("div3").style.display = "none";
    document.getElementById("div4").style.display = "none";
    document.getElementById("div5").style.display = "none";
}

function setTab3() {
    document.getElementById("b" + currentTab).classList.remove("active");
    currentTab = 3;
    document.getElementById("b" + currentTab).classList.add("active");

    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").style.display = "none";
    document.getElementById("div3").style.display = "block";
    document.getElementById("div4").style.display = "none";
    document.getElementById("div5").style.display = "none";
}

function setTab4() {
    document.getElementById("b" + currentTab).classList.remove("active");
    currentTab = 4;
    document.getElementById("b" + currentTab).classList.add("active");

    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").style.display = "none";
    document.getElementById("div3").style.display = "none";
    document.getElementById("div4").style.display = "block";
    document.getElementById("div5").style.display = "none";
}

function setTab5() {
    document.getElementById("b" + currentTab).classList.remove("active");
    currentTab = 5;
    document.getElementById("b" + currentTab).classList.add("active");

    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").style.display = "none";
    document.getElementById("div3").style.display = "none";
    document.getElementById("div4").style.display = "none";
    document.getElementById("div5").style.display = "block";
}