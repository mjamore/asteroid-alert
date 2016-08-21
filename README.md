# Asteroid Alert:
This application will use the Near Earth Object Web Service to display the near Earth asteroids each day.

## Usage
This application requires a NASA API key, which can be acquired from the [nasa.gov developer webite](https://api.nasa.gov/index.html#apply-for-an-api-key).  Once you have an API key, add it as a key value pair to an .env file at the root of the project.  The key should be 'NASA_API_KEY' and the value should be the API key from the NASA website.
	npm install
	gulp
	npm start


## To-Do:
- [ ] Get promises returning correctly
- [ ] Format data on backend
- [ ] Finish styling front end
- [ ] Make it clear to the user why the cards are sorted the way they are
- [ ] Add fork on Gihub?
- [ ] Mobile nav?
- [ ] Add count to top left of each card


## Completed:
- [x] Factor HTML out into separate file and make NASA API request via AJAX
- [x] Add Materialize.css
- [x] Update navbar content
- [x] Update footer content