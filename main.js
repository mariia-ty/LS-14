/*
const loadBtn = document.getElementById("loadData");
const resultsList = document.getElementById("result");

loadBtn.addEventListener("click", () => {
  const p1 = Promise.resolve("data 1");
  const p2 = Promise.resolve("data 2");
  const p3 = Promise.resolve("data 3");

  Promise.all([p1, p2, p3]).then((results) => {
    results.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      resultsList.appendChild(li);
    });
  });
});
*/
//race
/*
const raceBtn = document.getElementById("raceBtn");
const winner = document.getElementById("winner");

raceBtn.addEventListener("click", () => {
  const fast = new Promise((res) => {
    setTimeout(() => res("fast"), 1000);
  });
  const slow = new Promise((res) => {
    setTimeout(() => res("slow"), 3000);
  });
    
    Promise.race([fast, slow]).then(result => { winner.textContent = result; })
});
*/

//resolve
/*
const btn = document.getElementById("result");
const txt = document.getElementById("txt");

btn.addEventListener("click", () => {
    Promise.resolve("done").then(result => {
        txt.textContent = result; 
    })
})
    */

//error
/*
const errorBtn = document.getElementById("btn");
const txt = document.getElementById("txt");

errorBtn.addEventListener("click", () => {
  Promise.reject("error").catch((error) => {
    txt.textContent = error;
  });
});
*/

//test to see which shows up first
/*
console.log("start");
setTimeout(() => console.log("Time out"), 0);
Promise.resolve().then(() => console.log("promise"));
console.log("end");
*/

const fetchData = document.getElementById("btn");
const txt = document.getElementById("txt");

fetchData.addEventListener("click", () => {
  const resource = Promise.resolve("first");
  const resource2 = Promise.resolve("second");
  const resource3 = Promise.resolve("third");

  Promise.all([resource, resource2, resource3])
    .then((resources) => {
      resources.forEach((resource) => {
        const li = document.createElement("li");
        li.textContent = resource;
        txt.appendChild(li);
      });
    })
    .catch((error) => console.error("error"));
});
