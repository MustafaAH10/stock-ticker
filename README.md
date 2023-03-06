# Stock Ticker

Monitors popular stock tickers using polygon.io and iexcloud.io API calls.
(polygon.io allows for up to 3 API calls per minute in its free version so only 3 stocks are dislayed. iexcloud.io is used for stock logo)

Backend is made using Express backend and call is made through the route defined in the testAPI.js file.
Information is consumed by the React app in the App.js file and is finally displayed as suchusing some styling done in App.css:


<img width="638" alt="Screenshot 2023-03-06 at 10 30 26 PM" src="https://user-images.githubusercontent.com/56750694/223147771-96ac90cc-e9e1-42b8-b147-f9ba16759f2a.png">
