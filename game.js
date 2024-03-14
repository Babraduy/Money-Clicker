if (localStorage.getItem("money")) var money = parseInt(localStorage.getItem("money"));
else var money = 0;

// mps - money per second
if (localStorage.getItem("mps")) var mps = parseInt(localStorage.getItem("mps"));
else var mps = 0;

if (localStorage.getItem("mps_price")) var mps_price = parseInt(localStorage.getItem("mps_price"));
else var mps_price = 10;

// mpc - money per click
if (localStorage.getItem("mpc")) var mpc = parseInt(localStorage.getItem("mpc"));
else var mpc = 0;

if (localStorage.getItem("mpc_price")) var mpc_price = parseInt(localStorage.getItem("mpc_price"));
else var mpc_price = 10;

function reset_progress() {
    localStorage.clear();
    money = 0;
    mps = 0;
    mpc = 1;
    mps_price = 10;
    mpc_price = 10;
}

setInterval(() => {
    money+=mps;
    document.getElementById("money").innerHTML = money;
    document.getElementById("mps_price").innerHTML = mps_price;
    document.getElementById("mpc_price").innerHTML = mpc_price;
    document.getElementById("mps").innerHTML = mps;
    document.getElementById("mpc").innerHTML = mpc;

    // save
    localStorage.setItem('money', money);
    localStorage.setItem('mpc', mpc);
    localStorage.setItem('mps', mps);
    localStorage.setItem('mpc_price', mpc_price);
    localStorage.setItem('mps_price', mps_price);
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