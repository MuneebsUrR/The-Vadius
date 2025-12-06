"use client"

import { useEffect, useRef } from "react"

export default function HeroVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth * window.devicePixelRatio
    canvas.height = canvas.offsetHeight * window.devicePixelRatio
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio)

    const width = canvas.offsetWidth
    const height = canvas.offsetHeight

    // Animated gradient orbs
    const orbs = [
      { x: width * 0.2, y: height * 0.2, size: 80, color: "#0d9488", vx: 0.5, vy: 0.3 },
      { x: width * 0.7, y: height * 0.5, size: 120, color: "#22c55e", vx: -0.3, vy: 0.4 },
      { x: width * 0.5, y: height * 0.8, size: 60, color: "#06b6d4", vx: 0.2, vy: -0.5 },
    ]

    let time = 0

    const animate = () => {
      // Clear canvas with semi-transparent background for trail effect
      ctx.fillStyle = "rgba(248, 248, 248, 0.95)"
      ctx.fillRect(0, 0, width, height)

      time += 0.01

      // Draw gradient lines/connections
      ctx.strokeStyle = "rgba(13, 148, 136, 0.1)"
      ctx.lineWidth = 2
      for (let i = 0; i < orbs.length; i++) {
        for (let j = i + 1; j < orbs.length; j++) {
          ctx.beginPath()
          ctx.moveTo(orbs[i].x, orbs[i].y)
          ctx.lineTo(orbs[j].x, orbs[j].y)
          ctx.stroke()
        }
      }

      // Draw animated orbs with glow
      orbs.forEach((orb) => {
        // Update position with sine wave for smooth motion
        orb.x += orb.vx + Math.sin(time + orb.x) * 0.3
        orb.y += orb.vy + Math.cos(time + orb.y) * 0.3

        // Wrap around edges
        if (orb.x > width + 50) orb.x = -50
        if (orb.x < -50) orb.x = width + 50
        if (orb.y > height + 50) orb.y = -50
        if (orb.y < -50) orb.y = height + 50

        // Draw glow
        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.size * 2)
        gradient.addColorStop(0, orb.color.replace(")", ", 0.3)").replace("rgb", "rgba"))
        gradient.addColorStop(1, orb.color.replace(")", ", 0)").replace("rgb", "rgba"))
        ctx.fillStyle = gradient
        ctx.fillRect(orb.x - orb.size * 2, orb.y - orb.size * 2, orb.size * 4, orb.size * 4)

        // Draw solid orb
        ctx.fillStyle = orb.color
        ctx.beginPath()
        ctx.arc(orb.x, orb.y, orb.size / 2, 0, Math.PI * 2)
        ctx.fill()

        // Add highlight
        ctx.fillStyle = "rgba(255, 255, 255, 0.4)"
        ctx.beginPath()
        ctx.arc(orb.x - orb.size / 6, orb.y - orb.size / 6, orb.size / 6, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full" />
}
