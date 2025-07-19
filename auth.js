// Simple password protection for development
// Add this script to your HTML head section

(function() {
    // Only run in production/preview
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        return;
    }
    
    const SITE_PASSWORD = 'dada2025'; // Change this password
    const AUTH_KEY = 'dada_auth';
    
    // Check if user is already authenticated
    if (sessionStorage.getItem(AUTH_KEY) === 'true') {
        return;
    }
    
    // Prompt for password
    const password = prompt('Enter password to view this preview site:');
    
    if (password === SITE_PASSWORD) {
        sessionStorage.setItem(AUTH_KEY, 'true');
    } else {
        document.body.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100vh; font-family: Arial; background: #f5f5f5;"><div style="text-align: center; padding: 2rem; background: white; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);"><h2>Access Denied</h2><p>This site is currently in preview mode.</p><button onclick="location.reload()" style="padding: 0.5rem 1rem; background: #FF8C00; color: white; border: none; border-radius: 4px; cursor: pointer;">Try Again</button></div></div>';
    }
})(); 