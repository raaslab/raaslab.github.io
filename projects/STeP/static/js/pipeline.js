// Interactive pipeline figure: six stages over the paper's Figure 2.
// Each stage spotlights its boxes on the figure and runs a packet along the
// arrows it uses. Coordinates are in the image's own pixels (2179 x 721).
(function () {
  const STAGES = [
    {
      title: "Instruction and observation",
      text: "The robot receives a natural-language instruction and the current camera image. The instruction can carry spatial, temporal and logical requirements, not just a goal.",
      boxes: [[46, 122, 822, 78], [48, 208, 192, 210]],
      paths: ["M275 200 V325 H318", "M238 325 H318"],
    },
    {
      title: "System 2 writes one STL formula",
      text: "A vision-language model (System 2) turns the instruction into a single task-level Signal Temporal Logic formula φ, built only from the predicates and executors in the skills library.",
      boxes: [[292, 205, 578, 335], [46, 428, 244, 172]],
      paths: ["M440 325 H500", "M290 500 H378 V398"],
    },
    {
      title: "Decompose into subtask specs",
      text: "SLICE splits φ into one STL specification per executor (open, pick, place). Timing that depends on an event, such as “10–15 s after the drawer opens”, is kept with a symbolic time t₀.",
      boxes: [[588, 436, 252, 94], [972, 96, 472, 462]],
      paths: ["M712 414 V438", "M838 482 H885 V335 H935"],
    },
    {
      title: "System 1 executes each subtask",
      text: "System 1 samples grasp poses with Contact-GraspNet, plans a collision-free path with RRT, and tracks it with model-predictive control. The MPC cost includes the subtask's STL robustness, so spatial rules shape the motion itself.",
      boxes: [[1492, 206, 478, 352], [1984, 284, 168, 178]],
      paths: ["M1442 197 H1466 V252 H1496", "M1680 270 H1712", "M1830 305 V350", "M1944 390 H1990"],
    },
    {
      title: "Monitor robustness online",
      text: "The STL monitor computes the robustness ρ of the active specification at every step. ρ ≥ 0 means the rule holds, with ρ as the margin. When a subtask's spec is met, execution moves on to the next one.",
      boxes: [[1716, 468, 226, 70]],
      paths: ["M1830 470 V424", "M1720 487 H1468 V352 H1442"],
    },
    {
      title: "Recall System 2 on failure",
      text: "If a subtask fails, the violated requirement, the time it failed and its robustness margin go back to System 2, together with memory of what has run so far. System 2 replans without discarding the original specification.",
      boxes: [[292, 205, 578, 335], [306, 545, 152, 60], [1716, 468, 226, 70]],
      paths: ["M1832 538 V572 H582 V542", "M1893 556 V626 H25 V310 H48"],
    },
  ];

  const SVG = "http://www.w3.org/2000/svg";
  const root = document.getElementById("pipeline");
  if (!root) return;
  const holes = document.getElementById("spot-holes");
  const rings = document.getElementById("rings");
  const flows = document.getElementById("flows");
  const hits = document.getElementById("hits");
  const stepsEl = document.getElementById("pipeline-steps");
  const caption = document.getElementById("pipeline-caption");
  const playBtn = document.getElementById("pipeline-play");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const debug = new URLSearchParams(location.search).has("debug");

  function el(name, attrs, parent) {
    const node = document.createElementNS(SVG, name);
    for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, v);
    if (parent) parent.appendChild(node);
    return node;
  }

  function rect([x, y, w, h], cls, parent) {
    return el("rect", { x, y, width: w, height: h, rx: 18, class: cls }, parent);
  }

  // Stage buttons
  const buttons = STAGES.map((s, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "step-btn";
    b.setAttribute("role", "tab");
    b.setAttribute("aria-selected", "false");
    b.innerHTML = `<span class="n">${i + 1}</span><span>${s.title}</span>`;
    b.addEventListener("click", () => { stopPlay(); show(i); });
    stepsEl.appendChild(b);
    return b;
  });

  // Click targets on the figure: the first box of each stage, later stages on top.
  STAGES.forEach((s, i) => {
    s.boxes.forEach((box) => {
      const r = rect(box, "hit", hits);
      r.addEventListener("click", () => { stopPlay(); show(i); });
    });
  });

  let current = -1;

  function clear() {
    holes.replaceChildren();
    rings.replaceChildren();
    flows.replaceChildren();
  }

  function show(i) {
    current = i;
    clear();
    const s = STAGES[i];
    root.classList.add("has-stage");
    s.boxes.forEach((box) => {
      rect(box, "", holes).setAttribute("fill", "black");
      rect(box, "ring", rings);
    });
    s.paths.forEach((d) => {
      el("path", { d, class: "flow" }, flows);
      if (!reduceMotion) {
        const dot = el("circle", { r: 12, class: "packet" }, flows);
        el("animateMotion", { dur: "1.6s", repeatCount: "indefinite", path: d }, dot);
      }
    });
    buttons.forEach((b, j) => b.setAttribute("aria-selected", String(j === i)));
    caption.innerHTML = `<h3>${i + 1}. ${s.title}</h3><p>${s.text}</p>`;
  }

  function idle() {
    caption.innerHTML = `<h3>STeP in six steps</h3><p class="hint">Press Play to walk through the pipeline, or pick a step. Orange marks the active part of the figure; the moving dots follow its arrows.</p>`;
  }

  // Autoplay
  let timer = null;
  function startPlay() {
    if (timer) return;
    playBtn.textContent = "Pause";
    playBtn.setAttribute("aria-pressed", "true");
    show((current + 1) % STAGES.length);
    timer = setInterval(() => show((current + 1) % STAGES.length), 5500);
  }
  function stopPlay() {
    if (!timer) return;
    clearInterval(timer);
    timer = null;
    playBtn.textContent = "Play";
    playBtn.setAttribute("aria-pressed", "false");
  }
  playBtn.addEventListener("click", () => (timer ? stopPlay() : startPlay()));

  if (debug) {
    root.classList.add("has-stage");
    STAGES.forEach((s) => {
      s.boxes.forEach((box) => { rect(box, "", holes).setAttribute("fill", "black"); rect(box, "ring", rings); });
      s.paths.forEach((d) => el("path", { d, class: "flow" }, flows));
    });
    caption.textContent = "debug: every stage drawn";
    return;
  }

  idle();
  // Start walking through once the figure is on screen, unless motion is reduced.
  if (!reduceMotion && "IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        io.disconnect();
        startPlay();
      }
    }, { threshold: 0.5 });
    io.observe(root.querySelector(".pipeline-figure"));
  }
})();
