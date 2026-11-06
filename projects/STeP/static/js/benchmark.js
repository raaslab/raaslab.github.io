// LIBERO-Constrained gallery: results table, category tabs and one video card per
// task. Everything is built from static/data/tasks.json, so the table and the
// videos always come from the same runs.
(function () {
  const CATEGORIES = [
    { key: "spatial", label: "Keep-out", group: "Spatial",
      desc: "A real object is placed beside the object to move or on its route. The robot must not move it more than 1 cm or tip it more than 10°, or must keep the carried object at least 8 cm away from it." },
    { key: "placement", label: "Placement", group: "Spatial",
      desc: "Where exactly the object goes: a metric offset such as “about 5 cm to the left of the centre of the plate”, or the side of the target nearer another object." },
    { key: "kinematic", label: "Upright", group: "Spatial",
      desc: "The carried object must stay within 5° of upright for as long as it is lifted." },
    { key: "logical", label: "Logical",
      desc: "Rules on what may happen: an order between two objects, a precondition that must hold first, or objects that must be left where they are." },
    { key: "temporal", label: "Temporal",
      desc: "Rules on timing: hold the object steady above the target for 2 s, wait at least 4 s between steps, or finish one stage before starting the next." },
    { key: "combined", label: "Combined",
      desc: "Several rules at once, from different families: a distance and an upright rule, plus a 2-second hold, or an obstacle together with an order or a wait." },
    { key: "unconstrained", label: "Plain LIBERO",
      desc: "The original LIBERO instruction in the same scenes, with no extra rule. These show that the extra rules do not cost basic task success." },
  ];

  const tabsEl = document.getElementById("bench-tabs");
  const descEl = document.getElementById("bench-desc");
  const filterEl = document.getElementById("bench-filter");
  const gridEl = document.getElementById("bench-grid");
  const tbody = document.querySelector("#results tbody");
  if (!tabsEl) return;

  const pct = (k, n) => (n ? Math.round((100 * k) / n) + "%" : "–");
  const safe = (t) => t.success && t.held === true;

  function stats(list) {
    return { n: list.length, task: list.filter((t) => t.success).length, safe: list.filter(safe).length };
  }

  function cell(k, n) {
    const td = document.createElement("td");
    td.className = "num";
    td.innerHTML = `${pct(k, n)}<span class="frac">${k}/${n}</span>`;
    return td;
  }

  function row(label, s, cls, onClick, showSafe = true) {
    const tr = document.createElement("tr");
    if (cls) tr.className = cls;
    const name = document.createElement("td");
    name.textContent = label;
    const n = document.createElement("td");
    n.className = "num";
    n.textContent = s.n;
    tr.append(name, n, cell(s.task, s.n));
    if (showSafe) tr.append(cell(s.safe, s.n));
    else { const td = document.createElement("td"); td.className = "num"; td.textContent = "–"; tr.append(td); }
    if (onClick) {
      tr.classList.add("click");
      tr.tabIndex = 0;
      tr.addEventListener("click", onClick);
      tr.addEventListener("keydown", (e) => { if (e.key === "Enter") onClick(); });
    }
    tbody.appendChild(tr);
  }

  function renderTable(tasks) {
    const by = (key) => tasks.filter((t) => t.family === key);
    const jump = (key) => () => { select(key); tabsEl.scrollIntoView({ behavior: "smooth", block: "start" }); };
    const spatialKeys = CATEGORIES.filter((c) => c.group === "Spatial").map((c) => c.key);
    row("Spatial", stats(tasks.filter((t) => spatialKeys.includes(t.family))), "group");
    CATEGORIES.filter((c) => c.group === "Spatial").forEach((c) => row(c.label, stats(by(c.key)), "sub", jump(c.key)));
    ["logical", "temporal", "combined"].forEach((k) => {
      const c = CATEGORIES.find((x) => x.key === k);
      row(c.label, stats(by(k)), "", jump(k));
    });
    row("Overall (with a rule)", stats(tasks.filter((t) => t.family !== "unconstrained")), "overall");
    row("Plain LIBERO (control)", stats(by("unconstrained")), "control", jump("unconstrained"), false);
  }

  // ---------------------------------------------------------------- cards
  const io = "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          const v = e.target;
          if (e.isIntersecting) { v.play().catch(() => {}); }
          else if (!v.paused) { v.pause(); }
        });
      }, { threshold: 0.6 })
    : null;
  const autoplay = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function pill(text, kind) {
    const s = document.createElement("span");
    s.className = `pill ${kind}`;
    s.textContent = text;
    return s;
  }

  function card(t) {
    const art = document.createElement("article");
    art.className = "card-run";

    const v = document.createElement("video");
    v.src = `static/videos/${t.slug}.mp4`;
    v.poster = `static/images/posters/${t.slug}.jpg`;
    v.muted = true;
    v.loop = true;
    v.playsInline = true;
    v.controls = true;
    v.preload = "none";
    v.setAttribute("aria-label", `STeP rollout: ${t.prompt}`);
    art.appendChild(v);
    if (io && autoplay) io.observe(v);

    const body = document.createElement("div");
    body.className = "card-body";

    const meta = document.createElement("div");
    meta.className = "card-meta";
    const kind = document.createElement("span");
    kind.className = "kind";
    kind.textContent = t.kind_label;
    meta.append(kind, t.success ? pill("Task done", "ok") : pill("Task failed", "no"));
    if (t.held === true) meta.append(pill("Rules kept", "ok"));
    else if (t.held === false) meta.append(pill("Rule broken", "no"));
    else meta.append(pill("No extra rule", "na"));

    const prompt = document.createElement("p");
    prompt.className = "prompt";
    prompt.textContent = t.prompt;

    body.append(meta, prompt);
    if (t.stl.length) {
      const ul = document.createElement("ul");
      ul.className = "stl";
      ul.setAttribute("aria-label", "STL specification");
      t.stl.forEach((line) => {
        const li = document.createElement("li");
        li.textContent = line;
        ul.appendChild(li);
      });
      body.appendChild(ul);
    }
    const id = document.createElement("span");
    id.className = "task-id";
    id.textContent = t.id;
    body.appendChild(id);

    art.appendChild(body);
    return art;
  }

  // ---------------------------------------------------------------- tabs
  let TASKS = [];
  let active = null;
  let kindFilter = "all";
  const tabButtons = {};

  function renderGrid() {
    if (io) io.disconnect();
    gridEl.querySelectorAll("video").forEach((v) => v.pause());
    const list = TASKS.filter((t) => t.family === active && (kindFilter === "all" || t.kind === kindFilter));
    gridEl.replaceChildren(...list.map(card));
  }

  function renderFilter() {
    filterEl.replaceChildren();
    const list = TASKS.filter((t) => t.family === active);
    const kinds = [...new Map(list.map((t) => [t.kind, t.kind_label])).entries()];
    if (kinds.length < 2) return;
    const make = (key, label, n) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "chip-btn";
      b.textContent = `${label} (${n})`;
      b.setAttribute("aria-pressed", String(kindFilter === key));
      b.addEventListener("click", () => {
        kindFilter = key;
        filterEl.querySelectorAll(".chip-btn").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
        renderGrid();
      });
      filterEl.appendChild(b);
    };
    make("all", "All", list.length);
    kinds.forEach(([k, label]) => make(k, label, list.filter((t) => t.kind === k).length));
  }

  function select(key) {
    active = key;
    kindFilter = "all";
    Object.entries(tabButtons).forEach(([k, b]) => b.setAttribute("aria-selected", String(k === key)));
    const c = CATEGORIES.find((x) => x.key === key);
    descEl.textContent = c.desc;
    renderFilter();
    renderGrid();
  }

  function renderTabs() {
    CATEGORIES.forEach((c) => {
      const n = TASKS.filter((t) => t.family === c.key).length;
      if (!n) return;
      const b = document.createElement("button");
      b.type = "button";
      b.className = "bench-tab";
      b.setAttribute("role", "tab");
      b.innerHTML = `<span></span><span class="count">${n}</span>`;
      b.firstChild.textContent = c.label;
      b.addEventListener("click", () => select(c.key));
      tabsEl.appendChild(b);
      tabButtons[c.key] = b;
    });
  }

  fetch("static/data/tasks.json")
    .then((r) => r.json())
    .then((tasks) => {
      TASKS = tasks;
      renderTable(tasks);
      renderTabs();
      select(CATEGORIES[0].key);
    })
    .catch(() => {
      gridEl.innerHTML = '<p class="has-text-centered">The task list could not be loaded.</p>';
    });
})();
