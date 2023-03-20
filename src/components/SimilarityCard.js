import getFormattedCompanyName from "../utils/companies";

const SimilarityCard = ( { similarities, company } ) => {
	return (
		<div className="border flex flex-col gap-2">
			<div>Similarities with {getFormattedCompanyName(company)}'s profile on {getFormattedCompanyName(similarities[0][0].split("-")[0])}</div>
			<div>{similarities.map(pair =>{
				let companies = pair[0].split("-");
				if(companies[0] === companies[1]){return ""};
				return <div>{getFormattedCompanyName(companies[0])} and {getFormattedCompanyName(companies[1])}: {pair[1]}</div>
			})}
			</div>
		</div>
	)
}

export default SimilarityCard;