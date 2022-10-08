let clicks = ["900,google.com",
	"60,mail.yahoo.com",
	"10,mobile.sports.yahoo.com",
	"40,sports.yahoo.com",
	"300,yahoo.com",
	"10,stackoverflow.com",
	"20,overflow.com",
	"5,com.com",
	"2,en.wikipedia.org",
	"1,m.wikipedia.org",
	"1,mobile.sports",
	"1,google.co.uk"];

function devolverCantidadClicks(clicks: string[]): object {
	//Aca debes realizar la logica
	if(clicks.length < 1) throw new Error("Sorry, something went wrong :(")
	let objClick: { [key: string]: number }= {}
	clicks.forEach((e) => {
		let arr = e.split(/[\,\.]/g)
		let numberOfClicks: number = parseInt(arr[0]);
		let hightLevelDomain: string = arr[arr.length - 1]; // .com, .uk, .org
		let domain: string = arr.slice(arr.length -2, arr.length).join('.'); // google.com
		let subdomain: string = arr.slice(1, arr.length).join('.'); // mail.yahoo.com
		let aux: string[] = subdomain.split('.'); // ['mobile', 'sports', 'yahoo', 'com']

		if(arr.length > 3) {
			//URL con subdominio
			if(aux.length > 3) {
				let parcialSubdomain = aux.slice(1, arr.length - 1).join('.');

				if(objClick[hightLevelDomain]) objClick[hightLevelDomain] = numberOfClicks + objClick[hightLevelDomain];
				else objClick[hightLevelDomain] = numberOfClicks;

				if(objClick[domain]) objClick[domain] = numberOfClicks + objClick[domain]
				else objClick[domain] = numberOfClicks;

				if(objClick[parcialSubdomain]) objClick[parcialSubdomain] = numberOfClicks + objClick[parcialSubdomain];
				else objClick[parcialSubdomain] = numberOfClicks;

				if(objClick[subdomain]) objClick[subdomain] = numberOfClicks + objClick[subdomain]
				else objClick[subdomain] = numberOfClicks;
			} else {
				if(objClick[hightLevelDomain]) objClick[hightLevelDomain] = numberOfClicks + objClick[hightLevelDomain];
				else objClick[hightLevelDomain] = numberOfClicks;

				if(objClick[domain]) objClick[domain] = numberOfClicks + objClick[domain]
				else objClick[domain] = numberOfClicks;

				if(objClick[subdomain]) objClick[subdomain] = numberOfClicks + objClick[subdomain]
				else objClick[subdomain] = numberOfClicks;
			}
		} else {
			//URL sin subdominio
			if(objClick[hightLevelDomain]) objClick[hightLevelDomain] = numberOfClicks + objClick[hightLevelDomain];
			else objClick[hightLevelDomain] = numberOfClicks;
			
			if(objClick[domain]) objClick[domain] = numberOfClicks + objClick[domain]
			else objClick[domain] = numberOfClicks;
		}
	})
	
	
	//Debes retornar el objClick con los datos correspondientes
	return objClick;



}


console.table(devolverCantidadClicks(clicks));