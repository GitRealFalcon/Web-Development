// const container = document.querySelector(".terminal");
// console.log(container);

const randomDelay = () => {
    return new Promise((resolve, reject) => {
        timeout = 1 + 6 * Math.random();
        setTimeout(() => {
            resolve();
        }, timeout * 1000)
    })
}
const adddItem = async (item) => {
    await randomDelay();
    let div = document.createElement("div");
    div.innerHTML = item;
    div.style.margin = "10px";
    document.querySelector(".terminal").append(div);
}

async function main() {

   let t = setInterval(() => {
        let last = document.querySelector(".terminal").lastElementChild;
        if (last.innerHTML.endsWith("...")) {
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3)
        } else {

            last.innerHTML = last.innerHTML + ".";
        }
    }, 500)

    let text = ["~$ Initializing Hacking", "~$ Reading your Files", "~$ Password files Detected", "~$ Sending all Passwords and personal files to server", "~$ Cleaning up"];

    for (const item of text) {
        // let last1 = document.querySelector(".terminal").lastElementChild;
        await adddItem(item);
        // if (last1.innerHTML.endsWith("...")) {
        //     last1.innerHTML = last1.innerHTML.slice(0, last1.innerHTML.length - 3)
        // }
    }

    await randomDelay();
    clearInterval(t);
}

main();


