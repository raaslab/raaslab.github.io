// ===== START CUSTOM DATA =====
const DATA = {
    STYLE: {
        NB_MAX_CONTRIBUTORS_PER_LINE: 3, // Integer in [1, 2, 3, 4, 6]
        CONTRIBUTOR_IMAGE_SIZE: "180px",
        FOOTER_LOGO_SIZE: "240px",
    },
    HEAD: {
        FAVICON_SRC: "img/logo_dummy.png",
        PROJECT_TITLE: "LAVA: Long-horizon Visual Action based Food Acquisition",
        PROJECT_SUBTITLE: {
                    "name": "Amisha Bhaskar, Rui Liu, Vishnu D. Sharma, Guangyao Shi, Pratap Tokekar",
                    "url": "https://raaslab.org/index.html#people",
                },
        AUTHOR_NAME: "Amisha Bhaskar",
        TOP_LINKS: [
        { "title": "Paper", "url": "https://arxiv.org/abs/2403.12876", "icon": "img/paper_copy.svg.svg" },
        { "title": "Video", "url": "https://youtu.be/fK6TFrmz8mM", "icon": "img/video.png" },
        { "title": "Dataset", "url": "https://drive.google.com/drive/folders/1UydyI89VvBrUHPD4DNie2l5ABjhRFAIG?usp=sharing", "icon": "img/gd.svg" },
        { "title": "Code", "url": "your_code_repository_link_here", "icon": "img/GitHub-Mark-Light-32px.png.svg" },
    ],
        VIDEO_SRC: "video/IROS_2024_LAVAgithub.mp4",
    },
    ABSTRACT: {
        TEXT: [
            "Robotic Assisted Feeding (RAF) addresses the fundamental need for individuals with mobility impairments to regain autonomy in feeding themselves. The goal of RAF is to use a robot arm to acquire and transfer food to individuals from the table. Existing RAF methods primarily focus on solid foods, leaving a gap in manipulation strategies for semi-solid and deformable foods. This study introduces Long-horizon Visual Action (LAVA) based food acquisition of liquid, semisolid, and deformable foods. Long-horizon refers to the goal of “clearing the bowl” by sequentially acquiring the food from the bowl. LAVA employs a hierarchical policy for long-horizon food acquisition tasks. The framework uses high-level policy to determine primitives by leveraging ScoopNet. At the mid-level, LAVA finds parameters for primitives using vision. To carry out sequential plans in the real world, LAVA delegates action execution driven by Low-level policy that uses parameters received from mid-level policy and behavior cloning ensuring precise trajectory execution. We validate our approach on complex real-world acquisition trials involving granular, liquid, semisolid, and deformable food types along with fruit chunks and soup acquisition.",
            "Across 46 bowls, LAVA acquires much more efficiently than baselines with a success rate of 89 ± 4%, and generalizes across realistic plate variations such as different positions, varieties, and amount of food in the bowl."
        ],
        OVERVIEW: {
            "src": "img/IROS_2024_LAVA.png",
            "legend": "System Architecture of LAVA which employs a high-level policy (blue) <span class='mathjax'>\\(\\pi_H\\)</span> to select amongst discrete high-level primitives <span class='mathjax'>\\(P_{H}^{k}\\)</span>, such as wide primitive and Deep primitive, which then further gets refined by mid-level policy (green) <span class='mathjax'>\\(\\pi_M\\)</span> to select amongst mid-level primitives <span class='mathjax'>\\(P_{M}^{k}\\)</span>, low-level vision parametrized policy <span class='mathjax'>\\(\\pi_L\\)</span> (brown) executes trajectory learned from Behavioral cloning for long-horizon dextrous food acquisition."
        }
    },
    CONTENT: [
        {
            "name": "High-level Policy",
            "html": `
            <div class="row">
                <div class="col-md-6">
                    <h3>Seeing the Big Picture</h3>
                    <ul>
                        <li><strong>Decision-Making:</strong> Identifies food type and texture—choosing between gentle scooping for tofu or a direct approach for semi-solid foods.</li>
                        <li><strong>Strategy:</strong> Sets the stage for action, ensuring adaptability and precision from the outset.</li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <video class="img-fluid" controls>
                        <source src="video/ScooopNet.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            `
        },
        {
            "name": "Mid-level Policy",
            "html": `
            <div class="container">
                <h3 class="text-center mb-4">Approach Refinement</h3>
                <div class="row justify-content-center">
                    <div class="col-md-5 mb-4">
                        <video class="img-fluid" controls>
                            <source src="video/TragetNet.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                        <h4 class="mt-2 text-center">TargetNet: Wide Primitives</h4>
                        <ul>
                            <li><strong>Target Identification:</strong> Pinpoints the exact piece to acquire, crucial for executing wide primitive strategies.</li>
                            <li><strong>Strategic Alignment:</strong> Decides the best approach between aligning food towards the center for easier access or leveraging the bowl's wall for support.</li>
                        </ul>
                    </div>
                    <div class="col-md-5 mb-4">
                        <video class="img-fluid" controls>
                            <source src="video/DepthNet.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                        <h4 class="mt-2 text-center">DepthNet: Deep Primitives</h4>
                        <ul>
                            <li><strong>Depth Assessment:</strong> Measures the depth of food, guiding the scoop for deep primitives.</li>
                            <li><strong>Trajectory Adjustment:</strong> Fine-tunes the scooping trajectory based on the assessed depth, optimizing scoop size and minimizing spillage.</li>
                        </ul>
                    </div>
                </div>
            </div>
            `
        },
        {
            "name": "Low-level Policy",
            "html": `
            <div class="row">
                <div class="col-md-6">
                    <h3>Turning Plans into Action</h3>
                    <ul>
                        <li><strong>Execution:</strong> Implements the refined strategy, directing the robot arm to scoop with targeted precision.</li>
                        <li><strong>Adaptation:</strong> Learns from demonstrations, adjusting movements in real-time for efficient and careful food acquisition.</li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <video class="img-fluid" controls>
                        <source src="video/behaviorcloning.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            `
        },
        {
            "name": "Quantitative Results",
            "html": `
            <div class="row">
                <div class="col-md-4 mb-3">
                    <img src="img/time.png" class="img-fluid" alt="Time Efficiency Graph">
                </div>
                <div class="col-md-4 mb-3">
                    <img src="img/breakage-1.png" class="img-fluid" alt="Breakage Reduction Graph">
                </div>
                <div class="col-md-4 mb-3">
                    <img src="img/spillage.png" class="img-fluid" alt="Spillage Reduction Graph">
                </div>
            </div>
            <div class="row justify-content-center mb-3">
            <div class="col-md-6">
                    <img src="img/common_legend-1.png" class="img-fluid" alt="Graph Legend">
                </div>
            </div>
            <div class="row">
                <div class="col-md-8">
                    <p>LAVA's innovative approach demonstrates remarkable efficiency and adaptability in robotic-assisted feeding:</p>
                    <ul>
                        <li><strong>Time Efficiency:</strong> Surpasses baselines, highlighting swift adaptation to food types and depths.</li>
                        <li><strong>Minimized Breakage and Spillage:</strong> Precise handling significantly reduces food waste.</li>
                        <li><strong>Exceptional Success Rate:</strong> Achieves superior scooping accuracy across a wide range of foods.</li>
                        <li><strong>Robust Generalization:</strong> Excellently manages new, unseen food configurations, proving its adaptability.</li>
                    </ul>
                    <p>These results affirm LAVA's potential to redefine the standards in RAF technology.</p>
                </div>
                <div class="col-md-4">
                    <img src="img/success_rate.png" class="img-fluid" alt="Success Rate Graph">
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 mb-3">
                    <img src="img/comparision_3_tofu.png" class="img-fluid" alt="Tofu 3 Graph">
                    <p class="text-center">3 Tofu Configurations.</p>
                </div>
                <div class="col-md-4 mb-3">
                    <img src="img/comparision_4_tofu.png" class="img-fluid" alt="Tofu 4 Graph">
                    <p class="text-center">4 Tofu Configurations.</p>
                </div>
                <div class="col-md-4 mb-3">
                    <img src="img/comparision_5_tofu.png" class="img-fluid" alt="Tofu 5 Graph">
                    <p class="text-center">5 Tofu Configurations. </p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-8">
                    <p>LAVA excels in clearing bowls with diverse food configurations, thanks to its advanced hierarchical policy. Outperforming baseline models, LAVA achieves unmatched efficiency and precision. It adeptly navigates complex tofu arrangements and cereal acquisitions, showcasing its robustness across food types. LAVA redefines efficiency in Robotic Assisted Feeding with its advanced, adaptive technology.</p>
                </div>
                <div class="col-md-4">
                    <img src="img/comparision_cereals.png" class="img-fluid" alt="Cereal Acquisition">
                    <p class="text-center">Cereal Acquisition</p>
                </div>
            </div>
        </div>
            `
        },
        {
        "name": "Zero-Shot Generalization",
        "html": `
        <div class="row">
            <div class="col-12 mb-4">
                <h3>Zero-Shot Generalization</h3>
                <p>LAVA's design allows it to handle unseen food scenarios, demonstrating robust generalizability adeptly. This capability is pivotal for real-world applications, where unpredictability in food types and configurations is common. LAVA's ability to adapt and perform effectively without prior specific training on new food types or arrangements highlights its potential for widespread RAF technology adoption.</p>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-6 mb-4 d-flex flex-column align-items-center">
                <img src="img/souptofu.gif" class="img-fluid" alt="Zero-Shot Generalization with Tofu">
                <p class="text-center" style="width: 80%;">Tofu in Soup: Adapting to floating pieces in fluid dynamics.</p>
            </div>   
        <div class="col-md-6 mb-4 d-flex flex-column align-items-center">
                <img src="img/fruit.gif" class="img-fluid" alt="Zero-Shot Generalization with Fruit">
                <p class="text-center" style="width: 80%;">Fruit Chunks: Handling variable shapes and avoiding spillage.</p>
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
            "name": "Rui Liu",
            "img": "img/RL.png",
            "url": "https://scholar.google.com/citations?hl=en&user=pMeiokwAAAAJ"
        },
        {
            "name": "Vishnu Dutt Sharma",
            "img": "img/VD.png",
            "url": "https://vishnuduttsharma.github.io/"
        },
        {
            "name": "Guangyao Shi",
            "img": "img/GS.png",
            "url": "https://scholar.google.com/citations?hl=en&user=Y4iDZHsAAAAJ"
        },
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
                    "url": "https://arxiv.org/abs/2403.12876",
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
