import Footer from "./components/Footer";
import Header from "./components/Header";
import 'primereact/resources/themes/mdc-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import AppStateProvider from "./providers/AppStateProvider";
import {Route, BrowserRouter} from 'react-router-dom';
import Contents from "./components/Contents";
import Signin from "./components/Signin";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
function App() {
  return (
   <>
   <BrowserRouter>
    <AppStateProvider>
      <Header />
      {/* <Route exact path ='/cart' component ={Cart} /> */}
      {/* <Route exact path ='/signin' component ={Signin} /> */}
      <Route exact path ='/' component ={Contents} />
      {/* <Route path={"*"} component ={NotFound} /> */}
      <Footer />
     </AppStateProvider>
    </BrowserRouter>
   </>
  );
}

export default App;
