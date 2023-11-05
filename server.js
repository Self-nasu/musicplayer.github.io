const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const musicFolder = path.join(__dirname, 'public', 'music');

app.get('/music', (req, res) => {
  // Read the contents of the music folder
  fs.readdir(musicFolder, (err, files) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to read music folder' });
      return;
    }

    // Prepare the music data
    const musicData = files.map((file) => {
      const fileName = file.replace(/\.[^/.]+$/, ''); // Removing file extension
      const [name, author] = fileName.split(' - ').map((str) => str.trim());
      return { name, author };
    });

    // Send the music data as the API response
    res.json(musicData);
  });
});

// Serve static files
app.use(express.static('public'));

// Start the server
const port = 5500;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
