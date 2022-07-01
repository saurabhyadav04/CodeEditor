import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import EditorPage from "./pages/EditorPage";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
    <div>
          <Toaster position="top-right"  
          toastOptions={{
                        success: {
                            theme: {            
                                primary: '#4aed88',
                            },
                        },
                    }}>
                  </Toaster>
       </div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/Editor/:roomId" element={<EditorPage />}></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
