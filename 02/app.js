console.log("DOM");

const linksList = document.querySelectorAll("a[data-url]");

if (linksList) {
  linksList.forEach((link) => {
    const href = link.dataset.url;
    link.setAttribute("href", href);
  });
}
