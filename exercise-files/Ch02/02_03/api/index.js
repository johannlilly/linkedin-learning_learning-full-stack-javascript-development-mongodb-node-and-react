import express from 'express';
/// Create a route object by calling the `Router()` function on `express`.
const router = express.Router();
/// a function in JavaScript is just an object, so we can attach other properties on that object.
/// this `router` object is similar to the `server` object of previous lessons.
/// we can define `.get()` calls on it and handle them in the second argument.

/**
 * Define `.get()` calls on the `router` object.
 * 
 * @param string path
 * @param function event handler for `.get()` calls
*/
router.get('/', (req, res) => {
	/**
	 * This is an API call, so send a JSON response by sending an object
	 *
	 * @param object response
	*/
	res.send({ data: [] });
});

/// Use `router` by exporting it.
export default router;
