import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router";

const TestPage = lazy(() => import('./test'));

export const Routing = () => (
    <Routes>
        <Route path='/' element={TestPage} />
        <Navigate to='/' />
    </Routes>
)