

This project was bootstrapped with [Create React App]

- Clone or download the project from https://github.com/code2dipi/frontend-bysykkel-info.git 
- 

# Before run the project , it need to have installed Nodejs in your local machine and following dependency listed in package.json  
    ["axios": "^0.27.2",
    "semantic-ui-css": "^2.4.1",
    "semantic-ui-react": "^2.1.3"]

 # Please run backend server, when backend server is on live, from the project directory(frontend-bysykkel-info\bysykkel-app),  run:


### `npm start`

Runs the app in the development mode.\

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

In this app ,Two REST Endpoints[http://localhost:8080/ny/available and http://localhost:8080/ny/stations ] has been consumed.

but, currently Antall tilgjenlige låser(num_docks_available) and Ledige sykkler(num_bikes_available) can be viewed.

In future, more data from different stations will be displayed . 