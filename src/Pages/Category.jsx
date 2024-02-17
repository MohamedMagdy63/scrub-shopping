import CategoryProducts from '../Components/CategoryProducts';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';



function Category() {
  const pathname = window.location.pathname;
  return (
    <>
      <Navbar/>
      <CategoryProducts location={pathname}/>
      <Footer/>
    </>
  );
}

export default Category;