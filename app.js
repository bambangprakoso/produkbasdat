const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejs = require('ejs');

const app = express();

const publicDir = require('path').join(__dirname,'/public');
app.use(express.static(publicDir));

mongoose.connect('mongodb://Product:12agustus97@ds040017.mlab.com:40017/product123', {useNewUrlParser: true}, (error) => {
	if (error) {
		console.log('Ada error woy');
		return
	}
	console.log('Berhasil connect ke db! uyeeee');
});

const wew = mongoose.model('wew', { name: String});

//ini buat render file ejs
app.set('view engine', 'ejs');

//ini buat change default folder views
app.set("views", path.join(__dirname, "halaman"));

//app.get
app.get('/index', (req, res) => {
	const variabelKirim = "Prakoso 123"

	console.log(variabelKirim);

	wew.create({ name: 'bambang' }, (err, result) => {
		if (err) {
			console.log('==================');
			console.log(err);
			console.log('==================');
		}

		console.log(result);

		}
		)

		res.render('pro.ejs', {
			iniVarDiFrontend: variabelKirim,
			cobalagi: 'hallooo!',
			perlihatkan: false,
			list: [1,3,5,7,9]
	})
})

app.get('/', (req, res) => {
	res.render('index');
})

// app.get('/Login', (req, res) => {
// 	res.render('Login');
// })

// app.get('/Register', (req, res) => {
// 	res.render('Register');
// })

// app.get('/', (req, res) => {
// 	res.render('pro')
// })

app.get('*', (req, res) => {
	res.send('page tidak ditemukan')
})

app.listen(process.env.PORT || 8000, () => {
	console.log('8000')
})
