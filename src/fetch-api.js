
	export async function getQuote() {
		const response = await fetch(`https://api.kanye.rest`); 
		const quote = await response.json();
		
        if(!response.ok) {
			console.error(
				`getQuote: 
                Request failed with status 
                ${response.status}`
				)
				return {quote: "Failed to fetch quote"}
			}
			
			console.log(`"Got quote:" ${quote.quote}`) 
            return quote.quote
	};

	export async function getUsers() {
		const response = await fetch(`https://random-data-api.com/api/users/random_user?size=10`); 
		const users = await response.json();
		
        if(!response.ok) {
			console.error(
				`getQuote: 
                Request failed with status 
                ${response.status}`
				)
				return {quote: "Failed to fetch quote"}
			}
			
			console.log(`"Got users:" ${users.length}`) 
            return users
	};
	