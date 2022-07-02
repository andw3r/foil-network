import Footer from "./components/Footer/Footer";
import Airdrops from "./containers/Airdrops/Airdrops";
import Header from "./containers/Header/Header";
import Blockchain from "./containers/Blockchain/Blockchain";
import Subscribe from "./containers/Subscribe/Subscribe";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Header />
      <main>
        <Blockchain />
        <Airdrops />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
};

export default App;
