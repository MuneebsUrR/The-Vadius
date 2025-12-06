"use client"

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description:
        "We dive deep into understanding your brand, market position, and business goals to create a customized strategy.",
    },
    {
      number: "02",
      title: "Implementation",
      description:
        "Our team brings your strategy to life using cutting-edge SaaS solutions tailored to your specific needs.",
    },
    {
      number: "03",
      title: "Optimization & Growth",
      description:
        "We continuously monitor, analyze, and refine your approach to ensure maximum impact and sustained growth.",
    },
    {
      number: "04",
      title: "Scale & Expand",
      description:
        "With solid foundations in place, we help you scale your brand presence across new markets and channels.",
    },
  ]

  return (
    <section className="py-24 px-6 md:px-8 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 md:mb-28">
          <p className="text-sm font-medium tracking-widest text-primary mb-4">HOW WE WORK</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-foreground mx-auto">
            Your path to brand excellence
          </h2>
        </div>

        <div className="space-y-12 md:space-y-16">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-8 md:gap-12 items-start group">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center border-2 border-primary rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  <span className="text-2xl md:text-3xl font-light text-primary group-hover:text-primary-foreground">
                    {step.number}
                  </span>
                </div>
              </div>
              <div className="flex-grow pt-2">
                <h3 className="text-2xl md:text-3xl font-medium text-foreground mb-4">{step.title}</h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="h-12 md:h-16 flex justify-center mt-8 md:mt-12">
                    <div className="w-0.5 h-full bg-gradient-to-b from-primary to-transparent opacity-30" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
