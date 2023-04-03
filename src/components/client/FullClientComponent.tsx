'use client';

import { useEffect, useState } from 'react';

const FullClientComponent = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return <div className="text-xl text-black">{data && data.id}</div>;
};

export default FullClientComponent;
