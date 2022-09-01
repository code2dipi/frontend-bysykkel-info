# bysykkel web APP

- This project was bootstrapped with [Create React App]

- Clone or download the project from https://github.com/code2dipi/frontend-bysykkel-info.git 


-  Before run the project , Nodejs need to be installed in your local machine and following dependency listed in package.json  
    ["axios": "^0.27.2",
    "semantic-ui-css": "^2.4.1",
    "semantic-ui-react": "^2.1.3"]

 - Please run backend server(see: https://github.com/code2dipi/bysykkel-rest-api/blob/master/README.md), when backend server is on live, from the project directory(frontend-bysykkel-info\bysykkel-app),  run:


# `npm start`

Runs the app in the development mode.\

Open [http://localhost:3000] to view it in your browser.

In this app backend REST Resource results [http://localhost:8080/ny/results]  has been called .

but, currently Navn(Name) , Antall tilgjenlige låser(numOfDocksAvailable) and Ledige sykkler(numOfbikesAvailable) can be viewed from Browser.
