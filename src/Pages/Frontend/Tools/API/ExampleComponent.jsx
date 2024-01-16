// ExampleComponent.js
import React, { useEffect, useState } from 'react';
import { fetchData } from '../../../../Services/apiService';

const ExampleComponent = () => {
    const [data, setData] = useState(null);
    console.log("data", data)

    useEffect(() => {
        const fetchDataFromApi = async () => {
            try {
                const result = await fetchData();
                setData(result);
            } catch (error) {
                // Handle error
            }
        };

        fetchDataFromApi();
    }, []);

    return (
        <div>
            {data}
        </div>
    );
};

export default ExampleComponent;
