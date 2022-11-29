let playList = [
    {
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song: "BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song: "ENTER SANDMAN"
    }
];
let sectionContent = document.querySelector('.body__content');
console.log(sectionContent)
let ol = document.createElement('ol');
console.log(ol)
sectionContent.append(ol);
for (let i in playList) {
    let li = document.createElement('li');
    let paragraph = document.createElement('p');
    paragraph.append(playList[i].author);
    paragraph.append(' : ')
    paragraph.append(playList[i].song);
    li.append(paragraph);
    ol.append(li)
}
// 2
let btn = document.createElement('button'),
    p = document.createElement('p');
    p.textContent = "Open";
    btn.setAttribute("class", "content__btn");
btn.append(p)
sectionContent.append(btn);
let modalWindow;
btn.addEventListener("click", () => {
    let divModal = document.createElement("div");
    divModal.setAttribute("class", "content__modal");
    let divModalContent = document.createElement("div");
    divModalContent.setAttribute("class", "content__text");
    divModal.append(divModalContent);
    divModalContent.textContent = "This is text."

    let modalBtn = document.createElement("button");
    modalBtn.setAttribute("class", "content__btn");
    modalBtn.textContent = "Close";
    divModal.append(modalBtn);
    sectionContent.append(divModal);
    btn.disabled = true;
    modalBtn.addEventListener("click", () => {
        divModal.remove();
        btn.disabled = false;
    });
});
let lighthouse = document.querySelector('.body__lighthouse');
console.log(lighthouse);
let lighthouseRed = document.getElementById('red');
let lighthouseYellow = document.getElementById('yellow');
let lighthouseGreen = document.getElementById('green');
let lighthouseBtn = document.createElement('button');
lighthouseBtn.textContent = " Click ";
lighthouse.append(lighthouseBtn);

lighthouseBtn.addEventListener("click", function() {
        if (lighthouseRed.classList.contains("lighthouse__red")) {
            lighthouseRed.classList.remove("lighthouse__red");
            lighthouseYellow.classList.add("lighthouse__yellow");
          } else if (lighthouseYellow.classList.contains("lighthouse__yellow")) {
            lighthouseYellow.classList.remove("lighthouse__yellow");
            lighthouseGreen.classList.add("lighthouse__green");
          } else if (lighthouseGreen.classList.contains("lighthouse__green")) {
            lighthouseGreen.classList.remove("lighthouse__green");
            lighthouseRed.classList.add("lighthouse__red");
          }
        });

        // let lighthouseGreen = document.createElement('div');
// lighthouseGreen.setAttribute("class", "lighthouse__red");
// let lighthouseYellow = document.createElement('div');
// lighthouseYellow.setAttribute("class", "lighthouse");
// let lighthouseRed = document.createElement('div');
// lighthouseRed.setAttribute("class", "lighthouse__light");
// let lighthouseBtn = document.createElement('button');
// lighthouseBtn.textContent = " Click "
// lighthouseLight.append(lighthouseGreen);
// lighthouseLight.append(lighthouseRed);
// lighthouseLight.append(lighthouseYellow);
// lighthouseLight.append(lighthouseBtn)
// console.log(lighthouseLight);
// lighthouseBtn.addEventListener("click", function() {
//     if (lighthouseRed.classList.contains("lighthouse__red")) {
//        lighthouseRed.classList.remove("lighthouse__red");
//         lighthouseYellow.classList.add("lighthouse__yellow");
//       } else if (lighthouseYellow.classList.contains("lighthouse__yellow")) {
//         lighthouseYellow.classList.remove("lighthouse__yellow");
//        lighthouseGreen.classList.add("lighthouse__green");
//       } else if (lighthouseGreen.classList.contains("lighthouse__green")) {
//         lighthouseGreen.classList.remove("lighthouse__green");
//        lighthouseRed.classList.add("lighthouse__red");
//       }
// });
