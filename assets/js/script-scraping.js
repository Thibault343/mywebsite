// Rename your file to use .mjs or add "type": "module" in package.json
const fs = require('fs');
const nf = require('node-fetch')

async function fetchHTML(url) {
    try {
        const response = await fetch(url);
        const html = await response.text();
        fs.writeFileSync("./reponse.txt", html)
        console.log(html); // Output the HTML content
    } catch (error) {
        console.error('Error fetching the URL:', error);
    }
}

// Replace with the target URL
fetchHTML('https://www.youtube.com/@LofiGirl');