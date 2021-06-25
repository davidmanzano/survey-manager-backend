# survey-manager-backend

1. Once the repo has been cloned, open a command prompt and run "npm install" in the survey-manager-backend directory

2. You will need to download and install the latest version of MySQL Community Server and MySQL Workbench in order to get the database running locally. Please ensure that versions of this software is compatible with the current version of your OS

3. Ensure that MySQL Community Server is running on your machine

4. Open MySQL Workbench, under MySQL Connections create a new connection if one does not already exist. Ensure that Hostname: 127.0.0.1, Port: 3306, Username: root

5. In the Manage Server Connections window where you just created the new connection, click the Test Connection button to confirm that a connection has been made

6. Now, click on the connection you just created in the main window

7. Select the Create a new schema in the connected server button in the top left part of the window

8. Name the new schema "survey-manager-db" and click Apply and follow the dialogue until you have successfully added the new schema

9. In the left hand menu under the "Instance" header, select the "Startup / Shutdown" option and confirm that the database server instance is running

10. If the server is not running, click the Start Server button

11. If you changed the password to access the database at any point in the last 10 steps, in your IDE navigate to survey-manager-backend/config/db.config.js and change the PASSWORD field in the file to your password

12. In the command prompt, run "node server.js", you should see log messages detailing the database being initialized without error

13. Congratulations! If you made it to this step you have successfully set up the backend. The next steps will be detailed in the README of survey-manager-ui and will go over how to get the front end built and running