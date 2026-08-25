export default function AboutJosePage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground font-sans px-6">
      <h1 className="text-4xl font-bold mb-6">About Jose</h1>
      <p className="text-lg max-w-2xl text-center mb-8">
        Jose teaches English online and in Peru.
      </p>
      <p className="text-lg max-w-2xl text-center mb-8">
        Born in Lima, Peru and raised in Cleveland, Ohio, Jose brings a unique
        bicultural perspective to his teaching. His journey has been shaped by
        both South American roots and Midwestern upbringing.
      </p>

      <p className="text-lg max-w-2xl text-center mb-8">
        Jose taught at Esperanza in Cleveland, Ohio, where he supported students
        in developing their English skills and achieving academic success. That
        experience deepened his commitment to education and inspired his current
        work teaching English online and in Peru.
      </p>

      <a
        href="/contact"
        className="px-6 py-3 bg-foreground text-background rounded-lg shadow hover:opacity-90 transition"
      >
        Get in Touch
      </a>
    </section>
  );
}
