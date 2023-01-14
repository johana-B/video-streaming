const express = require('express');
const videoRouter = require('./routes/videoStreamRoute');
const app = express();
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.use('/video', videoRouter)


const port = process.env.PORT || 5000
app.listen(port, console.log(`server is listening port ${port} ...`))