let players = document.querySelector(`.player`);;
let button = document.querySelector(`.button`);
let rand;
let mafs = 0;
let koms = 0;
let dons = 0;
let doks = 0;
let mans = 0;
let rol = 0;
let mafias = [];
let roleM = document.querySelector(`.roles-m`);
let roleK = document.querySelector(`.roles-k`);
let roleDon = document.querySelector(`.roles-don`);
let roleD = document.querySelector(`.roles-d`);
let roleMa = document.querySelector(`.roles-ma`);


let maf = document.querySelector(`.maf`);
let kom = document.querySelector(`.kom`);
let don = document.querySelector(`.don`);
let dok = document.querySelector(`.dok`);
let man = document.querySelector(`.man`);


button.onclick = () => {
	roleM.innerHTML = `Мафия:`;
	roleK.innerHTML = `Комиссар:`;
	roleDon.innerHTML = `Дон Мафии:`;
	roleD.innerHTML = `Доктор:`;
	roleMa.innerHTML = `Маньяк:`;
	if (maf.checked) {
	mafs = document.querySelector(`.mafs`);
	mafs = mafs.value;
	// console.log(mafs);
}
	if (kom.checked) {
	koms = 1;
}	
	if (don.checked) {
	dons = 1;
}	
	if (dok.checked) {
	doks = 1;
}	
	if (man.checked) {
	mans = 1;
}
	// rol = Number(mafs) + Number(koms) + Number(doks) + Number(mans);
	// console.log(rol);
	// for (let i = rol; i > 0; i--) {
		
	// }

	for (let i = mafs; i > 0; i--) {
		rand = Math.floor(Math.random() * (players.value)) + 1;
		mafias.push(Number(rand));
	}
	for (let i = 0; i < 10; i++) {
	mafias = [...new Set(mafias)];
	if (mafias.length != mafs) {
		for (let i = mafs - mafias.length; i > 0; i--) {
		rand = Math.floor(Math.random() * (players.value)) + 1;
		mafias.push(Number(rand));
		}
	}
	}
	if (maf.checked) {
		for (let i = mafs; i > 0; i--) {
			roleM.innerHTML += mafias[i-1] + `, `;
		}
	}
	if (kom.checked) {
		koms = Math.floor(Math.random() * (players.value)) + 1;
		for (let i = mafs; i > 0; i--) {
			for (let j = mafs; j > 0; j--) {
				if (koms == mafias[j-1]) {
				koms = Math.floor(Math.random() * (players.value)) + 1;
				j++
				}
			}
		}
		roleK.innerHTML += koms;
	}
	if (don.checked) {
		dons = Math.floor(Math.random() * (players.value)) + 1;
			for (let j = mafs ; j > 0; j--) {
				if (dons == mafias[j-1] || dons == koms) {
				dons = Math.floor(Math.random() * (players.value)) + 1;
				j++
				}
			}
		roleDon.innerHTML += dons;
	}
		if (dok.checked) {
		doks = Math.floor(Math.random() * (players.value)) + 1;
			for (let j = mafs ; j > 0; j--) {
				if (doks == mafias[j-1] || doks == koms || doks == dons) {
				doks = Math.floor(Math.random() * (players.value)) + 1;
				j++
				}
			}
		roleD.innerHTML += doks;
	}
			if (man.checked) {
		mans = Math.floor(Math.random() * (players.value)) + 1;
			for (let j = mafs ; j > 0; j--) {
				if (mans == mafias[j-1] || mans == koms || mans == dons || mans == doks) {
				mans = Math.floor(Math.random() * (players.value)) + 1;
				j++
				}
			}
		roleMa.innerHTML += mans;
	}



	mafias = [];
	mafs = 0;
	koms = 0;
	doks = 0;
	mans = 0;
}


players.oninput = () => {
	players = document.querySelector(`.player`);
	console.log(players.value)
}


// button.onclick = function getRandomInt() {
// 	rand = Math.floor(Math.random() * (players.value)) + 1;
// 	console.log(rand);
// }


