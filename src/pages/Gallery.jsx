import BackHome from "../components/BackHome"


export default function Gallery() {
const images = [
  "https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?w=200&q=50&fm=webp",
  "https://images.unsplash.com/photo-1730003873829-09b4b16444c1?w=200&q=50&fm=webp",
  "https://images.unsplash.com/photo-1525135850648-b42365991054?w=200&q=50&fm=webp",
  "https://images.unsplash.com/photo-1530082625928-db66d39c5a21?w=200&q=50&fm=webp",
]

  return (
<div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 px-4 pt-20 pb-10 relative overflow-hidden">

  <BackHome />

  {/* Background Blurs */}
  <div className="absolute top-0 left-0 w-40 h-40 bg-pink-200/30 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-52 h-52 bg-rose-300/20 rounded-full blur-3xl"></div>

  <div className="relative z-10 max-w-md mx-auto">

    {/* Heading */}
    <div className="text-center mb-8">

      <p className="text-xs uppercase tracking-[0.35em] text-rose-500 mb-2">
        Portfolio
      </p>

      <h1 className="text-3xl font-semibold text-gray-800">
        Mehendi Gallery 🌿
      </h1>

      <p className="text-sm text-gray-500 mt-2">
        Elegant designs crafted with detail & beauty
      </p>

    </div>

    {/* Grid */}
    <div className="grid grid-cols-2 gap-4">

      {images.map((img, index) => (
        <div
          key={index}
          className="group rounded-2xl overflow-hidden bg-white/80 backdrop-blur border border-white/70 shadow-lg"
        >
          <img
            src={img}
            alt="mehendi design"
            loading="lazy"
            className="w-full h-44 object-cover group-hover:scale-110 transition duration-500"
          />
        </div>
      ))}

    </div>

  </div>
</div>
  )
}