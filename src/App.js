
import './App.css';
import { DataProvider } from './componenets/DataProvider';
import Footer from './componenets/Footer';
import FormInput from './componenets/FormInput';
import List from './componenets/List';

function App() {
  return (
    <DataProvider>
    <div className='container'>
    <div className="App">
       <h1>To Do List</h1>
       <FormInput/>
       <List/>
       <Footer/>
    </div>
    </div>
    </DataProvider>
  );
}

export default App;
