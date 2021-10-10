import express from 'express';

const app = express();

app.get('/', (req, res) => {
	res.send('Hello world.');
});

app.listen(3000, ()=> {
	console.log("Server stated on http://0.0.0.0:3000.");
})