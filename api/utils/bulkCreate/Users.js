const mongoose = require('mongoose');

const users = [
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451aa0000'),
		email: 'nc.devw@gmail.com',
		password: '!Qwerty123',
		firstName: 'Nacho',
		lastName: 'Contreras',
		countryCode: 'AR',
		role: 'ADMIN',
		completedQuiz: [mongoose.Types.ObjectId('5959e34adf833e1451ac0000')],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451aa0001'),
		email: 'emi@mail.com',
		password: '!Qwerty123',
		firstName: 'Emiliano',
		lastName: 'Alfonso',
		countryCode: 'AR',
		completedQuiz: [mongoose.Types.ObjectId('5959e34adf833e1451ac0001')],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451aa0002'),
		email: 'fran@mail.com',
		password: '!Qwerty123',
		firstName: 'Fran',
		lastName: 'Fiori',
		countryCode: 'AR',
		completedQuiz: [mongoose.Types.ObjectId('5959e34adf833e1451ac0002')],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451aa0003'),
		email: 'paco@mail.com',
		password: '!Qwerty123',
		firstName: 'Paco',
		lastName: 'Ortiz',
		countryCode: 'AR',
		role: 'ADMIN',
		completedQuiz: [mongoose.Types.ObjectId('5959e34adf833e1451ac0002')],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451aa0004'),
		email: 'tincho@mail.com',
		password: '!Qwerty123',
		firstName: 'Tincho',
		lastName: 'Sanchez',
		countryCode: 'AR',
		completedQuiz: [mongoose.Types.ObjectId('5959e34adf833e1451ac0002')],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451aa0005'),
		email: 'bruno@mail.com',
		password: '!Qwerty123',
		firstName: 'Bruno',
		lastName: 'Gallardo',
		countryCode: 'AR',
		completedQuiz: [mongoose.Types.ObjectId('5959e34adf833e1451ac0002')],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451aa0006'),
		email: 'santi@mail.com',
		password: '!Qwerty123',
		firstName: 'Santi',
		lastName: 'Calisaya',
		countryCode: 'AR',
		completedQuiz: [mongoose.Types.ObjectId('5959e34adf833e1451ac0002')],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451aa0007'),
		email: 'ailu@mail.com',
		password: '!Qwerty123',
		firstName: 'Ailin',
		lastName: 'Nakaganeku',
		countryCode: 'AR',
		completedQuiz: [mongoose.Types.ObjectId('5959e34adf833e1451ac0002')],
	},
];

module.exports = users;
