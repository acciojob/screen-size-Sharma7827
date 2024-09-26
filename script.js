window.addEventListener('resize', updateScreenSize)
window.addEventListener('load', updateScreenSize)

function updateScreenSize() {
    const width = window.innerWidth
    const height = window.innerHeight
    document.getElementById('width').textContent = width
    document.getElementById('height').textContent = height
  }
