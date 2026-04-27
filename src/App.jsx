import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Order from "./pages/Order"
import Success from "./pages/Success"
import Gallery from "./pages/Gallery"

function App() {
  return (
    <BrowserRouter basename="/sahibahenna">
      <div className="min-h-screen bg-gray-100">

        {/* Navbar */}
        {/* <nav className="bg-white shadow p-4 flex gap-4 justify-center">
          <Link to="/" className="text-blue-600 font-semibold">Home</Link>
          <Link to="/order" className="text-blue-600 font-semibold">Order</Link>
        </nav> */}

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
<Route path="/order/:type" element={<Order />} />
<Route path="/success" element={<Success />} />
<Route path="/gallery" element={<Gallery />} />

        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App