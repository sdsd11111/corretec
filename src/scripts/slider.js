// Slider Hero - CORRETEC Website
class HeroSlider {
  constructor(containerId) {
    this.container = document.getElementById(containerId)
    this.slides = this.container.querySelectorAll(".hero-slide")
    this.currentSlide = 0
    this.slideInterval = null
    this.init()
  }

  init() {
    if (this.slides.length <= 1) return

    this.createIndicators()
    this.startAutoSlide()
    this.addEventListeners()
  }

  createIndicators() {
    const indicatorsContainer = document.createElement("div")
    indicatorsContainer.className = "hero-indicators"

    this.slides.forEach((_, index) => {
      const indicator = document.createElement("button")
      indicator.className = `hero-indicator ${index === 0 ? "active" : ""}`
      indicator.addEventListener("click", () => this.goToSlide(index))
      indicatorsContainer.appendChild(indicator)
    })

    this.container.appendChild(indicatorsContainer)
    this.indicators = indicatorsContainer.querySelectorAll(".hero-indicator")
  }

  goToSlide(index) {
    // Remove active class from current slide and indicator
    this.slides[this.currentSlide].classList.remove("active")
    if (this.indicators) {
      this.indicators[this.currentSlide].classList.remove("active")
    }

    // Set new current slide
    this.currentSlide = index

    // Add active class to new slide and indicator
    this.slides[this.currentSlide].classList.add("active")
    if (this.indicators) {
      this.indicators[this.currentSlide].classList.add("active")
    }
  }

  nextSlide() {
    const nextIndex = (this.currentSlide + 1) % this.slides.length
    this.goToSlide(nextIndex)
  }

  prevSlide() {
    const prevIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length
    this.goToSlide(prevIndex)
  }

  startAutoSlide() {
    this.slideInterval = setInterval(() => {
      this.nextSlide()
    }, 5000) // Change slide every 5 seconds
  }

  stopAutoSlide() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval)
      this.slideInterval = null
    }
  }

  addEventListeners() {
    // Pause auto-slide on hover
    this.container.addEventListener("mouseenter", () => this.stopAutoSlide())
    this.container.addEventListener("mouseleave", () => this.startAutoSlide())

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") this.prevSlide()
      if (e.key === "ArrowRight") this.nextSlide()
    })
  }
}

// Initialize hero slider when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const heroSlider = new HeroSlider("heroSlider")
})

// Add CSS for indicators
const sliderStyles = `
<style>
.hero-indicators {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
    z-index: 10;
}

.hero-indicator {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.5);
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
}

.hero-indicator.active,
.hero-indicator:hover {
    background: white;
    border-color: white;
}

.hero-slide {
    transition: opacity 1s ease-in-out;
}

@media (max-width: 768px) {
    .hero-indicators {
        bottom: 20px;
    }
    
    .hero-indicator {
        width: 10px;
        height: 10px;
    }
}
</style>
`

document.head.insertAdjacentHTML("beforeend", sliderStyles)
