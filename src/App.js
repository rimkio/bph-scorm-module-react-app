import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path='/module-1' element={<Module_1 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
