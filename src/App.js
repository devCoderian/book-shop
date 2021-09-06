import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";
import Order from "./components/Order";
import 'primereact/resources/themes/mdc-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import AppStateProvider from "./providers/AppStateProvider";

function App() {
  return (
   <>
    <AppStateProvider>
    <Header />
    <div className="p-d-flex p-ai-start">
    {/* <div className="p-mr-2" > */}
        <List />
        
        <div className="p-d-flex p-ai-end" >
       <Order />
       </div>
     </div>
     <Footer />
     </AppStateProvider>

   </>
  );
}

export default App;
