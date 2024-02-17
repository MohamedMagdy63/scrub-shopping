import MainColors from '../Components/MainColors';
import MainLayout from '../Components/MainLayout';
import AllProducts from '../Components/AllProducts';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


function Home() {
  return (
    <>
      <Navbar/>
      <MainLayout/>
      <MainColors/>
      <AllProducts/>
      <Footer/>

    </>
  );
}

export default Home;
