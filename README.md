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