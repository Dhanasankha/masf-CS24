
import { BrowserRouter as Router, Route, Routes , Link, BrowserRouter} from "react-router-dom";
// import AppbarContorller from './components/Appbar/AppbarContorller';

// import AppDetails from './view/AppDetails';
// import PredictionPage from './view/PredictionPage';
// import BaseViewController from './view/BaseView/BaseViewController';
import SingUpContorller from './components/SingUp/SingUpContorller';
import LogInController from './components/LogIn/LogInController';
import AppbarContorller from './components/Appbar/AppbarControlller';

function App() {
  return ( 
    
    <BrowserRouter>
      <AppbarContorller/>
      <main >
        <Routes>
          <Route index element = {<SingUpContorller/>} />
          <Route path="home" element = {<LogInController/>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
