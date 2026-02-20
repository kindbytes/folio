import { owner, repo } from "./github-config.js";


fetch(`https://api.github.com/repos/${owner}/${repo}/languages`)
  .then(r => r.json())
  .then(data => {
    const total = Object.values(data).reduce((a, b) => a + b, 0);

    const bar = document.getElementById("langBar");
    const list = document.getElementById("langList");

    for (const lang in data) {
      const pct = data[lang] / total * 100;
      const cls = "lang-" + lang.toLowerCase();

      // --- barra ---
      const span = document.createElement("span");
      span.style.width = pct.toFixed(2) + "%";
      span.className = cls;
      bar.appendChild(span);

      // --- linha com bolinha + texto ---
      const row = document.createElement("div");
      row.className = "lang-row";

      const left = document.createElement("div");
      left.className = "lang-left";

      const dot = document.createElement("span");
      dot.className = "dot " + cls;

      const name = document.createElement("span");
      name.textContent = lang;

      left.appendChild(dot);
      left.appendChild(name);

      const percent = document.createElement("span");
      percent.textContent = pct.toFixed(1) + "%";

      row.appendChild(left);
      row.appendChild(percent);
      list.appendChild(row);
    }
  });
