import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import { HomeScreen } from "./HomeScreen";
import About from "./component/About";
import CryptoTable from "./component/CryptoTable";

const App = () => {
  return (
    <Router>
      <Header />
      <MainContent>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/market" element={<CryptoTable />} />
        </Routes>
      </MainContent>
      <About />
      <Footer />
    </Router>
  );
};

export default App;
