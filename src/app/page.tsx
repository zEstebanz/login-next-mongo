
function HomePage() {

  return (
    <section className="mt-32 mb-8">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Bienvenido</h1>
        <p className="text-lg mb-8">Explora historias interesantes y contenido fascinante.</p>
        <a href="/blog" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-xl">Explorar el Blog</a>
      </div>
    </section>
  )
}

export default HomePage;