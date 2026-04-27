import { useLocation, Link } from "react-router-dom"

export default function Success() {
  const { state } = useLocation()

  if (!state) {
    return <div className="p-6">No booking data found</div>
  }

  return (
 <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 px-4 flex items-center justify-center relative overflow-hidden">

  {/* Background Glow */}
  <div className="absolute top-0 left-0 w-44 h-44 bg-green-200/30 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-56 h-56 bg-emerald-300/20 rounded-full blur-3xl"></div>

  <div className="relative z-10 w-full max-w-md">

    <div className="bg-white/85 backdrop-blur rounded-3xl shadow-2xl border border-white/70 p-7 text-center">

      {/* Icon */}
      <div className="text-5xl mb-4">
        🎉
      </div>

      {/* Heading */}
      <p className="text-xs uppercase tracking-[0.35em] text-green-600 mb-2">
        Confirmed
      </p>

      <h1 className="text-3xl font-semibold text-gray-800 mb-4">
        Booking Successful!
      </h1>

      {/* Greeting */}
      <p className="text-lg text-gray-700">
        Hi <span className="font-semibold">{state.name}</span>,
      </p>

      <p className="text-gray-500 mt-2 leading-6">
        Your <span className="capitalize font-medium">{state.service}</span> booking has been confirmed.
      </p>

      {/* Details Card */}
      <div className="mt-6 bg-green-50 rounded-2xl p-4 text-left space-y-3 border border-green-100">

        <p className="text-sm text-gray-700">
          <span className="font-medium">📅 Date:</span> {state.date}
        </p>

        <p className="text-sm text-gray-700">
          <span className="font-medium">📍 Location:</span> {state.location}
        </p>

        <p className="text-sm text-gray-500 leading-6">
          {state.address}
        </p>

      </div>

      {/* Footer */}
      <p className="text-xs text-gray-400 mt-5">
        We look forward to serving you beautifully.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="mt-6 inline-block w-full py-3 rounded-2xl bg-black text-white font-medium shadow-lg hover:opacity-95 transition"
      >
        Back to Home
      </Link>

    </div>

  </div>
</div>
  )
}