# bysykkel web APP

- This is Frontend Web App designed to consume oslo bycycle real-time informaton from backend (See: https://github.com/code2dipi/bysykkel-rest-api#readme)

- This APP was bootstrapped with [Create React App]

# How to run this APP :
- Clone or download the project from https://github.com/code2dipi/frontend-bysykkel-info.git 

-  Before run the project , Nodejs need to be installed in your local machine and following dependency is needed (see package.json)  
    ["axios": "^0.27.2",
    "semantic-ui-css": "^2.4.1",
    "semantic-ui-react": "^2.1.3"]

 - Please run backend server first, when backend server is on live, from the project directory(frontend-bysykkel-info\bysykkel-app),  run:


# `npm start`

Runs the app in the development mode.\

Open [http://localhost:3000] to view it in your browser.

In this app backend REST Resource results [http://localhost:8080/ny/results]  has been consumed .

When everything goes right a way , all the real-time data will be displayed on browser:
Stasjon-Id	Navn	           Address	                  Ledige sykkler	Antall tilgjenlige låser
2350	   Blindern T-Bane	   Apalveien 60	                  0	               25
2349	   Maritimt Museum	   Bygdøynesveien 37	          0	               21
2347	   Huk 2	           Strømsborgveien 48	          24	            6


