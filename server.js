const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

// Use CORS to allow requests from the frontend
app.use(cors());
app.use(express.json());

// Replace with your actual API key from Google Developers Console
const YOUTUBE_API_KEY = 'live_MBHdJExJcHTlAGC60yzV0RMHnUr8Gbs3hdHtzl1muTvimPeDZBieYwLQ5hyxm9RO'; 

// YouTube Search Route
app.get('/api/search/youtube', async (req, res) => {
    const searchQuery = req.query.q;
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(searchQuery)}&key=${YOUTUBE_API_KEY}&maxResults=5`;

    try {
        const response = await axios.get(url);
        const youtubeResults = response.data.items.map(item => ({
            title: item.snippet.title,
            url: `https://www.youtube.com/watch?v=${item.id.videoId}`, // Corrected the YouTube video URL
            description: item.snippet.description
        }));
        res.json(youtubeResults);
    } catch (error) {
        res.status(500).send('Error fetching YouTube data');
    }
});

// Placeholder for Blogs Search Route
app.get('/api/search/blogs', (req, res) => {
    // Simulate blog results, replace with an actual blog API if needed
    const blogResults = [
        { title: 'Sample Blog 1', url: 'https://example.com/blog1', description: 'This is a sample blog.' },
        { title: 'Sample Blog 2', url: 'https://example.com/blog2', description: 'This is another sample blog.' }
    ];
    res.json(blogResults);
});

// Placeholder for Articles Search Route
app.get('/api/search/articles', (req, res) => {
    // Simulate article results, replace with an actual API if needed
    const articleResults = [
        { title: 'Sample Article 1', url: 'https://example.com/article1', description: 'This is a sample article.' },
        { title: 'Sample Article 2', url: 'https://example.com/article2', description: 'This is another sample article.' }
    ];
    res.json(articleResults);
});

// Placeholder for Academic Papers Search Route
app.get('/api/search/academic', (req, res) => {
    // Simulate academic paper results, replace with an actual API if needed
    const academicResults = [
        { title: 'Sample Paper 1', url: 'https://example.com/paper1', description: 'This is a sample academic paper.' },
        { title: 'Sample Paper 2', url: 'https://example.com/paper2', description: 'This is another sample academic paper.' }
    ];
    res.json(academicResults);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
