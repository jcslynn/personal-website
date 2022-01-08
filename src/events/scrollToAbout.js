const goToAbout = (e) => {
  e.preventDefault();
  const headerOffset = document.getElementById("nav-bar").clientHeight;
  const elementPosition = document.getElementById("about").offsetTop;
  const offsetPosition = elementPosition - headerOffset;
  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

export default goToAbout;
