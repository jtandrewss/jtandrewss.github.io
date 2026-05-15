// load-snippets.js
async function loadHeader() {
  try {
    // Fetch the header snippet
    const response = await fetch('snippets/header.html');
    if (!response.ok) throw new Error('Failed to load header');
 
    // Get the HTML content
    const headerHtml = await response.text();
 
    // Inject into the container
    document.getElementById('header-container').innerHTML = headerHtml;
 
  } catch (error) {
    console.error('Error loading header:', error);
    // Fallback: Show a simple header if the snippet fails to load
    document.getElementById('header-container').innerHTML = '<header>Error loading header</header>';
  }
}
 
// Run when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadHeader);
