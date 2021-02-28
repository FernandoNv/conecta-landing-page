import HomeBanner from './components/HomeBanner/home-banner.component';

import './App.css';
import Products from './components/Products/products.component';
import BottomBanner from './components/BottomBanner/bottom-banner.component';
import FormArea from './components/FormArea/form-area.component';
import Footer from './components/Footer/footer.component';
import TestimonialArea from './components/TestimonialArea/testimonial-area.component';

function App() {
  return (
    <div className="App">
      <HomeBanner />
      <Products />
      <TestimonialArea />
      <BottomBanner />
      <FormArea />
      <Footer />
    </div>
  );
}

export default App;
