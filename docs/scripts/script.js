// const bottomMenu = document.getElementById("bottomMenu");
// const menuLinks = bottomMenu.querySelectorAll("a");

// menuLinks.forEach((link) => {
//   link.addEventListener("click", (e) => {
//     e.preventDefault();
//     const id = link.getAttribute("href").substring(1);
//     const target = document.getElementById(id);
//     if (target) {
//       const y = target.getBoundingClientRect().top + window.scrollY - 50;
//       window.scrollTo({ top: y, behavior: "smooth" });
//     }
//   });
// });

document.querySelectorAll('.md-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const wrapper = btn.parentElement;
    wrapper.classList.toggle('active');
  });
});

async function parseNaming(elem) {
  try {
    const res = await fetch("howtoname.md");
    if (!res.ok) throw new Error(`Ошибка загрузки: ${res.status}`);
    const text = await res.text();
    elem.innerHTML = marked.parse(text);
  } catch (err) {
    console.error(err);
    elem.innerHTML = `<p style="color:red">Не удалось загрузить файл: ${err.message}</p>`;
  }
}
async function parseBranching(elem) {
  try {
    const res = await fetch("howtobranch.md");
    if (!res.ok) throw new Error(`Ошибка загрузки: ${res.status}`);
    const text = await res.text();
    elem.innerHTML = marked.parse(text);
  } catch (err) {
    console.error(err);
    elem.innerHTML = `<p style="color:red">Не удалось загрузить файл: ${err.message}</p>`;
  }
}
async function parseApproval(elem) {
  try {
    const res = await fetch("howtoapprove.md");
    if (!res.ok) throw new Error(`Ошибка загрузки: ${res.status}`);
    const text = await res.text();
    elem.innerHTML = marked.parse(text);
  } catch (err) {
    console.error(err);
    elem.innerHTML = `<p style="color:red">Не удалось загрузить файл: ${err.message}</p>`;
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const targetName = document.querySelector('.naming-content');
  if (targetName) parseNaming(targetName);
	const targetBranch = document.querySelector('.branching-content');
  if (targetBranch) parseBranching(targetBranch);
	const targetApprove = document.querySelector('.approval-content');
  if (targetApprove) parseApproval(targetApprove);
});


