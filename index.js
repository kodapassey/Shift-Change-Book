const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const { check, validationResult } = require('express-validator');

// test
const MainClubShift = require('./models/mainClubShift');
const Club2Shift = require('./models/club2Shift.js');
const EpShift = require('./models/eaglepointShift.js');


mongoose.connect('mongodb+srv://kodapassey:Koda020904@cluster0.2fnmtxk.mongodb.net/shiftChangeDb?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MONGO CONNECTION OPEN!!!')
    })
    .catch(err => {
        console.log('OH NO MONGO CONNECTION ERROR!!')
        console.log(err)
    })

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true }))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));


app.get('/', (req, res) => {
    res.render('home');
});

app.get('/newChangeRequest', (req, res) => {
    res.render('newChangeRequest')
})

// ------------------------------------------------------

app.get('/main', async (req, res) => {
    const { date } = req.params;
    const shifts = await MainClubShift.find({ date: date });
    res.render('main', { shifts });
});

app.get('/main/:date', async (req, res) => {
    const { date } = req.params;
    const shifts = await MainClubShift.find({ date: date });
    res.render('main', { shifts, date });
})

app.post('/main/:date', async (req, res) => {
    const newShift = new MainClubShift(req.body);
    await newShift.save();
    res.redirect(`/main/${newShift.date}`)
})

app.put('/main/:id', async (req, res) => {
    const { id } = req.params;
    const updatedShift = await MainClubShift.findByIdAndUpdate(id, req.body, { runValidators: true, new: true, strict: false });
    res.redirect(`/main/${updatedShift.date}`);
});

app.delete('/main/:id', async (req, res) => {
    const { id } = req.params;
    const deletedShift = await MainClubShift.findByIdAndDelete(id);
    res.redirect(`/main/${deletedShift.date}`);
});

// ----------------------------------------------------

app.get('/club2', async (req, res) => {
    const { date } = req.params;
    const shifts = await Club2Shift.find({ date: date });
    res.render('club2', { shifts });
});

app.get('/club2/:date', async (req, res) => {
    const { date } = req.params;
    const shifts = await Club2Shift.find({ date: date });
    res.render('club2', { shifts, date });
})

app.post('/club2/:date', async (req, res) => {
    const newShift = new Club2Shift(req.body);
    await newShift.save();
    res.redirect(`/club2/${newShift.date}`)
})

app.put('/club2/:id', async (req, res) => {
    const { id } = req.params;
    const updatedShift = await Club2Shift.findByIdAndUpdate(id, req.body, { runValidators: true, new: true, strict: false });
    res.redirect(`/club2/${updatedShift.date}`);
});

app.delete('/club2/:id', async (req, res) => {
    const { id } = req.params;
    const deletedShift = await Club2Shift.findByIdAndDelete(id);
    res.redirect(`/club2/${deletedShift.date}`);
});

// ----------------------------------------------------


app.get('/eaglepoint', async (req, res) => {
    const { date } = req.params;
    const shifts = await EpShift.find({ date: date });
    res.render('eaglepoint', { shifts });
});

app.get('/eaglepoint/:date', async (req, res) => {
    const { date } = req.params;
    const shifts = await EpShift.find({ date: date });
    res.render('eaglepoint', { shifts, date });
})

app.post('/eaglepoint/:date', async (req, res) => {
    const newShift = new EpShift(req.body);
    await newShift.save();
    res.redirect(`/eaglepoint/${newShift.date}`)
})

app.put('/eaglepoint/:id', async (req, res) => {
    const { id } = req.params;
    const updatedShift = await EpShift.findByIdAndUpdate(id, req.body, { runValidators: true, new: true, strict: false });
    res.redirect(`/eaglepoint/${updatedShift.date}`);
});

app.delete('/eaglepoint/:id', async (req, res) => {
    const { id } = req.params;
    const deletedShift = await EpShift.findByIdAndDelete(id);
    res.redirect(`/eaglepoint/${deletedShift.date}`);
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});