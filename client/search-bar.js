class SearchBar {
  searchInput = null;

  constructor() {
    window.addEventListener("load", this.init.bind(this));
  }

  init() {
    this.setupElements();
    this.addEventListeners();
  }

  setupElements() {
    this.searchInput = this.createSearchBar();
    this.sites = document.querySelectorAll("section.live-status article.link");
  }

  addEventListeners() {
    this.searchInput.addEventListener(
      "input",
      this.handleSearchInputChange.bind(this)
    );
  }

  handleSearchInputChange(e) {
    const value = e.target.value;

    this.sites.forEach((siteEl) => {
      let match = false;
      const headingEl = siteEl.querySelector("h4 a");
      const heading = headingEl.innerHTML;
      const href = headingEl.getAttribute("href");

      if (!value) {
        match = true;
      } else {
        if (heading.toLowerCase().includes(value.toLowerCase())) {
          match = true;
        } else if (
          href &&
          href.toLowerCase().includes(value && value.toLowerCase())
        ) {
          match = true;
        }
      }

      if (match) {
        siteEl.style.display = "block";
      } else {
        siteEl.style.display = "none";
      }
    });
  }

  createSearchBar() {
    const listItem = document.createElement("li");
    const searchInput = document.createElement("input");
    searchInput.setAttribute("type", "search");
    searchInput.setAttribute("placeholder", "Search");
    searchInput.classList.add("search-bar");
    searchInput.style.padding = ".5em";
    const navItems = document.querySelector("nav ul");
    listItem.appendChild(searchInput);
    navItems.appendChild(listItem);
    return searchInput;
  }
}

new SearchBar();
