// src/features/demo/DemoComponent.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDemoDataRequest } from './demoSlice';

const DemoComponent = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.demo);

  useEffect(() => {
    dispatch(fetchDemoDataRequest());
  }, [dispatch]);

  return (
    <div>
      <h1>Demo Data</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DemoComponent;
