# Stock Ticker

Monitors popular stock tickers using polygon.io and iexcloud.io API calls.
(polygon.io allows for up to 3 API calls per minute in its free version so only 3 stocks are dislayed. iexcloud.io is used for stock logo)

Backend is made using Express backend and API call is made through the testAPI.js file via the route defined in the app.js file.
Information is consumed by the React app in the App.js file and is finally displayed as such using some styling in App.css:

<img width="438" alt="Screenshot 2023-03-06 at 10 30 26 PM" src="https://user-images.githubusercontent.com/56750694/223147771-96ac90cc-e9e1-42b8-b147-f9ba16759f2a.png">

To run the app:
1. In your terminal, navigate to the root directory and run `npm start` to start the front-end (App.js)
2. In a separate terminal window, navigate to the api folder in the root directory and run `npm start` to start the back-end.

<img width="390" alt="Screenshot 2023-03-06 at 11 08 02 PM" src="https://user-images.githubusercontent.com/56750694/223150083-02f6a530-c39c-469a-9331-78250e4d0897.png">

3. In case localhost:3000 doesn't automatically load in your browser, load it and you should see something like the above!
