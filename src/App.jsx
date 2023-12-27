
import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Navbar from "./components/navbar/navbar"
import Footer from "./components/footer"
import BenefitPage from "./pages/benefitPage"
import VehicleDetail from "./pages/vehicleDetail"

function App() {


    return (
        <>
            <div className="bg-gradient-to-t from-[#923f03] via-[#7b3502] to-secondary-color flex flex-col w-full  justify-center items-center">
                <Navbar />
                <Routes>
                    <Route path="/" element={ <Home />}/>
                    <Route path="/benefits" element={<BenefitPage />} />
                    <Route path="/vehicle-details" element={<VehicleDetail />} />
                    
                </Routes>
            </div>
            <Footer />
        </>
    )
}

export default App
