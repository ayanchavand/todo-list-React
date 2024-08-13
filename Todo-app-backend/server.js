const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Adjust the path to your frontend build directory
const frontendBuildPath = path.join(__dirname, '..', 'Todo-app-frontend', 'dist');

// Serve static files from the frontend build directory
app.use(express.static(frontendBuildPath));

// Serve the index.html file for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(frontendBuildPath, 'index.html'));
});
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});