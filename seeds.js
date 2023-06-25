const mongoose = require('mongoose');
const Shift = require('./models/shift');
const e = require('express');

mongoose.connect('mongodb://127.0.0.1:27017/shiftChangeDb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MONGO CONNECTION OPEN!!!')
    })
    .catch(err => {
        console.log('OH NO MONGO CONNECTION ERROR!!')
        console.log(err)
    })

// const p = new Shift({
//     date: '4/20/2023',
//     needsCoverage: 'Koda',
//     coveringShift: 'Jalen',
//     startTime: '8:00',
//     endTime: '12:00'
// })
// p.save().then(p => {
//     console.log(p)
// })
//     .catch(e => {
//         console.log(e)
//     })

const seedShifts = [
    {
        date: '2023-04-20', 
        needsCoverage: 'Koda',
        coveringShift: 'Jalen',
        startTime: '8:00',
        endTime: '12:00'
    },
    {
        date: '2023-04-20',
        needsCoverage: 'Atita',
        coveringShift: 'Tyler',
        startTime: '8:00',
        endTime: '12:00'
    },
    {
        date: '2023-04-21',
        needsCoverage: 'Atita',
        coveringShift: 'Jalen',
        startTime: '1:00',
        endTime: '4:00'
    },
    {
        date: '2023-04-24',
        needsCoverage: 'Komoki',
        coveringShift: 'Chloe',
        startTime: '4:30',
        endTime: '8:00'
    },
    {
        date: '2023-04-16',
        needsCoverage: 'Koda',
        coveringShift: 'Chloe',
        startTime: '3:30',
        endTime: '8:00'
    },
]

Shift.insertMany(seedShifts)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(e)
    })