
import {Component} from "react";

class CardContainer extends Component {

	render() {
		let cards = [];
		return(
			<div className=" px-20">
				<ul className="max-w-7xl m-auto w-full grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-7 justify-items-center">
					<li><Card/></li>
					<li><Card/></li>
					<li><Card/></li>
					<li><Card/></li>
					<li><Card/></li>
				</ul>
			</div>
		);
	}
}

function Card() {
	return(
		<div className="max-w-sm w-full bg-white overflow-hidden rounded-md relative shadow-lg
			bg-lightElements dark:bg-darkElements
		">
			<div className="w-full overflow-hidden">
				<a href="#" tabindex="-1" class="w-full h-full">
					<img src="../images/aut.svg"
						class="transition-transform ease-in-out duration-300 hover:scale-110"
						alt="Flag"
					/>
				</a>
			</div>
			<div className="px-6 pt-6">
				<h2 className="mb-4 font-bold">
					<a href="#">
						Austria
					</a>
				</h2>
				<p className="card-p">Pragraph</p>
				<p className="card-p">Pragraph</p>
				<p className="card-p">Pragraph</p>
			</div>
		</div>
	);
}

export default CardContainer;