import { useState } from "react"
import axios from "axios"
import BackHome from "../components/BackHome"

export default function AdminBookings() {
  const [password, setPassword] = useState("")
  const [bookings, setBookings] = useState([])
  const [loading, setLoading] = useState(false)
  const [authorized, setAuthorized] = useState(false)

  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const [expandedId, setExpandedId] = useState(null)
const [showPassword, setShowPassword] = useState(false)
  const fetchBookings = async (pageNumber = 1) => {
    try {
      setLoading(true)

      const res = await axios.post(
        "https://oxadmedia.online/api/fetchhenna",
        {
          password,
          page: pageNumber,
        }
      )

      if (res.data.success) {
        setBookings(res.data.data)
        setAuthorized(true)
        setPage(res.data.pagination.page)
        setTotalPages(res.data.pagination.totalPages)
      } else {
        alert(res.data.message)
      }

    } catch (err) {
      alert("Wrong password or server error")
    } finally {
      setLoading(false)
    }
  }

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }
return (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-100 px-4 pt-20 pb-10 relative overflow-hidden">

    <BackHome />

    {/* Background Glow */}
    <div className="absolute top-0 left-0 w-44 h-44 bg-gray-200/40 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 right-0 w-56 h-56 bg-slate-300/20 rounded-full blur-3xl"></div>

    {/* LOGIN SCREEN */}
    {!authorized ? (
      <div className="max-w-sm mx-auto mt-12 relative z-10">

        <div className="bg-white/85 backdrop-blur rounded-3xl shadow-2xl border border-white/70 p-6">

          <p className="text-xs uppercase tracking-[0.35em] text-gray-500 text-center mb-2">
            Secure Access
          </p>

          <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
            Admin Login
          </h1>

          {/* Password */}
          <div className="relative mb-4">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 pr-16 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500"
            >
              {showPassword ? "Hide" : "Show"}
            </button>

          </div>

          <button
            onClick={() => fetchBookings(1)}
            disabled={loading}
            className="w-full py-3 rounded-xl bg-black text-white font-medium shadow-lg"
          >
            {loading ? "Checking..." : "View Bookings"}
          </button>

        </div>
      </div>
    ) : (
      /* BOOKINGS SCREEN */
      <div className="max-w-md mx-auto relative z-10">

        <div className="text-center mb-6">
          <p className="text-xs uppercase tracking-[0.35em] text-gray-500 mb-2">
            Dashboard
          </p>

          <h1 className="text-3xl font-semibold text-gray-800">
            All Bookings
          </h1>
        </div>

        {/* Cards */}
        <div className="space-y-3">

          {bookings.map((item, index) => {
            const serial = (page - 1) * 5 + index + 1
            const expanded = expandedId === item.id

            return (
              <div
                key={item.id}
                onClick={() => toggleExpand(item.id)}
                className="bg-white/85 backdrop-blur rounded-2xl border border-white/70 shadow-lg p-4 cursor-pointer"
              >
                {/* Compact */}
                <div className="flex justify-between items-center">

                  <div>
                    <p className="font-semibold text-gray-800">
                      {serial}. {item.customer_name}
                    </p>

                    <p className="text-sm text-gray-600 capitalize">
                      {item.service_type}
                    </p>

                    <p className="text-sm text-gray-500">
                      {new Date(item.booking_date).toLocaleDateString(
                        "en-GB",
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }
                      )}
                    </p>
                  </div>

                  <span className="text-xl text-gray-500">
                    {expanded ? "−" : "+"}
                  </span>

                </div>

                {/* Expanded */}
                {expanded && (
                  <div className="mt-4 pt-3 border-t text-sm space-y-2">

                    <p><strong>Mobile:</strong> {item.mobile}</p>
                    <p><strong>Members:</strong> {item.members_count}</p>
                    <p><strong>Location:</strong> {item.location_type}</p>

                    {item.landmark && (
                      <p><strong>Landmark:</strong> {item.landmark}</p>
                    )}

                    <p><strong>Address:</strong> {item.full_address}</p>
                    <p><strong>Status:</strong> {item.status}</p>

                  </div>
                )}

              </div>
            )
          })}

        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-8 flex-wrap">

          <button
            disabled={page === 1}
            onClick={() => fetchBookings(page - 1)}
            className="px-4 py-2 rounded-xl bg-white shadow disabled:opacity-40"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => fetchBookings(i + 1)}
              className={`px-4 py-2 rounded-xl shadow ${
                page === i + 1
                  ? "bg-black text-white"
                  : "bg-white"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={page === totalPages}
            onClick={() => fetchBookings(page + 1)}
            className="px-4 py-2 rounded-xl bg-white shadow disabled:opacity-40"
          >
            Next
          </button>

        </div>

      </div>
    )}

  </div>
)
}