import { createElementBy, MesTaches } from "./api.js";
export const storage = sessionStorage;
document.addEventListener("DOMContentLoaded", function () {
  let cpt = 0;
  const tad = document.querySelectorAll(".bout");
  if (tad) {
    tad.forEach((bouton) => {
      bouton.addEventListener("focus", function (e) {
        e.currentTarget.style.outline = "none";
      });
      bouton.addEventListener("click", function (e) {
        e.preventDefault();
        const active = document.querySelector(".active");
        active.classList.remove("active");
        e.currentTarget.classList.add("active");
        if (e.currentTarget.id == "btn-t") {
          const tableau = document.querySelectorAll("#tache-content table tr");
          tableau.forEach((e) => {
            e.style.display = "block";
          });
        } else if (e.currentTarget.id == "btn-f") {
          const tableau = document.querySelectorAll(
            "#tache-content table tr input"
          );
          tableau.forEach((e) => {
            if (e.checked === false) {
              const tr = document.querySelector("#line" + e.getAttribute("id"));
              tr.style.display = "none";
            } else {
              const tr = document.querySelector("#line" + e.getAttribute("id"));
              tr.style.display = "block";
            }
          });
        } else if (e.currentTarget.id == "btn-a") {
          const tableau = document.querySelectorAll(
            "#tache-content table tr input"
          );
          tableau.forEach((e) => {
            if (e.checked) {
              const tr = document.querySelector("#line" + e.getAttribute("id"));
              tr.style.display = "none";
            } else {
              const tr = document.querySelector("#line" + e.getAttribute("id"));
              tr.style.display = "block";
            }
          });
        }
      });
    });
  }
  const input = document.querySelector("#text");
  input.addEventListener("focus", function (e) {
    // e.currentTarget.style.outline='none'
  });
  const taches = document.querySelector("#tache-content table");
  const submit = document.querySelector("#submit");
  if (submit) {
    submit.addEventListener("focus", function (e) {
      e.currentTarget.style.outline = "none";
    });
    submit.addEventListener("click", (e) => {
      e.preventDefault();
      if (input.value) {
        const tr = createElementBy("tr", {
          id: `line${cpt}`,
        });
        const td = createElementBy("td");
        const div = createElementBy("div");
        const check = createElementBy("input", {
          type: "checkbox",
          id: `${cpt}`,
        });
        const label = createElementBy("label");
        const div1 = createElementBy("div");
        const bouton1 = createElementBy("button", {
          class: "image1",
          onclick: `modifieed(${cpt})`,
        });
        const bouton0 = createElementBy("button", {
          class: "image",
          onclick: `deleteed(${cpt})`,
        });
        bouton0.innerText = "0";
        bouton1.innerText = "0";
        label.innerText = input.value.trim();
        div.append(check);
        div.append(label);
        div1.append(bouton1);
        div1.append(bouton0);
        td.append(div);
        td.append(div1);
        tr.append(td);
        taches.prepend(tr);
        input.value = "";
        function onUpdate() {
          storage.setItem("tache", `${taches.outerHTML}`);
        }
        if (check.checked) {
          check.setAttribute("checked");
          onUpdate();
        } else {
          onUpdate();
        }
        bouton1.addEventListener("click", (e) => {
          e.currentTarget.style.outline = "none";
        });
        bouton0.addEventListener("click", (e) => {
          e.currentTarget.style.outline = "none";
        });
        cpt++;
      }
    });
  }
  const onStorage = storage.getItem("tache")?.toString();
  taches.innerHTML = "";
  if (onStorage) {
    let parse = new DOMParser();
    let doc = parse.parseFromString(onStorage, "text/html");
    let td1 = createElementBy("td");
    td1 = doc.body.innerHTML;
    taches.innerHTML = td1;
  }
});
