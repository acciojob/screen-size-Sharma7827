window.addEventListener('resize', updateScreenSize)

function updateScreenSize() {
    const width = window.innerWidth
    const height = window.innerHeight
    document.getElementById('width').textContent = width
    document.getElementById('height').textContent = height
  }
