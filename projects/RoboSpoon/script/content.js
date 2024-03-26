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
            "name": "IROS Conference,  2024",
            "url": "https://iros2024-abudhabi.org",
        },
        AUTHOR_NAME: "Amisha Bhaskar",
        VIDEO_SRC: "video/IROS_2024_LAVAgithub.mp4",
    },
    ABSTRACT: {
        TEXT: [
            "Robotic Assisted Feeding (RAF) addresses the fundamental need for individuals with mobility impairments to regain autonomy in feeding themselves. The goal of RAF is to use a robot arm to acquire and transfer food to individuals from the table. Existing RAF methods primarily focus on solid foods, leaving a gap in manipulation strategies for semi-solid and deformable foods. This study introduces Long-horizon Visual Action (LAVA) based food acquisition of liquid, semisolid, and deformable foods. Long-horizon refers to the goal of “clearing the bowl” by sequentially acquiring the food from the bowl. LAVA employs a hierarchical policy for long-horizon food acquisition tasks. The framework uses high-level policy to determine primitives by leveraging ScoopNet. At the mid- level, LAVA finds parameters for primitives using vision.",
            "To carry out sequential plans in the real world, LAVA delegates action execution which is driven by Low-level policy that uses parameters received from mid-level policy and behavior cloning ensuring precise trajectory execution. We validate our approach on complex real-world acquisition trials involving granular, liquid, semisolid, and deformable food types along with fruit chunks and soup acquisition.",
            "Across 46 bowls, LAVA acquires much more efficiently than baselines with a success rate of 89 ± 4%, and generalizes across realistic plate variations such as different positions, varieties, and amount of food in the bowl."
        ],
        OVERVIEW: {
            "src": "img/Presentation_IROS.pdf",
            "legend": "System Architecture of our method.",
        }
    },
    CONTENT: [ // If you want to add other sections, add them with their title (used for navigation) and the html code of the section
        {
            "name": "Section 1",
            "html": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra finibus quam, nec ornare mi posuere id. Nullam vitae efficitur neque. Maecenas rutrum nunc sit amet rhoncus iaculis. Pellentesque rutrum at nisl vitae dapibus. Maecenas auctor faucibus cursus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum a leo porttitor, mollis diam id, porta odio. Donec convallis porttitor lectus sed fringilla. Nulla facilisi. Curabitur tincidunt turpis sit amet leo lobortis lacinia.",
        },
        {
            "name": "Section 2",
            "html": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra finibus quam, nec ornare mi posuere id. Nullam vitae efficitur neque. Maecenas rutrum nunc sit amet rhoncus iaculis. Pellentesque rutrum at nisl vitae dapibus. Maecenas auctor faucibus cursus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum a leo porttitor, mollis diam id, porta odio. Donec convallis porttitor lectus sed fringilla. Nulla facilisi. Curabitur tincidunt turpis sit amet leo lobortis lacinia.",
        },
    ],
    CONTRIBUTORS: [
        {
            "name": "Contributor 1",
            "img": "img/contributor_dummy.png",
            "url": "#"
        },
        {
            "name": "Contributor 2",
            "img": "img/contributor_dummy.png",
            "url": "#"
        },
        {
            "name": "Contributor 3",
            "img": "img/contributor_dummy.png",
            "url": "#"
        },
        {
            "name": "Contributor 4",
            "img": "img/contributor_dummy.png",
            "url": "#"
        },
        {
            "name": "Contributor 5",
            "img": "img/contributor_dummy.png",
            "url": "#"
        },
    ],
    LINKS: [
        {
            "title": "Paper",
            "icon": "img/paper.svg",
            "links": [
                {
                    "name": "arXiv",
                    "url": "#",
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
                    "url": "#",
                    "icon": "img/paper_copy.svg"
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
        @article{articlename,
            author    = {Author1 and Author2 and Author3 and Author4 and Author5},
            title     = {Paper Title},
            journal   = {arXiv preprint arXiv:TBD},
            year      = {20XX}
        }
    `,
    FOOTER: {
        LOGOS: [
            {
                "name": "University 1",
                "src": "img/logo_dummy.png",
                "url": "#"
            },
            {
                "name": "University 2",
                "src": "img/logo_dummy.png",
                "url": "#"
            },
        ],
        COPYRIGHT: `Copyright Owner 20XX`
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
                    Website Design: ${link("https://github.com/rjgpinel/dark-academic-website", "dark-academic-website")}
                </div>
                ${pad}
            </div>
        </div>
    `;
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
}

displayPage();
