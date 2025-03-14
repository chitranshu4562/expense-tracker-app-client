import {BrowserRouter, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationPage from "./pages/navigation-page/NavigationPage.jsx";

function App() {

  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<NavigationPage/>} />
              </Routes>
          </BrowserRouter>
      </>
  )
}

export default App
