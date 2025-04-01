function showTab(tabId) {
    let tabs = document.querySelectorAll('.about, .skills, .services');
    tabs.forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
}
