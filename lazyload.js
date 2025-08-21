document.addEventListener("DOMContentLoaded", () => {
  const imgs = document.querySelectorAll("img.lazy");
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        obs.unobserve(img);
      }
    });
  });
  imgs.forEach(img => observer.observe(img));
});


document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img.lazy-img");
  images.forEach(img => {
    if (img.complete) { 
      img.style.opacity = 1;
    } else {
      img.addEventListener("load", () => {
        img.style.opacity = 1;
      });
    }
  });
});