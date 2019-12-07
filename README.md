## Open a working state of our project ##
Open your desired browser and navigate to http://themoln.herokuapp.com .
Here you will find the most recent, functional version of our project.
We update this public domain at least once a week on Wednesday afternoon.
*Please note that the website can take a long time to load on first access. This is because the server automatically shuts down when noone accesses the site for a longer period of time.*

## Backend setup ##
Navigate to backend folder and run 'npm run dev'.

## User management on backend ##  
Registration: POST request to /user/signup passing a json object with email and password  
Update: PATCH request to /user/<id> passing a json object with email and password  
Deletion: DELETE request to /user/ providing the password of the user and the token in the header
Login: POST request to /user/login passing a json object with email and password

## Dev commands ##
Delete all users that end in '@fs.ch': DELETE /dev/
Delete a user by id: DELETE /dev/<id>
List all users: GET /dev/
get Json of specific user: GET /dev/<id>

## Documentation ##
To read our Compodoc documentation please run 'npm run compodoc' in the frontend folder

## Tests ##
To run our tests, navigate to `./ESE-2019-Project/backend/` and type `npm test`
