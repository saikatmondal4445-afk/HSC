const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const subjects = require('./data/subjects');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet({
  contentSecurityPolicy: false, // Allow inline scripts for development
}));
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// API Routes
app.get('/api/subjects', (req, res) => {
  try {
    res.json({
      success: true,
      data: subjects
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch subjects'
    });
  }
});

app.get('/api/subjects/:id', (req, res) => {
  try {
    const subjectId = decodeURIComponent(req.params.id);
    const subject = subjects[subjectId];
    
    if (!subject) {
      return res.status(404).json({
        success: false,
        error: 'Subject not found'
      });
    }
    
    res.json({
      success: true,
      data: subject
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch subject'
    });
  }
});

// Serve index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 HSC Dashboard running at http://localhost:${PORT}`);
  console.log(`📊 API available at http://localhost:${PORT}/api/subjects`);
});
