if (localStorage.getItem("money") !== null) var money = JSON.parse(localStorage.getItem("money"));
else var money = 0; 

// mps - money per second
if (localStorage.getItem("mps") !== null) var mps = JSON.parse(localStorage.getItem("mps"));
else var mps = 0;

if (localStorage.getItem("mps_price") !== null) var mps_price = JSON.parse(localStorage.getItem("mps_price"));
else var mps_price = 10;

// mpc - money per click
if (localStorage.getItem("mpc") !== null) var mpc = JSON.parse(localStorage.getItem("mpc"));
else var mpc = 1;

if (localStorage.getItem("mpc_price") !== null) var mpc_price = JSON.parse(localStorage.getItem("mpc_price"));
else var mpc_price = 10;

document.getElementById("money").innerHTML = money;
document.getElementById("mps_price").innerHTML = mps_price;
document.getElementById("mpc_price").innerHTML = mpc_price;
document.getElementById("mps").innerHTML = mps;
document.getElementById("mpc").innerHTML = mpc;

function reset_progress() {
    money = 0;
    mps = 0;
    mpc = 1;
    mps_price = 10;
    mpc_price = 10;
    document.getElementById("money").innerHTML = money;
    document.getElementById("mps_price").innerHTML = mps_price;
    document.getElementById("mpc_price").innerHTML = mpc_price;
    document.getElementById("mps").innerHTML = mps;
    document.getElementById("mpc").innerHTML = mpc;
}

setInterval(() => {
    money+=mps;
    document.getElementById("money").innerHTML = money;

    // save
    localStorage.setItem('money', JSON.stringify(money));
    localStorage.setItem('mpc', JSON.stringify(mpc));
    localStorage.setItem('mps', JSON.stringify(mps));
    localStorage.setItem('mpc_price', JSON.stringify(mpc_price));
    localStorage.setItem('mps_price', JSON.stringify(mps_price));
}, 1000)

function add_money() {
    money+=mpc;
    document.getElementById("money").innerHTML = money;
}

function show(name) {
    document.getElementById("shop").style.display = "none";
    document.getElementById("game").style.display = "none";
    document.getElementById("settings").style.display = "none";
    document.getElementById(name).style.display = "block";
}

function buy(name) {
    if (name == "mps" && money >= mps_price) {
        money -= mps_price;
        document.getElementById("money").innerHTML = money;

        mps++;
        mps_price *= 2;
        document.getElementById("mps_price").innerHTML = mps_price;
        document.getElementById("mps").innerHTML = mps;
    }
    if (name == "mpc" && money >= mpc_price) {
        money -= mpc_price;
        document.getElementById("money").innerHTML = money;

        mpc++;
        mpc_price *= 3;
        document.getElementById("mpc_price").innerHTML = mpc_price;
        document.getElementById("mpc").innerHTML = mpc;
    }
}

function color_scheme(name) {
    if (name == "dark") {
    for (var i=0; i<document.getElementsByTagName("html").length; i++) {
        document.getElementsByTagName("html")[i].style.backgroundColor = '#505f5f';
    }
    for (var i=0; i<document.getElementsByTagName("body").length; i++) {
        document.getElementsByTagName("body")[i].style.backgroundColor = '#505f5f';
    }
    for (var i=0; i<document.getElementsByTagName("a").length; i++) {
        document.getElementsByTagName("a")[i].style.textShadow = '0px 0px 5px white';
    }
    
for (var i=0; i<document.getElementsByTagName("p").length; i++) {
        document.getElementsByTagName("p")[i].style.textShadow = '0px 0px 2px white';
    }
    document.getElementById("container").style.backgroundColor = 'rgb(90, 105, 105)';
}
}