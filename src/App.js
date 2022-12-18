

// react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProviderContainer from "./context/contextController";
// pages
import 
{HomePage,
CategoryPage,
CartPage,
OneCardPage,
AboutPage,
ErrorPage} from "./pages/import";

// layout

import Layout from "./components/layout/Layout";





function App() {
  return (
    <div className="App">
      <ProviderContainer>
     <BrowserRouter>
     <Routes>
     
      <Route path="/" element={<Layout/>}>
     
      <Route path="/" element={<HomePage/>}/>
      <Route path="/category/:category" element={<CategoryPage/>}/>
      <Route path = "/product/:id" element = {<OneCardPage/>} />
      <Route path="/cart" element={<CartPage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="*" element={<ErrorPage/>}/>
        
      </Route>
      
     </Routes>
     </BrowserRouter>
     </ProviderContainer>
    </div>
  );
}

export default App;
