import { useParams, useNavigate } from "react-router-dom"
import { useState } from "react"
import BackHome from "../components/BackHome"
import axios from "axios"

export default function Order() {
  const { type } = useParams()
  const navigate = useNavigate()

  const today = new Date().toISOString().split("T")[0]

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    members: "",
    date: today, // 👈 default today
    location: "",
    landmark: "",
    address: "",
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

 const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)

      const payload = {
        service_type: type,
        customer_name: form.name,
        mobile: form.mobile,
        members_count: form.members,
        booking_date: form.date,
        location_type: form.location,
        landmark: form.landmark,
        full_address: form.address,
      }

      const res = await axios.post(
        "https://oxadmedia.online/api/bookingshenna",
        payload
      )

      if (res.data.success) {
        navigate("/success", {
          state: {
            ...form,
            service: type,
            booking_id: res.data.booking_id,
          },
        })
      } else {
        alert(res.data.message)
      }

    } catch (err) {
      console.error(err)
      alert("Booking failed")
    } finally {
      setLoading(false)
    }
  }
  return (
    
 <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 px-4 pt-20 pb-8 relative overflow-hidden">

  <BackHome />

  {/* Background Glow */}
  <div className="absolute top-0 left-0 w-44 h-44 bg-pink-200/30 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-52 h-52 bg-rose-300/20 rounded-full blur-3xl"></div>

  <div className="w-full max-w-md mx-auto relative z-10">

    {/* Card */}
    <div className="bg-white/85 backdrop-blur rounded-3xl shadow-2xl border border-white/70 p-6">

      {/* Header */}
      <div className="text-center mb-6">

        <p className="text-xs uppercase tracking-[0.35em] text-rose-500 mb-2">
          Home Service
        </p>

        <h1 className="text-3xl font-semibold text-gray-800 capitalize leading-tight">
          {type} Henna
        </h1>

        <p className="text-sm text-gray-500 mt-2">
          Fill details to confirm your booking
        </p>

      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-rose-300"
          required
        />

        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          value={form.mobile}
          onChange={handleChange}
          className="w-full p-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-rose-300"
          required
        />

        <input
          type="number"
          name="members"
          placeholder="How many members?"
          value={form.members}
          onChange={handleChange}
          className="w-full p-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-rose-300"
          required
        />

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="w-full p-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-rose-300"
          required
        />

        <select
          name="location"
          value={form.location}
          onChange={handleChange}
          className="w-full p-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-rose-300"
          required
        >
          <option value="">Select Location</option>
          <option>Home</option>
          <option>Banquet Hall</option>
          <option>Hotel</option>
          <option>Other</option>
        </select>

        <input
          type="text"
          name="landmark"
          placeholder="Nearby Landmark"
          value={form.landmark}
          onChange={handleChange}
          className="w-full p-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-rose-300"
        />

        <textarea
          name="address"
          placeholder="Full Address"
          value={form.address}
          onChange={handleChange}
          rows="3"
          className="w-full p-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-rose-300"
          required
        />

        <button
          disabled={loading}
          className="w-full py-3 rounded-xl bg-black text-white font-medium shadow-lg hover:opacity-95 transition"
        >
          {loading ? "Booking..." : "Book Now"}
        </button>

      </form>

    </div>
  </div>
</div>
  )
}