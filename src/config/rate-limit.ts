import rateLimit from 'express-rate-limit';
import config from './app.config';

const limiter = rateLimit({
	windowMs: config.server.limitTime, // millis
	max: config.server.limitMax,
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

export default limiter;