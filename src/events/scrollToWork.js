const handleGoToWork = (e) => {
  e.preventDefault();
  const headerOffset = document.getElementById("nav-bar").clientHeight;
  const elementPosition =
    document.getElementById("work").offsetTop -
    document.getElementById("work-header").clientHeight;
  const offsetPosition = elementPosition - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
  // document.getElementById('work').scrollIntoView({ behavior: 'smooth'})
};

export default handleGoToWork;
