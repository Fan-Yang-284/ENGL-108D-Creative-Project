import getFormattedCompanyName from '../utils/companies'
import companies from '../utils/similarities.json'
import profiles from '../utils/companies.json'
import SimilarityCard from './SimilarityCard'
import { useState, useEffect } from 'react'
import Game from './Game'


const Company = ({ company }) => {
	//const [compared, setCompared] = useState(company);
	const [game, setGame] = useState(false);

	useEffect(() => {
		setGame(false);
	}, []) 
	//console.log(companies)
	return (
		<div className='flex flex-col text-center justify-evenly'>
			{company === "default" ? <div>Home Page</div> : <div>Currently Viewing: {getFormattedCompanyName(company)}'s <span className='italic'>Avatar</span></div>}
			<div className='grid grid-flow-row grid-cols-3 grid-rows-3'>
				{company!== "default" ? companies[company].map(arr => {
						return <SimilarityCard similarities={arr} company={company}/>
					}) 
				: <div className='col-span-3'> {game ? <Game/> : <button className='border rounded' onClick={() => setGame(true)}> Take the quiz! </button>} </div>}
			</div>
			<div>
				{company !=="default" ? <div>{getFormattedCompanyName(company)}'s profiles on:</div> : ""}
				{company!== "default" ? Object.keys(profiles[company]).map(subcompany => {
						return <div><hr></hr>{getFormattedCompanyName(subcompany)}: {profiles[company][subcompany]}</div>
					}) 
				: ""}
			</div>
		</div>	
	)
}

export default Company;