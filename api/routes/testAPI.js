const express = require("express");
const router = express.Router();
const axios = require("axios");

const tickers = ["TSLA", "AAPL", "AMZN"];

router.get("/", function (req, res, next) {
	const promises = [];

	tickers.forEach((ticker) => {
		promises.push(
			axios.get(
				`https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/2023-01-09/2023-01-09?apiKey=9XUSmB5v5UzGJy98Wpgw4b28s2hBRULY`
			),
			axios.get(`https://storage.googleapis.com/iex/api/logos/${ticker}.png`)
		);
	});

	Promise.all(promises)
		.then((responses) => {
			const stockData = [];

			for (let i = 0; i < responses.length; i += 2) {
				const data = responses[i].data;
				const logoData = responses[i + 1].data;

				const ticker = data.ticker;
				const openPrice = data.results[0].o.toFixed(2);
				const closePrice = data.results[0].c;
				const priceDiff = (openPrice - closePrice).toFixed(2);
				const percentageDiff = ((priceDiff / closePrice) * 100).toFixed(2);

				const stock = {
					logo: logoData,
					ticker: ticker,
					openPrice: openPrice,
					priceDiff: priceDiff,
					percentageDiff: percentageDiff,
				};

				stockData.push(stock);
			}

			res.json(stockData);
		})
		.catch((error) => {
			console.log(error);
			res.status(500).send("Error fetching data");
		});
});

module.exports = router;
