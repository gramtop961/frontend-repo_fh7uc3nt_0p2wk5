import { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero3D() {
  const [mounted, setMounted] = useState(false)
  const [splineError, setSplineError] = useState(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="home" className="relative min-h-[88vh] w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        {mounted && !splineError ? (
          <Spline
            scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
            onError={(e) => setSplineError(e?.message || 'Failed to load 3D scene')}
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(236,72,153,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.15),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.15),transparent_40%)]" />
        )}
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="max-w-2xl">
            <p className="mb-4 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 ring-1 ring-inset ring-white/15 backdrop-blur">
              Futuristic • Interactive • 3D
            </p>
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight">
              Building sleek, immersive web experiences
            </h1>
            <p className="mt-4 text-white/70 text-base sm:text-lg">
              I craft modern interfaces, delightful animations, and performant apps. Scroll to explore selected work and what I can do for you.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#projects" className="rounded-md bg-white text-black px-5 py-2 text-sm font-medium hover:bg-white/90 transition-colors">
                View projects
              </a>
              <a href="#contact" className="rounded-md border border-white/20 bg-white/5 px-5 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors">
                Contact me
              </a>
            </div>
            {splineError && (
              <p className="mt-4 text-xs text-white/50">3D scene failed to load. Showing a visual fallback.</p>
            )}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
    </section>
  )
}
