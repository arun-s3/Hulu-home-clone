
window.addEventListener("load", () => {
    const cards = document.querySelectorAll(".cta-bundle > div")

    cards.forEach((card, index) => {
        setTimeout(() => { card.classList.add("reveal") }, 250 + index * 180)
    })
});


const cardsSection = document.querySelector("#cards-wrapper");
const cards = document.querySelectorAll(".cards .individual-card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        cardsSection.classList.add("reveal")
        cards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("reveal")
          }, index * 180)
        })
        observer.disconnect()
      }
    })
  },
  { threshold: 0.25 }
);

observer.observe(cardsSection);


const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view')
        revealObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.25 }
);
revealObserver.observe(document.querySelector('#about'));
revealObserver.observe(document.querySelector('#live-sports-container'));
