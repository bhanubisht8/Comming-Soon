

setInterval(myTimer, 1000);

function myTimer() {
    
    const date = new Date();
    const cud = date.getTime();
    console.log(cud);
    
    
    const lastDate = new Date("Aug 21, 2022 00:00:00");
    const ld = lastDate.getTime();
    
    let diff = ld - cud;
    
    let myDt = Math.floor(diff/(24*60*60*1000));
    let myHr = Math.floor((diff % (24*60*60*1000)) / (60*60*1000));
    let myMin = Math.floor((diff % (60*60*1000)) / (60*1000));
    let myMsc = Math.floor((diff % (60*1000)) / 1000);

    let D = myDt < 10 ? "0" + myDt : myDt;
    let H = myHr < 10 ? "0" + myHr : myHr;
    let M = myMin < 10 ? "0" + myMin : myMin;
    let S = myMsc < 10 ? "0" + myMsc : myMsc;

    
    document.getElementById("day").innerHTML = D + " Days";
    document.getElementById("hr").innerHTML = H + " Hours" ;
    document.getElementById("min").innerHTML = M + " Min";
    document.getElementById("sec").innerHTML = S + " Sec";
}


