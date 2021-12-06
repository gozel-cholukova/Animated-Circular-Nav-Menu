const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
toggle.onclick = function() {
  menu.classList.toggle('active')
}

// text.innerHTML = text.innerHTML.split("").map(
//   (char, i) =>
//   `<span style="transform:rotate(${i * 6.4}deg)">${char}</span>`
// ).join("")