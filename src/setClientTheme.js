// Set the client theme based on the client stored in localStorage
export const setClientTheme = () => {
    // Retrieve client data from localStorage (mocking it for now)
    const client = JSON.parse(localStorage.getItem('client')) || {
        primary: '#ff7849', // default primary color
        secondary: '#13ce66', // default secondary color
    };

    // Get the root element
    const root = document.documentElement;

    // Set the CSS variables for primary and secondary colors
    root.style.setProperty('--color-primary', client.primary);
    root.style.setProperty('--color-secondary', client.secondary);
};
