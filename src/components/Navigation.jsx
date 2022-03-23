import React from "react";

class Navigation extends React.Component {
	constructor() {
		super();
		this.state = {
			active: 0,
		};
	}

	handleClick(e) {
		alert(e.target.id);
	}

	render() {
		return (
			<nav className="bg-gray-800">
				<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
					<div className="relative flex items-center justify-between h-16">
						<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
							<div className="flex-shrink-0 flex items-center">
								<div className="text-white text-lg font-bold">
									Fake Social Media App
								</div>
							</div>
							<div className="hidden sm:block sm:ml-6">
								<div className="flex space-x-4">
									<button
										onClick={this.handleClick}
										id="0"
										className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
										aria-current="page"
									>
										Post
									</button>

									<button
										onClick={this.handleClick}
										id="1"
										className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									>
										Favorite
									</button>

									<button
										onClick={this.handleClick}
										id="2"
										href="#"
										className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									>
										About
									</button>

								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navigation;
