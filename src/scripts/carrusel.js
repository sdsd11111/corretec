// Carrusel dinámico - CORRETEC Website
class Carrusel {
  constructor(containerId, itemWidth = 320) {
    this.container = document.getElementById(containerId + "Carrusel")
    this.track = document.getElementById(containerId + "Track")
    this.itemWidth = itemWidth
    this.currentPosition = 0
    this.maxPosition = 0
    this.init()
  }

  init() {
    if (!this.container || !this.track) return

    this.calculateMaxPosition()
    this.addEventListeners()
    this.updateButtons()
  }

  calculateMaxPosition() {
    const containerWidth = this.container.offsetWidth
    const trackWidth = this.track.scrollWidth
    this.maxPosition = Math.max(0, trackWidth - containerWidth)
  }

  move(direction) {
    const moveAmount = this.itemWidth + 24 // item width + gap

    if (direction === 1) {
      // Next
      this.currentPosition = Math.min(this.currentPosition + moveAmount, this.maxPosition)
    } else {
      // Previous
      this.currentPosition = Math.max(this.currentPosition - moveAmount, 0)
    }

    this.track.style.transform = `translateX(-${this.currentPosition}px)`
    this.updateButtons()
  }

  updateButtons() {
    const prevBtn = this.container.querySelector(".carrusel-prev")
    const nextBtn = this.container.querySelector(".carrusel-next")

    if (prevBtn) {
      prevBtn.style.opacity = this.currentPosition <= 0 ? "0.5" : "1"
      prevBtn.disabled = this.currentPosition <= 0
    }

    if (nextBtn) {
      nextBtn.style.opacity = this.currentPosition >= this.maxPosition ? "0.5" : "1"
      nextBtn.disabled = this.currentPosition >= this.maxPosition
    }
  }

  addEventListeners() {
    // Recalculate on window resize
    window.addEventListener("resize", () => {
      this.calculateMaxPosition()
      this.currentPosition = Math.min(this.currentPosition, this.maxPosition)
      this.track.style.transform = `translateX(-${this.currentPosition}px)`
      this.updateButtons()
    })

    // Touch/swipe support for mobile
    let startX = 0
    let isDragging = false

    this.track.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX
      isDragging = true
    })

    this.track.addEventListener("touchmove", (e) => {
      if (!isDragging) return
      e.preventDefault()
    })

    this.track.addEventListener("touchend", (e) => {
      if (!isDragging) return

      const endX = e.changedTouches[0].clientX
      const diff = startX - endX

      if (Math.abs(diff) > 50) {
        // Minimum swipe distance
        if (diff > 0) {
          this.move(1) // Swipe left - next
        } else {
          this.move(-1) // Swipe right - previous
        }
      }

      isDragging = false
    })
  }
}

// Global function to move carrusel (called from HTML)
function moveCarrusel(carruselId, direction) {
  const carrusel = window[carruselId + "Carrusel"]
  if (carrusel) {
    carrusel.move(direction)
  }
}

// Initialize carruseles
function initCarrusel(carruselId) {
  // Wait a bit for content to load
  setTimeout(() => {
    window[carruselId + "Carrusel"] = new Carrusel(carruselId)
  }, 100)
}

// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", () => {
  // Add smooth scrolling to all navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        const headerHeight = document.querySelector(".header").offsetHeight
        const targetPosition = target.offsetTop - headerHeight - 20

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })

  // Header scroll effect
  const header = document.querySelector(".header")
  let lastScrollY = window.scrollY

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY

    if (currentScrollY > 100) {
      header.style.background = "rgba(255, 255, 255, 0.95)"
      header.style.backdropFilter = "blur(10px)"
    } else {
      header.style.background = "var(--color-white)"
      header.style.backdropFilter = "none"
    }

    lastScrollY = currentScrollY
  })
})

// Lazy loading for images
function initLazyLoading() {
  const images = document.querySelectorAll('img[loading="lazy"]')

  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          img.src = img.src // Trigger loading
          img.classList.add("loaded")
          observer.unobserve(img)
        }
      })
    })

    images.forEach((img) => imageObserver.observe(img))
  }
}

// Initialize lazy loading when DOM is ready
document.addEventListener("DOMContentLoaded", initLazyLoading)

// Performance optimization: Preload critical images
function preloadCriticalImages() {
  const criticalImages = ["/images/logo.webp", "/images/hero1.webp"]

  criticalImages.forEach((src) => {
    const link = document.createElement("link")
    link.rel = "preload"
    link.as = "image"
    link.href = src
    document.head.appendChild(link)
  })
}

// Call preload function
preloadCriticalImages()
