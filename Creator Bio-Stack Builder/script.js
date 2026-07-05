const form = document.getElementById("linkForm");
const titleInput = document.getElementById("title");
const urlInput = document.getElementById("url");
const error = document.getElementById("error");
const linksContainer = document.getElementById("linksContainer");
const themeBtn = document.getElementById("themeBtn");

// Load links from LocalStorage
let links = JSON.parse(localStorage.getItem("links")) || [];

// Load saved theme
let savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeBtn.textContent = "☀️ Light Mode";
}

// Render links on page load
renderLinks();

// Add Link
form.addEventListener("submit", function (e) {

    e.preventDefault();

    let title = titleInput.value.trim();
    let url = urlInput.value.trim();

    if (title === "" || url === "") {
        error.textContent = "All fields are required.";
        return;
    }

    // URL Validation
    let pattern = /^https:\/\/.+/;

    if (!pattern.test(url)) {
        error.textContent = "URL must start with https://";
        return;
    }

    error.textContent = "";

    let linkObj = {
        title: title,
        url: url
    };

    links.push(linkObj);

    saveLinks();

    renderLinks();

    form.reset();

});

// Render Function
function renderLinks() {

    linksContainer.innerHTML = "";

    if (links.length === 0) {

        linksContainer.innerHTML =
        "<p style='text-align:center;'>No links added yet.</p>";

        return;
    }

    links.forEach((link, index) => {

        let div = document.createElement("div");

        div.className = "link-card";

        div.innerHTML = `
            <a href="${link.url}" target="_blank">
                ${link.title}
            </a>

            <button class="removeBtn" data-index="${index}">
                Remove
            </button>
        `;

        linksContainer.appendChild(div);

    });

}

// Delete using Event Delegation
linksContainer.addEventListener("click", function (e) {

    if (e.target.classList.contains("removeBtn")) {

        let index = e.target.dataset.index;

        links.splice(index, 1);

        saveLinks();

        renderLinks();

    }

});

// Save to LocalStorage
function saveLinks() {

    localStorage.setItem("links", JSON.stringify(links));

}

// Theme Toggle
themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");

        themeBtn.textContent = "☀️ Light Mode";

    } else {

        localStorage.setItem("theme", "light");

        themeBtn.textContent = "🌙 Dark Mode";

    }

});