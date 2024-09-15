function showSection(sectionId) {
    const contentArea = document.getElementById('content-area');
    fetch(`../content/${sectionId}.html`)
        .then(response => response.text())
        .then(html => {
            contentArea.innerHTML = html;
        })
        .catch(error => {
            contentArea.innerHTML = "<p>Error loading content.</p>";
        });
}
