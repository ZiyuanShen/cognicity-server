import { Router } from 'express';

// Import the dependencies we need to handle the request
import errorHandler from 'api-error-handler';

// Import validation dependencies
import validate from 'celebrate';

// Get the current version
import { version } from '../../package.json';

// Import our routes
import cards from './routes/cards';
import cities from './routes/cities';
import feeds from './routes/feeds';
import floodgauges from './routes/floodgauges';
import floods from './routes/floods';
import infrastructure from './routes/infrastructure';
import reports from './routes/reports';


export default ({ config, db, logger }) => {
	let api = Router();

	// Return the API version
	api.get('/', (req, res) => {
		res.status(200).json({ version });
	});

	// Mount the various endpoints
	//api.use('/areas', cards({ config, db, logger }));// TODO: local_areas
	api.use('/cards', cards({ config, db, logger }));
	api.use('/cities', cities({ config, db, logger }));
	api.use('/feeds', feeds({ config, db, logger }));
	api.use('/floodgauges', floodgauges({ config, db, logger }));
	api.use('/floods', floods({ config, db, logger }));
	api.use('/infrastructure', infrastructure({ config, db, logger }));
	api.use('/reports', reports({ config, db, logger }));

	// Handle validation errors (wording of messages can be overridden using err.isJoi)
	api.use(validate.errors());

	// Handle not found errors
	api.use((req, res) => {
		res.status(404).json({ message: 'URL not found', url: req.url });
	});

	// Handle errors gracefully returning nicely formatted json
	api.use(errorHandler());

	return api;
}
