// JavaScript to dynamically update the footer with the current year and last modified date

// Function to set the current year
const setCurrentYear = () => {
    const yearElement = document.getElementById('currentyear');
    const currentYear = new Date().getFullYear();
    if (yearElement) {
        yearElement.textContent = currentYear;
    }
};

// Function to set the last modified date
const setLastModified = () => {
    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
    }
};

// Call the functions on page load
setCurrentYear();
setLastModified();
