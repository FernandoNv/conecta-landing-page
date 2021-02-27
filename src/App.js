import HomeBanner from './components/HomeBanner/home-banner.component';

import './App.css';
import Products from './components/Products/products.component';
import BottomBanner from './components/BottomBanner/bottom-banner.component';

function App() {
  return (
    <div className="App">
      <HomeBanner />
      <Products />
      <BottomBanner />
    </div>
  );
}

export default App;
