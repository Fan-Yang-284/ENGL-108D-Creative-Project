import companies from '../utils/similarities.json';
import getFormattedCompanyName from '../utils/companies';

const Navbar = ( { setCompany } ) => {
	return (
		<div className='flex justify-evenly'>
		{Object.keys(companies).map((company, i) => (
			<div key={i} onClick={() => setCompany(company)} className="hover:cursor-pointer">
				{getFormattedCompanyName(company)}
			</div>
		))}
		</div>
	)
}

export default Navbar