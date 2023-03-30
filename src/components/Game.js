import companies from "../utils/companies.json"
import { useState, useEffect } from "react";
//import { removeWordFromString } from "../utils/processing";
import getFormattedCompanyName from "../utils/companies";

const getRandomQuestion = () => {
	const companyList = Object.keys(companies);
	const company = companyList[Math.floor(Math.random() * companyList.length)];
	const subCompanyList = Object.keys(companies[company]);
	const subCompany = subCompanyList[Math.floor(Math.random() * subCompanyList.length)];
	const description = companies[company][subCompany];
	return [company, subCompany, description];
}

const getRandomOptions = (company, target) => {
	// const companyList = Object.keys(companies);
	const subCompanyList = Object.keys(companies[company]);
	if (subCompanyList.length < 4){
		return subCompanyList;
	} else {
		shuffleArray(subCompanyList);
		if (subCompanyList.slice(0,4).includes(target)){
			return subCompanyList.slice(0,4);
		} else {
			subCompanyList[Math.floor(Math.random() * 4)] = target;
			return subCompanyList.slice(0,4);
		}
	}
}

const shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

const Game = () => {
	const [answers, setAnswers] = useState(false);
	const [question, setQuestion] = useState(getRandomQuestion()); // [company, subcompany, description]
	const [result, setResult] = useState(0) // 0 - pending, 1 - incorrect, 2 - correct

	useEffect(() => {
		setAnswers(getRandomOptions(question[0], question[1]))
	}, [question])
	return (
		<div>
			<div>Guess where this {getFormattedCompanyName(question[0])} profile description was written!</div>
			<div>{question[2]}</div>
			<div className='w-full flex justify-center gap-4'>
				{answers ? answers.map(answer => {
					console.log(answer)
					return <button className="cursor-pointer border rounded-lg" value={answer} onClick={(e) => {
						if(e.target.value === question[1]){
							setResult(2);
						} else{
							setResult(1);
						}
					}}>{getFormattedCompanyName(answer)}</button>
				}) : ""}
			</div>
			<div>
				{result === 2 ? <button onClick={() => {
					setQuestion(getRandomQuestion);
					setResult(0);
				}}>Congrats! Next Question</button> : result === 1 ? <div>Not Quite - Try Again!</div> : ""}
			</div>
		</div>
	)
}

export default Game;