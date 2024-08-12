// ===== START CUSTOM DATA =====
const DATA = {
    STYLE: {
        NB_MAX_CONTRIBUTORS_PER_LINE: 3, // Integer in [1, 2, 3, 4, 6]
        CONTRIBUTOR_IMAGE_SIZE: "180px",
        FOOTER_LOGO_SIZE: "240px",
    },
    HEAD: {
        FAVICON_SRC: "img/logo_dummy.png",
        PROJECT_TITLE: "NAVINACT",
        PROJECT_SUBTITLE: {
                    "name": "Amisha Bhaskar, Zahiruddin Mahammad, Sachin R Jadhav, and Pratap Tokekar",
                    "url": "https://raaslab.org/index.html#people",
                },
        AUTHOR_NAME: "Amisha Bhaskar",
        TOP_LINKS: [
        { "title": "Paper", "url": "http://arxiv.org/abs/2408.04054", "icon": "img/paper_copy.svg.svg" },
        { "title": "Video", "url": "https://youtu.be/fK6TFrmz8mM", "icon": "img/video.png" },
        { "title": "Dataset", "url": "https://drive.google.com/drive/folders/1UydyI89VvBrUHPD4DNie2l5ABjhRFAIG?usp=sharing", "icon": "img/gd.svg" },
        { "title": "Code", "url": "your_code_repository_link_here", "icon": "img/GitHub-Mark-Light-32px.png.svg" },
    ],
        VIDEO_SRC: "video/IROS_2024_LAVAgithub.mp4",
    },
    ABSTRACT: {
        TEXT: [
            "Reinforcement Learning (RL) has shown remarkable progress in simulation environments, yet its application to real-world robotic tasks remains limited due to challenges in exploration and generalization. To address these issues, we introduce NAVINACT, a framework that chooses when the robot should use classical motion planning based navigation and when it should learn a policy. To further improve the efficiency in exploration, we use imitation data to bootstrap the exploration. NAVINACT dynamically switches between two modes of operation: navigating to a waypoint using classical techniques when away from the objects and reinforcement learning for fine-grained manipulation control when about to interact with objects. NAVINACT consists of a multi-head architecture composed of ModeNet for mode classification, NavNet for waypoint prediction, and InteractNet for precise manipulation. By combining the strengths of RL and Imitation Learning (IL), NAVINACT improves sample efficiency and mitigates distribution shift, ensuring robust task execution. We evaluate our approach across multiple challenging simulation environments and real-world tasks, demonstrating superior performance in terms of adaptability, efficiency, and generalization compared to existing methods.In both simulated and real-world settings, NAVINACT demonstrates robust performance. In simulations, NAVINACT surpasses baseline methods by 10-15% in training success rates at 30k samples and by 30-40% during evaluation phases. In real-world scenarios, it demonstrates a 30-40% higher success rate on simpler tasks compared to baselines and uniquely succeeds in complex, two-stage manipulation tasks.",
        ],
        OVERVIEW: {
            "src": "img/architecture.png",
            "legend": "Multi-headed architecture of NAVINACT: During training, NAVINACT learns to predict waypoints, low-level actions, and the operational mode at each time step. One network (InteractNet) predicts the low-level action \\( a_t \\) and the other network (ModeNet) predicts mode \\( m_t \\). A separate network (NavNet) predicts the high-level waypoint \\( w_t \\). At test time, the system samples \\( m_t \\) and either navigates to a waypoint (when \\( m_t = 0 \\)) using the predicted waypoint or follows a dense action (when \\( m_t = 1 \\)). The architecture allows for dynamic switching between navigation and interaction modes, facilitating seamless transitions and robust performance in complex tasks. An example of how navigation and interaction modes are integrated during execution is shown on the right."
        }
    },
    CONTENT: [        
        {
            "name": "ModeNet",
            "html": `
            <div class="row">
                <div class="col-md-6">
                    <h3>ModeNet: Dynamic Mode Classification</h3>
                    <ul>
                        <li><strong>Decision-Making:</strong> Identifies when to switch between navigation and interaction modes based on input observations.</li>
                        <li><strong>Adaptability:</strong> Enables the system to dynamically adapt its strategy, ensuring efficient task execution.</li>
                    </ul>
                    <img src="img/modes.png" class="img-fluid" alt="ModeNet Image">

                </div>
                <div class="col-md-6">
                    <img src="img/mode_network.png" class="img-fluid" alt="ModeNet Image">
                </div>
            </div>
            `
        },
        {
            "name": "NavNet",
            "html": `
            <div class="row">
                    <div class="col-md-6">
                        <img src="img/nav_network.png" class="img-fluid" alt="NavNet Image">
                    </div>
                    <div class="col-md-6">
                        <h3 class="text-center mb-4">NavNet: Strategic Waypoint Planning</h3>
                        <h4 class="mt-2 text-center">Waypoint Prediction</h4>
                        <ul>
                            <li><strong>Target Identification:</strong> Predicts strategic waypoints that guide the robot towards its goal.</li>
                            <li><strong>Trajectory Optimization:</strong> Ensures efficient and effective navigation to the target, reducing the learning burden on RL.</li>
                        </ul>
                        <img src="img/navnet_demo.png" class="img-fluid" alt="NavNet Image">
                    </div>
            </div>
            `
        },
        {
            "name": "InteractNet",
            "html": `
            <div class="row">
                <div class="col-md-6">
                    <h3>InteractNet: Precise Manipulation</h3>
                    <ul>
                        <li><strong>Execution:</strong> Executes fine-grained manipulation tasks with precision, guided by learned RL policies.</li>
                        <li><strong>Adaptation:</strong> Learns from demonstrations and adjusts movements in real-time for efficient task completion.</li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <video class="img-fluid" controls>
                        <source src="video/interactnet_demo.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            `
        },
        {
            "name": "Simulation Results",
            "html": `
            <div class="row">
                <div class="col-md-4 mb-3">
                    <img src="img/assembly_env_render.png" class="img-fluid" alt="Assembly Environment">
                </div>
                <div class="col-md-4 mb-3">
                    <img src="img/boxclose_env_render.png" class="img-fluid" alt="BoxClose Environment">
                </div>
                <div class="col-md-4 mb-3">
                    <img src="img/coffeepush_env_render.png" class="img-fluid" alt="CoffeePush Environment">
                </div>
                <div class="col-md-4 mb-3">
                    <img src="img/assembly_train_rand.png" class="img-fluid" alt="Assembly Environment">
                </div>
                <div class="col-md-4 mb-3">
                    <img src="img/boxclose_train_rand.png" class="img-fluid" alt="BoxClose Environment">
                </div>
                <div class="col-md-4 mb-3">
                    <img src="img/coffeepush_train_rand.png" class="img-fluid" alt="CoffeePush Environment">
                </div>
                <div class="col-md-4 mb-3">
                    <img src="img/assembly_eval.png" class="img-fluid" alt="Assembly Environment">
                </div>
                <div class="col-md-4 mb-3">
                    <img src="img/boxclose_eval.png" class="img-fluid" alt="BoxClose Environment">
                </div>
                <div class="col-md-4 mb-3">
                    <img src="img/coffeepush_eval.png" class="img-fluid" alt="CoffeePush Environment">
                </div>
                <div class="col-md-4 mb-3">
                    <img src="img/assembly_eval_rand.png" class="img-fluid" alt="Assembly Environment">
                </div>
                <div class="col-md-4 mb-3">
                    <img src="img/boxclose_eval_rand.png" class="img-fluid" alt="BoxClose Environment">
                </div>
                <div class="col-md-4 mb-3">
                    <img src="img/coffeepush_eval_rand.png" class="img-fluid" alt="CoffeePush Environment">
                </div>
            </div>
            <div class="row justify-content-center mb-3">
            <div class="col-md-6">
                    <img src="img/mw_legend.png" class="img-fluid" alt="Graph Legend">
                </div>
            </div>
   
        </div>
            `
        },
        {
        // "name": "Zero-Shot Generalization",
        "name": "Real-World Experiments",
        "html": `
        <div class="row">
            <div class="col-12 mb-4">
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-6 mb-4 d-flex flex-column align-items-center">
                    <video class="img-fluid" controls>
                        <source src="video/lift_training_4x.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    <p class="text-center" style="width: 80%; font-size: 1.5rem;">Training Video (4x) :  Lift</p>
                </div> 
            <div class="col-md-6 mb-4 d-flex flex-column align-items-center">
                    <h5>NAVINACT: Lift Env Training</h5>
                    <p class="text-center" style="width: 80%;">
                    This setup uses only wrist-camera for BC policy training and prediction.
                    For predicting waypoint through NavNet, we use both the wrist and environment cameras.
                    <p> Total Training Time: 40 minutes </p>
                    </p>
                </div> 


            <div class="col-md-6 mb-4 d-flex flex-column align-items-center">
                <img src="img/lift_demo.gif" class="img-fluid" alt="Lift data collect">
                <p class="text-center" style="width: 80%;">Data Collection using Teleoperation: Lift [No Randomization]</p>
            </div>  
            <div class="col-md-6 mb-4 d-flex flex-column align-items-center">
                    <img src="img/lift_no_rand_smooth.png" class="img-fluid" alt="Zero-Shot Generalization with Fruit">
                    <p class="text-center" style="width: 80%;"></p>
                </div> 

            <div class="col-md-6 mb-4 d-flex flex-column align-items-center" style="border-bottom: 2px solid #ddd; padding-bottom: 20px; margin-bottom: 5px;">
            </div>  
            <div class="col-md-6 mb-4 d-flex flex-column align-items-center" style="border-bottom: 2px solid #ddd; padding-bottom: 20px; margin-bottom: 5px;">
                <div class="col-md-6">
                    <img src="img/hw_legend.png" class="img-fluid" alt="Graph Legend">
                </div>
            </div>  



            <div class="col-md-6 mb-4 d-flex flex-column align-items-center">
                    <video class="img-fluid" controls>
                        <source src="video/pick_place_4x.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    <p class="text-center" style="width: 80%; font-size: 1.5rem;">Training Video (4x) :  Pick and Place</p>
                </div> 
            <div class="col-md-6 mb-4 d-flex flex-column align-items-center">
                    <h5>NAVINACT: Pick and Place Env Training</h5>
                    <p class="text-center" style="width: 80%;">
                    This setup uses both wrist-camera and environment camera for BC policy training and prediction.
                    Similarly, both the wrist and environment cameras are used for predicting waypoint through NavNet.
                    <p> Total Training Time: 3 hours 21 minutes </p>
                    </p>
                </div> 




            <div class="col-md-6 mb-4 d-flex flex-column align-items-center">
                    <img src="img/datacollect_2s.gif" class="img-fluid" alt="Pick Place data collect">
                    <p class="text-center" style="width: 80%;">Data Collection using Teleoperation: Pick and Place</p>
                </div>
            <div class="col-md-6 mb-4 d-flex flex-column align-items-center">
                    <img src="img/2s_smooth.png" class="img-fluid" alt="Zero-Shot Generalization with Fruit">
                    <p class="text-center" style="width: 80%;"></p>
                </div> 

            
            <div class="col-md-6 mb-4 d-flex flex-column align-items-center">
            </div>  
            <div class="col-md-6 mb-4 d-flex flex-column align-items-center">
                <div class="col-md-6">
                    <img src="img/hw_legend.png" class="img-fluid" alt="Graph Legend">
                </div>
            </div>  
        </div>

        `
    }

    ],


    CONTRIBUTORS: [
        {
            "name": "Amisha Bhaskar",
            "img": "img/AB.png",
            "url": "https://scholar.google.com/citations?user=KRpb6Y0AAAAJ&hl=en&oi=sra"
        },
        {
            "name": "Zahiruddin Mahammad",
            "img": "img/dummy_profile.png",
            "url": ""
        },
        {
            "name": "Sachin R Jadhav",
            "img": "img/dummy_profile.png",
            "url": ""
        },
        // {
        //     "name": "Guangyao Shi",
        //     "img": "img/GS.png",
        //     "url": "https://scholar.google.com/citations?hl=en&user=Y4iDZHsAAAAJ"
        // },
        {
            "name": "Pratap Tokekar",
            "img": "img/PT.png",
            "url": "https://www.cs.umd.edu/people/tokekar"
        },
    ],
    LINKS: [
        {
            "title": "Paper",
            "icon": "img/paper.svg",
            "links": [
                {
                    "name": "arXiv",
                    "url": "https://arxiv.org/pdf/2408.04054",
                    "icon": "img/paper_copy.svg"
                },
            ],
        },
        {
            "title": "Dataset",
            "icon": "img/dataset.svg",
            "links": [
                {
                    "name": "Dataset",
                    "url": "https://drive.google.com/drive/folders/1UydyI89VvBrUHPD4DNie2l5ABjhRFAIG?usp=sharing",
                    "icon": "img/gd.png"
                },
            ],
        },
        {
            "title": "Code",
            "icon": "img/code.svg",
            "links": [
                {
                    "name": "Repository 1",
                    "url": "#",
                    "icon": "img/GitHub-Mark-Light-32px.png"
                },
                {
                    "name": "Repository 2",
                    "url": "#",
                    "icon": "img/GitHub-Mark-Light-32px.png"
                },
            ],
        },
    ],
    CITATION: ` \
                @article{bhaskar2024lava,
                  title={LAVA: Long-horizon Visual Action based Food Acquisition},
                  author={Bhaskar, Amisha and Liu, Rui and Sharma, Vishnu D and Shi, Guangyao and Tokekar, Pratap},
                  journal={arXiv preprint arXiv:2403.12876},
                  year={2024}
                }
    `,
    FOOTER: {
        LOGOS: [
            {
                "name": "University of Maryland",
                "src": "img/umd.png",
                "url": "https://umd.edu/"
            },
            {
                "name": "University of Maryland Institute for Advanced Computer Studies",
                "src": "img/umiacs.png",
                "url": "https://www.umiacs.umd.edu/"
            },
        ],
        COPYRIGHT: `RAAS lab 2024`
    },
}
// ===== END CUSTOM DATA =====




