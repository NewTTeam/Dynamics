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

// async function parseNaming(elem) {
// 	console.log(1)
//   try {
//     const res = await fetch('docs/howtoname.md'); // если index.html тоже в docs
//     if (!res.ok) throw new Error(`Ошибка загрузки: ${res.status}`);
//     const text = await res.text();
//     elem.innerHTML = marked.parse(text);
// 		console.log(marked.parse(text))
//   } catch (err) {
//     console.error(err);
//     if (elem)
//       elem.innerHTML = `<p style="color:red">Не удалось загрузить файл: ${err.message}</p>`;
//   }
// }

// window.addEventListener('DOMContentLoaded', () => {
//   const target = document.getElementById('md-content');
//   if (target) parseNaming(target);
// });

