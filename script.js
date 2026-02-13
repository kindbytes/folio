const owner = "kindbytes";
const repo = "folio";
const perPage = 2; // quantos itens na timeline

async function loadGithubCommitsTimeline() {
    const timeline = document.getElementById("timeline");
    if (!timeline) return;

    const url = `https://api.github.com/repos/${owner}/${repo}/commits?per_page=${perPage}`;

    const res = await fetch(url);
    const commits = await res.json();

    // se der erro (ex: rate limit), mostra uma mensagem simples
    if (!Array.isArray(commits)) {
        timeline.innerHTML = `<p class="timeline-error">Could not load updates.</p>`;
        return;
    }

    timeline.innerHTML = "";

    commits.forEach(commitItem => {
        const isoDate = commitItem.commit.author.date;
        const date = new Date(isoDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit"
        });

        // pega só a primeira linha da mensagem do commit
        const message = commitItem.commit.message.split("\n")[0];

        const safeMessage = escapeHtml(message);

        timeline.insertAdjacentHTML("beforeend", `
      <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <span class="timeline-date">${date}</span>
          <p class="timeline-description">${safeMessage}</p>
        </div>
      </div>
    `);
    });
}

// protege contra caracteres especiais na mensagem
function escapeHtml(str) {
    return str
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

loadGithubCommitsTimeline();