// /!\ --- Do not change following lines ---

const NB_COLS = 12;
const section_links_nav = DATA.CONTENT.map(section => ({ "id": idFromTitle(section), "name": section.name }));
const NAVIGATION_LINKS = [{ "id": "abstract", "name": "Abstract" }].concat(
    DATA.CONTENT.map(section => ({ "id": idFromTitle(section), "name": section.name })),
    [
        { "id": "contributors", "name": "Contributors" },
        { "id": "links", "name": "Links" }
    ]
);


/* Utils */
function link(url, content, style = ``) {
    return `<a href=${url} target="_blank" ${style}>${content}</a>`;
}

function padding(nbElements, nbElementsMax) {
    const PADDING_COLS = (NB_COLS - nbElements * Math.floor(NB_COLS / nbElementsMax)) / 2;
    return PADDING_COLS > 0 ? `<div class=col-lg-${PADDING_COLS}></div>` : ``;
}

function idFromTitle(title) {
    return title.name.toLowerCase().replace(' ', '-');
}

/* Header */
function displayTitle() {
    let oneLineTitle = DATA.HEAD.PROJECT_TITLE;
    const remove = ["<br>", "<br/>", "<br />"];
    for (const val of remove) {
        oneLineTitle = oneLineTitle.replace(val, " ");
    }
    document.head.querySelector("title").innerHTML = oneLineTitle;
    document.head.querySelector("meta[name='author']").content = DATA.HEAD.AUTHOR_NAME;
    document.head.querySelector("meta[name='description']").content = oneLineTitle;

    document.head.querySelector("link[rel='icon']").type = `image/${DATA.HEAD.FAVICON_SRC.split(".").at(-1)}`;
    document.head.querySelector("link[rel='icon']").href = DATA.HEAD.FAVICON_SRC;

    document.getElementById("nav-project-title").innerHTML = oneLineTitle;
    document.getElementById("head-title").innerHTML = DATA.HEAD.PROJECT_TITLE;
    document.getElementById("head-subtitle").innerHTML = `<a href=${DATA.HEAD.PROJECT_SUBTITLE.url}>${DATA.HEAD.PROJECT_SUBTITLE.name}</a>`;
}

