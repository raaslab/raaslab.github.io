document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("nav-project-title").textContent = "VARP";
  document.getElementById("head-title").textContent = "VARP";
  document.getElementById("head-subtitle").textContent = "Reinforcement Learning from VLM Feedback with Agent Regularized Preferences";

  // Video
  document.getElementById("video").innerHTML = `
    <video class="embed-responsive-item" controls>
      <source src="assets/varp_video.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  `;

  // Abstract
  document.getElementById("abstract-text").innerHTML = `
    <div class="col-sm">
      <h2 class="text-center">Abstract</h2>
      <p>
        Designing reward functions for robotics often leads to subtle misalignments or reward hacking. 
        We propose VARP — a method that uses 2D trajectory sketches and agent-aware regularization 
        to generate more accurate preferences from Vision-Language Models. Our approach leads to 
        robust and scalable policy learning across manipulation and locomotion tasks.
      </p>
    </div>
  `;

  // Task GIFs
  document.getElementById("overview").innerHTML = `
    <div class="col-sm">
      <h2 class="text-center">Task Visualizations</h2>
      <div class="row text-center">
        <div class="col-sm"><img src="assets/gifs/drawer_open.gif" class="img-fluid"><p>Drawer Open</p></div>
        <div class="col-sm"><img src="assets/gifs/soccer.gif" class="img-fluid"><p>Soccer</p></div>
        <div class="col-sm"><img src="assets/gifs/sweep_into.gif" class="img-fluid"><p>Sweep Into</p></div>
      </div>
    </div>
  `;

  // Links
  document.getElementById("links-area").innerHTML = `
    <div class="col-sm text-center">
      <a href="assets/prompt_template.txt" class="btn btn-outline-primary m-2">Prompt Template</a>
      <a href="https://arxiv.org/abs/2503.13817" class="btn btn-outline-secondary m-2">Paper (arXiv)</a>
      <a href="https://raaslab.org/projects/VARP/" class="btn btn-outline-success m-2">RAAS Lab Project Page</a>
    </div>
  `;
});
