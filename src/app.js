import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import StarterPage from "./pages/StarterPage";
import "./app.css";

const root = createRoot(document.querySelector('#root'));

class App extends React.Component {
    render() {
        return (
            <Router>
                <StarterPage />
            </Router>
        )
    }
}

root.render(<App />);