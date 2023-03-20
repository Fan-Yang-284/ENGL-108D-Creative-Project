const companyMap = {
	"linkedin": "LinkedIn",
	"facebook": "Facebook",
	"github": "Github",
	"apple store": "Apple Store",
	"google play": "Google Play",
	"tiktok": "TikTok",
	"twitter": "Twitter",
	"instagram": "Instagram",
	"default": "Home Page"
  }

  const getFormattedCompanyName = (company) => {
	try {
		return companyMap[company];
	}catch(e){
		console.log(e);
		return "Not found";
	}
  }

  export default getFormattedCompanyName;