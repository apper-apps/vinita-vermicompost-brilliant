import { BrowserRouter as Router } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import Header from "@/components/organisms/Header"
import Hero from "@/components/organisms/Hero"
import Products from "@/components/organisms/Products"
import About from "@/components/organisms/About"
import Testimonials from "@/components/organisms/Testimonials"
import Contact from "@/components/organisms/Contact"
import Footer from "@/components/organisms/Footer"
import WhatsAppButton from "@/components/molecules/WhatsAppButton"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background font-body">
        <Header />
        <main>
          <Hero />
          <Products />
          <About />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
        
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </Router>
  )
}

export default App