const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const submissions = [
  { id: 1, studentName: 'Saurabh Sngh', submissionTitle: 'Math Notes', status: 'Pending' },
  { id: 2, studentName: 'Sandeep', submissionTitle: 'Physics Paper', status: 'Pending' },
  
];


app.get('/api/getSubmissions', (req, res) => {
  res.json(submissions);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
