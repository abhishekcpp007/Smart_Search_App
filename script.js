async function performSearch() {
    const searchQuery = document.getElementById('searchQuery').value;
    const filterYoutube = document.getElementById('filterYoutube').checked;
    const filterBlogs = document.getElementById('filterBlogs').checked;
    const filterArticles = document.getElementById('filterArticles').checked;
    const filterAcademicPapers = document.getElementById('filterAcademicPapers').checked;

    let resultsHtml = '';

    // Fetch YouTube results if selected
    if (filterYoutube) {
        const youtubeResults = await fetch(`/api/search/youtube?q=${searchQuery}`).then(res => res.json());
        resultsHtml += '<h2>YouTube Results</h2>';
        youtubeResults.forEach(result => {
            resultsHtml += `<div><a href="${result.url}" target="_blank">${result.title}</a><p>${result.description}</p></div>`;
        });
    }

    // Fetch Blog results if selected
    if (filterBlogs) {
        const blogResults = await fetch(`/api/search/blogs?q=${searchQuery}`).then(res => res.json());
        resultsHtml += '<h2>Blog Results</h2>';
        blogResults.forEach(result => {
            resultsHtml += `<div><a href="${result.url}" target="_blank">${result.title}</a><p>${result.description}</p></div>`;
        });
    }

    // Fetch Articles if selected
    if (filterArticles) {
        const articleResults = await fetch(`/api/search/articles?q=${searchQuery}`).then(res => res.json());
        resultsHtml += '<h2>Article Results</h2>';
        articleResults.forEach(result => {
            resultsHtml += `<div><a href="${result.url}" target="_blank">${result.title}</a><p>${result.description}</p></div>`;
        });
    }

    // Fetch Academic Papers if selected
    if (filterAcademicPapers) {
        const academicResults = await fetch(`/api/search/academic?q=${searchQuery}`).then(res => res.json());
        resultsHtml += '<h2>Academic Paper Results</h2>';
        academicResults.forEach(result => {
            resultsHtml += `<div><a href="${result.url}" target="_blank">${result.title}</a><p>${result.description}</p></div>`;
        });
    }

    document.getElementById('searchResults').innerHTML = resultsHtml;
}
