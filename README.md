## Backend setup ##
Navigate to backend folder and run 'npm run dev'. 

## User management on backend ##
Overview: GET request to /user  
Registration: POST request to /user/signup passing a json object with email and password  
Update: PATCH request to /user/<id> passing a json object with email and password  
Deletion: DELETE request to /user/<id>  
Login: POST request to /user/login passing a json object with email and password 
