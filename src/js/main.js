const btn = document.querySelector(".card__btn");
const social = document.querySelector(".card__social");

const share = () => {
  social.classList.toggle("active");
  social.classList.contains("active") ? openSocial() : closeSocial();
};
const openSocial = () => {
  social.style.display = "flex";
};
const closeSocial = () => {
  social.style.display = "none";
};
btn.addEventListener("click", share);