function displayNav() {
    document.getElementById("navigation").innerHTML = NAVIGATION_LINKS.map(
        link => `
        <li class="nav-item">
            <a class="nav-link active" href="#${link.id}">${link.name}</a>
        </li>
    `).join("");
}

/* Video section */
function displayVideo() {
    document.getElementById("video").innerHTML = `<iframe class="embed-responsive-item" src=${DATA.HEAD.VIDEO_SRC}></iframe>`;
}

/* Abstract section */
function displayAbstract() {
    document.getElementById("abstract-text").innerHTML = `
    <div class="col-sm">
        <h2 class="text-center">Abstract</h2>
        <hr>
        ${DATA.ABSTRACT.TEXT.map(text => `<p>${text}</p>`).join("")}
        <br>
        <br>
    </div>
  `;
}

function displayOverview() {
    document.getElementById("overview").innerHTML = `
        <div class="col-sm">
            <img src=${DATA.ABSTRACT.OVERVIEW.src} alt="Method Overview" class="img-fluid">
            <div id="overview-legend">${DATA.ABSTRACT.OVERVIEW.legend}</div>
        </div>
    `;

    // Trigger MathJax to process the newly added LaTeX content
    if (window.MathJax) {
        window.MathJax.typesetPromise();
    }
}


/* Content sections */
function displayContentSections() {
    document.getElementById("content").innerHTML = DATA.CONTENT.map(
        section => `
        <div class="container section" id=${idFromTitle(section)}>
            <div class="row">
                <div class="col-sm">
                    <h2 class="text-center">${section.name}</h2>
                    <hr>
                    ${section.html}
                </div>
            </div>
        </div>
        `
    ).join("");
}

