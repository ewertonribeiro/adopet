import { BrowserRouter, Route, Routes as R } from 'react-router-dom';
import HomePage from '../Pages/Home';

export default function Routes() {
    return (
        <BrowserRouter>
            <R>
                <Route path="/" element={<HomePage />} />
            </R>
        </BrowserRouter>
    );
}
