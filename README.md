# Eclectic arts API foundation

Basic Project to Setup Node Api Project ( Individual Service )

# Architecture

![alt text]()

# Project Setup Instructions

---

clone the repo<br/>
`git clone git@github.com:mandeep919/Eclectic-BE.git`<br/><br/>
copy environment variable<br/>
`cp .env .env`<br/><br/>
Update the env variables in .env files<br/>
Install dependencies<br/>
`npm i`<br/><br/>
Execute project in development mode<br/>
`npm run dev`<br/><br/>
Browse the project<br/>
`http:\\localhost:{PORT}`<br/><br/>
{PORT} specified in .env file<br/>
Port is already in use and kill the port usability<br/>
`kill -9 $(lsof -t -i:{PORT})`<br/><br/>
