import getFormattedCompanyName from "../utils/companies";
import { Progress } from "@material-tailwind/react";

const SimilarityCard = ( { similarities, company } ) => {
	return (
		<div className="border flex flex-col gap-2">
			<div>Similarities with {getFormattedCompanyName(company)}'s profile on {getFormattedCompanyName(similarities[0][0].split("-")[0])}</div>
			<div className="gap-y-2">{similarities.map(pair =>{
				let companies = pair[0].split("-");
				if(companies[0] === companies[1]){return ""};
				return (
					<div className="px-2 flex justify-between items-center">
						<div>{getFormattedCompanyName(companies[0])} and {getFormattedCompanyName(companies[1])}:</div> <Progress className="w-1/2" value={Math.round(pair[1]*100)} color="blue" label={Math.round(pair[1]*100)} />
					</div>
				)
			})}
			</div>
		</div>
	)
}

export default SimilarityCard;