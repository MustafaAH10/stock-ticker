import React, { Component } from "react";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { stocks: [] };
	}

	componentDidMount() {
		fetch("http://localhost:9000/testAPI")
			.then((res) => res.json())
			.then((data) => {
				this.setState({ stocks: data });
			})
			.catch((err) => err);
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Stocks</h1>
					<table className="stocks-table">
						<tbody>
							{this.state.stocks.map((stock, index) => (
								<tr key={index}>
									<td>
										<img
											src={`https://storage.googleapis.com/iex/api/logos/${stock.ticker}.png`}
											className="stock-logo round"
											alt="stock-logo"
										/>
									</td>
									<td>
										<div className="stock-info">
											<div className="ticker">
												<b>{stock.ticker}</b>
											</div>
											<div className="price">
												<b>${stock.openPrice}</b>
											</div>
											<div className="price-diff">
												<span
													className={stock.priceDiff >= 0 ? "green" : "red"}
												>
													{stock.priceDiff}
												</span>
												<span
													className={
														stock.percentageDiff >= 0 ? "green" : "red"
													}
												>
													{stock.percentageDiff}%
												</span>
											</div>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</header>
			</div>
		);
	}
}

export default App;
