import { useEffect, useRef } from 'react'

const colors = ['#ffffff', '#00D213', '#aaffaa', '#80ff80', '#55dd55']

function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    class Particle {
      constructor() {
        this.reset()
      }
      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.speedX = (Math.random() - 0.5) * 0.8
        this.speedY = (Math.random() - 0.5) * 0.8
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.opacity = Math.random() * 0.7 + 0.3
      }
      update() {
        this.x += this.speedX
        this.y += this.speedY
        if (this.x < -20 || this.x > canvas.width + 20) this.speedX *= -1
        if (this.y < -20 || this.y > canvas.height + 20) this.speedY *= -1
      }
      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.globalAlpha = this.opacity
        ctx.fill()
        ctx.globalAlpha = 1
      }
    }

    const init = () => {
      particles = []
      const count = Math.min(Math.floor((canvas.width * canvas.height) / 8000), 200)
      for (let i = 0; i < count; i++) {
        particles.push(new Particle())
      }
    }
    init()

    const connectParticles = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x
          const dy = particles[a].y - particles[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < 200) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(0, 210, 19, ${1 - distance / 200})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[a].x, particles[a].y)
            ctx.lineTo(particles[b].x, particles[b].y)
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.update()
        p.draw()
      })
      connectParticles()
      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-1]"
      style={{ pointerEvents: 'none' }}
    />
  )
}

export default ParticleCanvas
