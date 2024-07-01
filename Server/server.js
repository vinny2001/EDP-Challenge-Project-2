import express from 'express';

//Initialize Express server on Port 3000
const app = express();
const PORT = 3000;

app.get('/api/planets', async (req, res) => {
    try {
        let testObj = {'character': 'Yoda'};
        res.json(testObj);
    
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Execute order 66 ☹");
    }
});

// BOTTOM OF FILE --- Server is started
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});