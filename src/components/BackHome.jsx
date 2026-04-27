import { useNavigate } from "react-router-dom"

export default function BackHome() {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate("/")}
      className="fixed top-4 left-4 z-50 bg-white shadow-md rounded-full px-3 py-2 flex items-center gap-1 hover:shadow-lg transition"
    >
      <span className="text-xl">←</span>
      <span className="text-sm font-medium">Home</span>
    </button>
  )
}