/* Contributors section */
function addPadding(nbContributorsInLine) {
    return padding(nbContributorsInLine, DATA.STYLE.NB_MAX_CONTRIBUTORS_PER_LINE);
}

function displayContributorsRow(contributorsInRow) {
    let htmlContent = `<div class="row text-center">` + addPadding(contributorsInRow.length);

    for (const contributor of contributorsInRow) {
        const htmlImg = `<img class="rounded-circle" src=${contributor.img} alt=${contributor.name} width=${DATA.STYLE.CONTRIBUTOR_IMAGE_SIZE} height=${DATA.STYLE.CONTRIBUTOR_IMAGE_SIZE} />`;
        htmlContent +=
            `<div class="col-lg-${Math.floor(NB_COLS / DATA.STYLE.NB_MAX_CONTRIBUTORS_PER_LINE)}">
                ${link(contributor.url, htmlImg)}
                <h4>${link(contributor.url, contributor.name)}</h4>
            </div>`;
    }
    htmlContent += addPadding(contributorsInRow.length) + `</div>`;
    return htmlContent;
}

function displayContributors() {
    htmlContent = "";

    nbLines = Math.ceil(DATA.CONTRIBUTORS.length / DATA.STYLE.NB_MAX_CONTRIBUTORS_PER_LINE)
    for (const rowId of Array(nbLines).keys()) {
        const contributorsInRow = DATA.CONTRIBUTORS.slice(rowId * DATA.STYLE.NB_MAX_CONTRIBUTORS_PER_LINE, (rowId + 1) * DATA.STYLE.NB_MAX_CONTRIBUTORS_PER_LINE);
        htmlContent += displayContributorsRow(contributorsInRow);
    }

    document.getElementById("contributors").innerHTML += htmlContent;
}


