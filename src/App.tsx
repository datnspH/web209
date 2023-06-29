import { useState } from "react";
import "./App.css";
import { Form, List } from "./components";

function App() {
    const [cars, setCars] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const addCart = (car: any) => {};
    const removeCar = (id: any) => {};
    const updateCar = (car: any) => {};
    const listCar = () => {};
    return (
        <>
            <div className="w-96 border border-gray-500 px-2 mx-auto">
                <Form />
                <List />
            </div>
        </>
    );
}

export default App;
