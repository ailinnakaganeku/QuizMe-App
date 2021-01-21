require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const passport = require('./passport');
const routes = require('./routes');

/* --- Models --- */
const User = require('./models/User');
const Category = require('./models/Category');
const Question = require('./models/Question');
const Quiz = require('./models/Quiz');

/* --- Utils --- */
const utilsUsers = require('./utils/bulkCreate/Users');
const utilsCategories = require('./utils/bulkCreate/Categories');
const utilsQuizzes = require('./utils/bulkCreate/Quizzes');
const utilsQuestions = require('./utils/bulkCreate/Questions');

const app = express();

app.use((_, res, next) => {
	res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization'
	);
	res.header(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, DELETE, OPTIONS'
	);
	next();
});

app.use(express.urlencoded());
app.use(express.json({ limit: '50mb' }));

app.use(passport.initialize());

app.all('*', function (req, res, next) {
	passport.authenticate('bearer', function (err, user) {
		if (err) return res.status(400).json({ message: 'malformed JSON' });
		if (user) {
			req.user = user;
		}
		return next();
	})(req, res, next);
});

app.use('/', routes);

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

mongoose
	.connect('mongodb://localhost:27017/quiz', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		autoCreate: true,
		useCreateIndex: true,
	})
	.then(async () => {
		await mongoose.connection.db.dropDatabase();
		console.info('MONGODB CONNECTED');
		try {
			await User.create(utilsUsers);
			await Category.create(utilsCategories);
			await Quiz.create(utilsQuizzes);
			await Question.create(utilsQuestions);
			console.log('BulkCreate Succesful');
		} catch (err) {
			console.log('BulkCreate Error', err);
		}
		return app.listen({ port: 4000 });
	})
	.then(() => console.log('Express running'))
	.catch(console.log);
