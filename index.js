const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
var favicon = require('serve-favicon');
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
app.use(favicon(path.join(__dirname, 'public', 'images', 'SAC_Logo_Navy_v2_S_Ver2.png')));



app.get('/', (req, res) => {
    res.render('home');
});

app.get('/newChangeRequest', (req, res) => {
    res.render('newChangeRequest')
})

// routes for allshifts page

app.get('/allshifts', async (req, res) => {
    const mainShifts = await MainClubShift.find().sort({ date: 1 });
    const club2Shifts = await Club2Shift.find().sort({ date: 1 });
    const epShifts = await EpShift.find().sort({ date: 1 });
    res.render('allshifts', { mainShifts, club2Shifts, epShifts });
});

app.put('/allshifts/:id', async (req, res) => {
    const { id } = req.params;
    const updateShiftMain = await MainClubShift.findByIdAndUpdate(id, req.body, { runValidators: true, new: true, strict: false });
    const updateShiftClub2 = await Club2Shift.findByIdAndUpdate(id, req.body, { runValidators: true, new: true, strict: false });
    const updateShiftEp = await EpShift.findByIdAndUpdate(id, req.body, { runValidators: true, new: true, strict: false });
    res.redirect(`/allshifts`);
});

app.delete('/allshifts/:id', async (req, res) => {
    const { id } = req.params;
    const deletedShiftMain = await MainClubShift.findByIdAndDelete(id);
    const deletedShiftClub2 = await Club2Shift.findByIdAndDelete(id);
    const deletedShiftEp = await EpShift.findByIdAndDelete(id);
    res.redirect(`/allshifts`);
});

// ------------------------------------------------------

app.get('/main', async (req, res) => {
    const shifts = await MainClubShift.find().sort({ date: 1 });
    res.render('main', { shifts });
});

app.post('/main', async (req, res) => {
    const newShift = new MainClubShift(req.body);
    await newShift.save();
    res.redirect(`/main`)
})

app.put('/main/:id', async (req, res) => {
    const { id } = req.params;
    const updatedShift = await MainClubShift.findByIdAndUpdate(id, req.body, { runValidators: true, new: true, strict: false });
    res.redirect(`/main`);
});

app.delete('/main/:id', async (req, res) => {
    const { id } = req.params;
    const deletedShift = await MainClubShift.findByIdAndDelete(id);
    res.redirect(`/main`);
});

// ----------------------------------------------------

app.get('/club2', async (req, res) => {
    const shifts = await Club2Shift.find().sort({ date: 1 });
    res.render('club2', { shifts });
});

app.post('/club2', async (req, res) => {
    const newShift = new Club2Shift(req.body);
    await newShift.save();
    res.redirect(`/club2`)
});

app.put('/club2/:id', async (req, res) => {
    const { id } = req.params;
    const updatedShift = await Club2Shift.findByIdAndUpdate(id, req.body, { runValidators: true, new: true, strict: false });
    res.redirect(`/club2`);
});

app.delete('/club2/:id', async (req, res) => {
    const { id } = req.params;
    const deletedShift = await Club2Shift.findByIdAndDelete(id);
    res.redirect(`/club2`);
});

// ----------------------------------------------------


app.get('/eaglepoint', async (req, res) => {
    const shifts = await EpShift.find().sort({ date: 1 });
    res.render('eaglepoint', { shifts });
});

app.post('/eaglepoint/', async (req, res) => {
    const newShift = new EpShift(req.body);
    await newShift.save();
    res.redirect(`/eaglepoint`)
})

app.put('/eaglepoint/:id', async (req, res) => {
    const { id } = req.params;
    const updatedShift = await EpShift.findByIdAndUpdate(id, req.body, { runValidators: true, new: true, strict: false });
    res.redirect(`/eaglepoint`);
});

app.delete('/eaglepoint/:id', async (req, res) => {
    const { id } = req.params;
    const deletedShift = await EpShift.findByIdAndDelete(id);
    res.redirect(`/eaglepoint`);
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});