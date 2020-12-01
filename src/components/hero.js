import React from "react"

const Hero = ({ title, subtitle, className }) => {
  return (
    <section className={className}>
      <div className="hero-body pl-0">
        <h1 className="title">{title}</h1>
        <h2 className="subtitle">{subtitle}</h2>
      </div>
    </section>
  )
}

export default Hero
