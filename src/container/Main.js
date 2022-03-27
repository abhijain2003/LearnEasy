import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import Learn from '../pages/Learn'
import Maths from '../pages/Maths'
import Wordle from '../pages/Wordle'
import Chatroom from '../pages/Chatroom'
import Footer from '../components/Footer'

function Main() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/learn" element={<Learn />} />
                <Route path="/maths" element={<Maths />} />
                <Route path="/wordle" element={<Wordle />} />
                <Route path="/chat" element={<Chatroom />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default Main;
