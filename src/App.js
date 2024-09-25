import React, { useEffect, useState } from 'react';
import './App.css';
import { setClientTheme } from './setClientTheme';

const App = () => {
  const client1 = {
    name: 'Infosys',
    primary: '#1fb6ff',
    secondary: '#7e5bef',
  };

  const client2 = {
    name: 'TCS',
    primary: '#ff7849',
    secondary: '#13ce66',
  };

  const client3 = {
    name: 'Wipro',
    primary: '#ff49db',
    secondary: '#ffc82c',
  };

  const clients = {
    client1,
    client2,
    client3,
  };

  const [selectedClient, setSelectedClient] = useState('client1');

  useEffect(() => {
    // Set the client in localStorage based on the selected client
    localStorage.setItem('client', JSON.stringify(clients[selectedClient]));

    // Apply the theme after setting the client in localStorage
    setClientTheme();
  }, [selectedClient]);

  const handleClientChange = (e) => {
    setSelectedClient(e.target.value);
  };

  return (
    <div className="App min-h-screen">
      <header className="bg-primary text-white p-6 text-center shadow-md">
        <h2 className="text-3xl font-bold">Welcome to Client-Specific Theming</h2>
      </header>
      <main className="p-6 text-center">
        <div className="mb-8">
          <label htmlFor="client-select" className="text-secondary text-lg font-semibold">
            Select Client:
          </label>
          <select
            id="client-select"
            className="ml-4 p-2 border-2 rounded-lg"
            value={selectedClient}
            onChange={handleClientChange}
            style={{ backgroundColor: clients[selectedClient].primary, color: 'white' }}
          >
            {Object.keys(clients).map((clientKey) => (
              <option
                key={clientKey}
                value={clientKey}
                style={{
                  backgroundColor: clients[clientKey].primary,
                  color: 'white',
                  border:'none'
                }}
              >
                {clients[clientKey].name}
              </option>
            ))}
          </select>
        </div>

        <p className="text-secondary text-xl mb-8">
          This app is styled with dynamic theming based on the client’s colors!
        </p>

        <div className="mt-8">
          <h2 className="text-primary text-2xl font-semibold mb-4">Primary Color Example</h2>
          <p className="text-secondary text-lg">Secondary Color Example</p>
        </div>
      </main>
    </div>
  );
};

export default App;
