import companies from "../utils/companies.json"
import { useState } from "react";
import { removeWordFromString } from "../utils/processing";

const getRandomQuestion = () => {
	const companyList = Object.keys(companies);
	const company = companyList[Math.floor(Math.random() * companyList.length)];
	const subCompanyList = Object.keys(companies[company]);
	const subCompany = subCompanyList[Math.floor(Math.random() * subCompanyList.length)];
	const description = companies[company][subCompany];
	return [company, subCompany, description];
}

const getRandomOptions = () => {
	
}

const Game = () => {
	const [question, setQuestion] = useState(getRandomQuestion()); // [company, subcompany, description]
	const [result, setResult] = useState(0) // 0 - pending, 1 - incorrect, 2 - correct
	return (
		<div>
			<div>Guess where this description was written and which company it belongs to?</div>
			<div>{removeWordFromString(question[2], question[0])}</div>
		</div>
	)
}

export default Game;