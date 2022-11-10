import logo from './logo.svg';
import './App.css';
import ContactDetail from './Contact_IN_Redux/ContactDetail';
import { Provider } from 'react-redux';
import store from './redux/contactStore';
function App() {
  return (
    <>
    <Provider store={store}>
    <ContactDetail></ContactDetail>
    </Provider>
    
    </>
  );
}

export default App;
