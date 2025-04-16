let convert = (n) => {
    if (n < 1e3) {
        return n;
    }

    if (n >= 1e3 && n < 1e6) {
        return +(n / 1e3).toFixed(1) + "K";
    }

    if (n >= 1e6 && n < 1e9) {
        return +(n / 1e6).toFixed(1) + "M";
    }

    if (n >= 1e9 && n < 1e12) {
        return +(n / 1e9).toFixed(1) + "B";
    }

    if (n >= 1e12) {
        return +(n / 1e12).toFixed(1) + "T";
    }
}

let creatNewCard = (heading, lenght, time, views) => {
    let card = document.createElement("div");
    card.classList.add("box");
    card.insertAdjacentHTML("afterbegin", `<div class="image"><img src="hqdefault.avif" alt="img" /><p></p></div>`);
    card.querySelector("p").innerText = lenght;
    card.insertAdjacentHTML("beforeend", `<div class="details"><div class="heading"></div><div class="info"></div></div>`);
    card.querySelector(".heading").innerText = heading;
    card.querySelector(".info").innerText = `${"CodeWithHarry"} ${"•"} ${convert(views)} ${"views"} ${"•"} ${time} ${"year ago"}`;
    console.log(card);
    return card;
}


let head = "Welcome New Card";
let len = "10:50";
let tm = 3;
let vw = 10004514;

let container = [] ; 
for (let i = 0; i < 100; i++) {
    
    // document.querySelector(".container").append(creatNewCard(head,len,tm,vw));
    container[i] = creatNewCard(head,len,tm,vw);
}
for (const e of container) {
    
    document.querySelector(".container").append(e);
}
