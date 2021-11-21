import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AllEmployees from './components/employees/AllEmployees';
import AddEmployee from './components/employees/AddEmployee';
import ManagmentEmployees from './components/employees/ManagmentEmployees';
import OsEmployees from './components/employees/OsEmployees';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/employees" element={<AllEmployees />} />
        <Route path="/addemployee" element={<AddEmployee />} />
        <Route path="/managment" element={<ManagmentEmployees />} />
        <Route path="/os" element={<OsEmployees />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;