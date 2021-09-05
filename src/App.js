import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";
import Order from "./components/Order";
import 'primereact/resources/themes/mdc-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

function App() {
  return (
   <>

    <Header />
    <div className="p-d-flex p-ai-start">
    <div className="p-mr-2" >
        <List />
        </div>
      <div className="p-mr-2"  style={{width: '700px'}}>
       <Order />
       </div>
     </div>
     <Footer />
  

   </>
  );
}

export default App;
