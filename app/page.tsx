export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground font-sans px-6">
      <h1 className="text-5xl font-bold mb-6 text-center">
        Learn English online with Jose Collas, native English teacher.
      </h1>

      <p className="text-lg mb-10 max-w-2xl text-center">
        Master English from anywhere in the world.
      </p>

      <div className="flex gap-4">
        <a
          href="/about_jose"
          className="px-6 py-3 bg-foreground text-background rounded-lg shadow hover:opacity-90 transition"
        >
          About Jose
        </a>
        <a
          href="/contact"
          className="px-6 py-3 border border-foreground text-foreground rounded-lg hover:bg-foreground hover:text-background transition"
        >
          Contact Us
        </a>
      </div>
    </section>
  )
}
