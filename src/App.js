import './App.css';
import Header from './components/Header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Catalog } from './pages/Catalog/Catalog'
import Navbar from './components/Navbar/Navbar';
import { Payment } from './pages/Payment/Payment';
import Footer from './components/Footer/Footer';
import { ContactsPage } from './pages/ContactsPage/ContactsPage';
import { News } from './pages/News/News';
import Regestration from './pages/Regestration/Registration';
import Products from './pages/Products/Products';
import AuthPopup from './components/AuthPopup/AuthPopup';
import Profile from './pages/Profile/Profile';

function App() {
   return (
      <Router>
         <div className="App">
            <Header />
            <Navbar />
            <Routes>
               <Route path='/' element={<Catalog />} />
               <Route path='/payment' element={<Payment />} />
               <Route path='/contacts' element={<ContactsPage />} />
               <Route path='/news' element={<News />} />
               <Route path='/regestration' element={<Regestration />} />
               <Route path='/product/:id' element={<Products />} />
               <Route path='/profile/:id' element={<Profile />} />
            </Routes>
            <Footer />
            <AuthPopup />
         </div>
      </Router>
   );
}

export default App;
