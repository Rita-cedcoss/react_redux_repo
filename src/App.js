import logo from './logo.svg';
import './App.css';
import GetApi from './React_Api_Task/GetApi';
import './React_Api_Task/Components.css'
import PostApi from './React_Api_Task/PostApi';
import AsyncWait from './React_Api_Task/AsyncWait';
import AxiosMethod from './React_Api_Task/AxiosMethod';
function App() {
  return (
    <>
    <h1>Task1: Peform a GET request to fetch posts data.</h1>
    <GetApi></GetApi>
    <h1>Task2: Perform a POST request to add a post.</h1>
    <PostApi></PostApi>
    <h1>Task4:Use async and await for the above created three methods and implement the same functionality</h1>
    <AsyncWait></AsyncWait>
    <h1>Task5:Implement the above functionality using axios.</h1>
    <AxiosMethod></AxiosMethod>
    </>
  );
}

export default App;
