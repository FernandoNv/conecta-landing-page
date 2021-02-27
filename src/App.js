import HomeBanner from './components/HomeBanner/home-banner.component';

import './App.css';
import Products from './components/Products/products.component';
import BottomBanner from './components/BottomBanner/bottom-banner.component';
import FormArea from './components/FormArea/form-area.component';

function App() {
  return (
    <div className="App">
      <HomeBanner />
      <Products />
      <BottomBanner />
      <FormArea />
    </div>
  );
}

export default App;
