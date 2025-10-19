const bottomMenu = document.getElementById("bottomMenu");
const menuLinks = bottomMenu.querySelectorAll("a");

menuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = link.getAttribute("href").substring(1);
    const target = document.getElementById(id);
    if (target) {
      const y = target.getBoundingClientRect().top + window.scrollY - 50;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  });
});
