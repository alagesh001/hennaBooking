import { Link } from "react-router-dom"

export default function Home() {
  const menuItems = [
   { name: "Book Guest Henna", path: "/order/guest" },
  { name: "Book Bridal Henna", path: "/order/bridal" },
    { name: "Gallery", path: "/gallery" },
// { 
//   name: "Instagram", 
//   path: "https://instagram.com/sahiba__khan7116/", 
//   external: true 
// }  
]

  return (
   <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 px-5 py-8 flex items-center justify-center overflow-hidden relative">

  {/* Soft background blobs */}
  <div className="absolute top-0 left-0 w-40 h-40 bg-pink-200/30 rounded-full blur-3xl"></div>
  <div className="absolute bottom-10 right-0 w-52 h-52 bg-rose-300/20 rounded-full blur-3xl"></div>

  <div className="w-full max-w-sm relative z-10">

    {/* Header */}
    <div className="text-center mb-10">

      <p className="text-sm tracking-[0.35em] uppercase text-rose-500 mb-3">
        Premium Mehendi Art
      </p>
 {/* Highlight Badge (Top) */}
  <div className="flex justify-center">
    <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
      🚚 Home/Hall Service Available
    </span>
  </div>

      <h1 className="text-4xl font-semibold text-gray-800 leading-tight">
        Sahiba's
      </h1>

      <h2 className="text-3xl italic text-rose-600 font-light mt-1">
        Henna Studio 🌿
      </h2>

      <p className="text-gray-500 text-sm mt-4 px-4 leading-6">
        Elegant bridal and guest henna designs crafted with beauty, detail and tradition.
      </p>

    </div>

    {/* Menu Cards */}
    <div className="space-y-4">

      {menuItems.map((item, index) =>
        item.external ? (
          <a
            key={index}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            className="group block w-full rounded-2xl bg-black text-white px-5 py-4 shadow-xl"
          >
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium">{item.name}</span>
              <span className="group-hover:translate-x-1 transition text-xl">
                ↗
              </span>
            </div>
          </a>
        ) : (
          <Link
            key={index}
            to={item.path}
            className="group block w-full rounded-2xl border border-white/60 bg-white/80 backdrop-blur px-5 py-4 shadow-lg hover:shadow-xl transition"
          >
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium text-gray-800">
                {item.name}
              </span>

              <span className="text-rose-500 text-xl group-hover:translate-x-1 transition">
                →
              </span>
            </div>
          </Link>
        )
      )}

    </div>
<div className="mt-10 text-center space-y-4">
 <div className="w-12 h-[1px] bg-gray-300 mx-auto"></div>
    {/* Footer */}

  {/* Promo Line */}
  <p className="text-xs text-gray-500">
    Want a website like this?
  </p>

  {/* CTA */}
  <p className="text-sm font-semibold text-blue-600 hover:underline cursor-pointer">
    Get your business online with Oxad Media 🚀
  </p>

  {/* Contact */}
  <p className="text-xs text-gray-400">
    oxadmedia@gmail.com
  </p>



  </div>
    </div>
</div>
  )
}