// scripts.js
function showTab(tabId) {
    // Remove active class from all tab contents and buttons
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    
    // Add active class to the selected tab content and button
    document.getElementById(tabId).classList.add('active');
    event.target.classList.add('active');
}