/* Links section */
function formatLink(_link) {
    return `<div class="col-sm text-center">
            ${link(_link.url, `<img src=${_link.icon} width="20px"> ${_link.name}`, `role="button" class="btn btn-dark"`)}
        </div>`;
}

function formatLinkGroup(group) {
    return `<div class="col-sm text-center">
                <img src=${group.icon} />
                <h4>${group.title}</h4>
                ${group.links.map(link => formatLink(link)).join("")}
            </div>`;
}

function displayLinks() {
    document.getElementById("links-area").innerHTML = DATA.LINKS.map(
        group => formatLinkGroup(group)
    ).join("");
}

/* Citation */
function displayCitation() {
    htmlContent = `<code>${DATA.CITATION}</code>`;
    document.getElementsByClassName("citation")[0].innerHTML = htmlContent;
}

/* Footer */
function displayFooter() {
    const nbLogos = DATA.FOOTER.LOGOS.length;
    const nbColsPerDiv = Math.floor(NB_COLS / (nbLogos + 1));
    const pad = padding(nbLogos + 1, nbLogos + 1);

    const htmlLogos = DATA.FOOTER.LOGOS.map(logo => `\
        <div class="col-md-${nbColsPerDiv} text-center">
            ${link(logo.url, `<img src=${logo.src} alt=${logo.name} width=${DATA.STYLE.FOOTER_LOGO_SIZE}>`)}
        </div>
    `);

    document.getElementById("footer").innerHTML = `\
        <div class="container footer-container">
            <div class="row align-items-center h-100">
                ${pad}
                ${htmlLogos.join("")}
                <div class="col-md-${nbColsPerDiv} text-center align-middle">
                    <h5>&copy; ${DATA.FOOTER.COPYRIGHT}</h5>
                    Lab: ${link("https://raaslab.org/", "RAAS lab")}
                </div>
                ${pad}
            </div>
        </div>
    `;
}

function displayTopLinks() {
    const container = document.getElementById("top-links-container");
    if (container) {
        let linksHTML = DATA.HEAD.TOP_LINKS.map(link => 
            `<a href="${link.url}" class="btn btn-outline-light btn-sm m-1">${link.title}</a>`
        ).join("");
        container.innerHTML = linksHTML;
    }
}




/* Main */
function displayPage() {
    displayTitle();
    displayNav();
    displayVideo();
    displayAbstract();
    displayOverview();
    displayContentSections();
    displayContributors();
    displayLinks();
    displayCitation();
    displayFooter();
    displayTopLinks();
}

displayPage();
