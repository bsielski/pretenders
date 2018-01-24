{
    const main = () => {
	// DEBUGGER
	const deb = document.getElementById("debugger")
	deb.log = (...args) => {
	    deb.insertBefore(generateElement("p", {class: "debug__log", textNode: args}), deb.firstChild)
	}
	deb.rep = (...args) => {
	    deb.textContent = args
	}
	// DOM ELEMENTS
	const nationPicker = document.getElementById("nation-picker__select")
	const pretendersTableBody = document.getElementById("pretenders-table__body")
	const dominionInput = document.getElementById("dominion-picker__input")
	const fireInput = document.getElementById("fire-picker__input")
	const airInput = document.getElementById("air-picker__input")
	const waterInput = document.getElementById("water-picker__input")
	const earthInput = document.getElementById("earth-picker__input")
	const astralInput = document.getElementById("astral-picker__input")
	const deathInput = document.getElementById("death-picker__input")
	const natureInput = document.getElementById("nature-picker__input")
	const bloodInput = document.getElementById("blood-picker__input")

	const orderInput = document.getElementById("order-picker__input")
	const productivityInput = document.getElementById("productivity-picker__input")
	const heatInput = document.getElementById("heat-picker__input")
	const growthInput = document.getElementById("growth-picker__input")
	const fortuneInput = document.getElementById("fortune-picker__input")
	const magicInput = document.getElementById("magic-picker__input")

	const awakeInput = document.getElementById("awake-picker__input")
	const dormantInput = document.getElementById("dormant-picker__input")
	const imprisonedInput = document.getElementById("imprisoned-picker__input")

	const blessEffectsFire = document.getElementById("bless-effects-fire")
	const blessEffectsAir = document.getElementById("bless-effects-air")
	const blessEffectsWater = document.getElementById("bless-effects-water")
	const blessEffectsEarth = document.getElementById("bless-effects-earth")
	const blessEffectsAstral = document.getElementById("bless-effects-astral")
	const blessEffectsDeath = document.getElementById("bless-effects-death")
	const blessEffectsNature = document.getElementById("bless-effects-nature")
	const blessEffectsBlood = document.getElementById("bless-effects-blood")
	

	fireInput.value = 0
	airInput.value = 0
	waterInput.value = 0
	earthInput.value = 0
	astralInput.value = 0
	deathInput.value = 0
	natureInput.value = 0
	bloodInput.value = 0

	dominionInput.value = 1
	
	dormantInput.parentNode.style.cursor = 'pointer'
	imprisonedInput.parentNode.style.cursor = 'pointer'


	// BLESS EFFECT
	const makeEffect = (minorEffectName, startBonus, nPerLevel, majorEffectName, inputObject) => {
	    return () => {
		let level = inputObject.value
		if (level >= 4) {
		    let bonus = startBonus + parseInt((level - 4) * nPerLevel)
		    let major = ""
		    let secondEffect = ""
		    if (inputObject == airInput) {
			secondEffect = ", Missle range +" + (20 + parseInt(level - 4) * 5) + "%"
		    }
		    if (level >= 9) {
			major = ", " + majorEffectName
		    }
		    return (minorEffectName + " +" + bonus + secondEffect  + major)
		}
		
		else {
		    return ""
		}
		
	    }
	}
	const fireBlessEffect = makeEffect("Attack Skill", 2, 0.5, "Flaming weapons", fireInput)
	const airBlessEffect = makeEffect("Precision", 2, 0.5, "Air Shield (80)", airInput)
	const waterBlessEffect = makeEffect("Defence Skill", 2, 0.5, "Quickness", waterInput)
	const earthBlessEffect = makeEffect("Reinvigoration", 2, 0.5, "Protection (+5)", earthInput)
	const astralBlessEffect = makeEffect("Magic Resistance", 1, 0.5, "Twist Fate", astralInput)
	const deathBlessEffect = makeEffect("Undying", 5, 1, "Death weapons", deathInput)
	const natureBlessEffect = makeEffect("HP", 3, 1, "Regeneration (10%)", natureInput)
	const bloodBlessEffect = makeEffect("Strength", 2, 0.5, "Blood Venegeance", bloodInput)
	
	
	// MAPS
	const vanillaPretenders = setupVanillaPretenders()
	const vanillaNations = setupVanillaNations()
	const np = setupNationsPretenders(vanillaNations, vanillaPretenders)

	// TEMPLATE
	const tableRow = generateElement("tr",  {class: "pretenders-table__row"})
	tableRow.appendChild(generateElement("td", {class: "pretenders-table__cell pretenders-table__cell--name"}))
	tableRow.appendChild(generateElement("td", {class: "pretenders-table__cell pretenders-table__cell--left"}))
	tableRow.appendChild(generateElement("td", {class: "pretenders-table__cell pretenders-table__cell--dominion"}))
	tableRow.appendChild(generateElement("td", {class: "pretenders-table__cell"}))
	tableRow.appendChild(generateElement("td", {class: "pretenders-table__cell"}))
	tableRow.appendChild(generateElement("td", {class: "pretenders-table__cell"}))
	tableRow.appendChild(generateElement("td", {class: "pretenders-table__cell"}))
	tableRow.appendChild(generateElement("td", {class: "pretenders-table__cell"}))
	tableRow.appendChild(generateElement("td", {class: "pretenders-table__cell"}))
	tableRow.appendChild(generateElement("td", {class: "pretenders-table__cell"}))
	tableRow.appendChild(generateElement("td", {class: "pretenders-table__cell"}))

	
	// GLOBAL VARIABLE
	let currentPretendersIds 
	let calculatedPretenders
	let imprisonment

	const setImprisonment = () => {

	    if (awakeInput.checked) {
		imprisonment = parseInt(awakeInput.value)
		awakeInput.parentNode.style.cursor = 'default'
		dormantInput.parentNode.style.cursor = 'pointer'
		imprisonedInput.parentNode.style.cursor = 'pointer'

	    }
	    else if (dormantInput.checked) {
		imprisonment = parseInt(dormantInput.value)
		awakeInput.parentNode.style.cursor = 'pointer'
		dormantInput.parentNode.style.cursor = 'default'
		imprisonedInput.parentNode.style.cursor = 'pointer'

	    }
	    else {
		imprisonment = parseInt(imprisonedInput.value)
		awakeInput.parentNode.style.cursor = 'pointer'
		dormantInput.parentNode.style.cursor = 'pointer'
		imprisonedInput.parentNode.style.cursor = 'default'
	    }
	}

	setImprisonment()
	
	const filterPretenders = () => {
	    let allPrets = []
	    np.forEach( (prets_ids) => {
		allPrets = allPrets.concat(prets_ids)
 	    })
	    allPrets = allPrets.filter( (elem, index, self) => {
		return index == self.indexOf(elem)
	    })
	    
	    vanillaPretenders.forEach( (pretender, pretender_id, map ) => {
		if (!allPrets.includes(pretender_id)) {
		    map.delete(pretender_id)
		}
	    })
	}

	filterPretenders()
	
	const setCurrentPretenders = () => {
	    if (nationPicker.value == "any") {
		currentPretendersIds = Array.from(vanillaPretenders.keys())
	    }
	    else {
		currentPretendersIds =  np.get(nationPicker.value)
	    }
	}
	
	const cleanTable = () => {
	    while (pretendersTableBody.childNodes.length > 0) {
		pretendersTableBody.removeChild(pretendersTableBody.lastChild)
	    }
	}

	
	const buildNationSelect = () => {
	    const fragmentEA = document.createDocumentFragment()
	    const fragmentMA = document.createDocumentFragment()
	    const fragmentLA = document.createDocumentFragment()
	    const appendNationToFragmentByEra = (nation, nation_id) => {
		if (nation.era == 1){
		    fragmentEA.appendChild(generateElement("option", {class: "nation-picker__option nation-picker__option--ea", value: nation_id, textNode: ("EA " + nation.name)}))
		}
		else if (nation.era == 2){
		    fragmentMA.appendChild(generateElement("option", {class: "nation-picker__option nation-picker__option--ma", value: nation_id, textNode: ("MA " + nation.name)}))
		}
		else if (nation.era == 3) {
		    fragmentLA.appendChild(generateElement("option", {class: "nation-picker__option nation-picker__option--la", value: nation_id, textNode: ("LA " + nation.name)}))
		}		 
	    }
	    vanillaNations.forEach(appendNationToFragmentByEra)
	    nationPicker.appendChild(fragmentEA)
	    nationPicker.appendChild(fragmentMA)
	    nationPicker.appendChild(fragmentLA)
	}
	
	buildNationSelect()

	const makeTests = () => {
	    deb.log("*** TESTS magicPathCost")
	    deb.log( test( magicPathCost, [40, 2, 3], 8  ) )
	    deb.log( test( magicPathCost, [40, 2, 1], 0  ) )
	    deb.log( test( magicPathCost, [40, 2, 2], 0  ) )
	    deb.log( test( magicPathCost, [80, 1, 4], 48  ) )
	    deb.log( test( magicPathCost, [80, 0, 2], 96  ) )
	    deb.log( test( magicPathCost, [40, 0, 0], 0 ) )
	    deb.log( test( magicPathCost, [40, "2", 3], 8 ) )
	    deb.log( test( magicPathCost, [40, undefined, 3], 80 ) )
	    deb.log( test( magicPathCost, [40, null, 3], 80 ) )
	    deb.log("*** TESTS magicCosts")
	    deb.log( test( magicCost,
			   [
			       vanillaPretenders.get("656"),
			       new Map([["E", 5],["S", 5],["B", 5]])
			   ],
			   328
			 )
		   )
	    deb.log( test( magicCost,
			   [
			       vanillaPretenders.get("656"),
			       new Map([["B", 2]])
			   ],
			   0
			 )
		   )
	    deb.log("*** TESTS maxDominionCost")
	    deb.log( test( maxDominionCost,
			   [4, 8],
			   70
			 )
		   )
	    deb.log( test( maxDominionCost,
			   [3, 2],
			   0
			 )
		   )
	}

	const magicPathCost = (newPathCost, baseLevel, wantedLevel) => {
	    if (baseLevel == null || baseLevel == undefined || baseLevel == "") {
		baseLevel = 0
	    }
	    if (wantedLevel <= baseLevel) {return 0}
	    let difference = wantedLevel - baseLevel
	    let cost = 0
	    for (let i = 1; i <= difference; i++) {
		cost = cost + i * 8
	    }
	    if (baseLevel == 0) {
		cost = cost - 8 + newPathCost
	    }
	    return cost
	}

	const maxDominionCost = (baseLevel, wantedLevel) => {
	    if (baseLevel == null || baseLevel == undefined || baseLevel == "") {
		baseLevel = 1
	    }
	    if (wantedLevel <= baseLevel) {return 0}
	    let difference = wantedLevel - baseLevel
	    let cost = 0
	    for (let i = 1; i <= difference; i++) {
		cost = cost + i * 7
	    }
	    return cost
	}

	const magicCost = (pretender, wantedLevels) => {
	    let cost = 0;
	    let newPathCost = parseInt(pretender.pathcost);
	    if (newPathCost == undefined) {
		newPathCost = 10
	    }
	    wantedLevels.forEach( (wantedLevel, path) => {
		cost = cost + magicPathCost(newPathCost, pretender[path], wantedLevel)
	    })
	    return cost    
	}

	const temperatureCost = (baseHeat, wantedHeat) => {
	    if (Math.abs(wantedHeat - baseHeat) >= 3) {
		return 120
	    }
	    else {
		return Math.abs(wantedHeat - baseHeat) * 40
	    }	
	}
	
	const calculatePretenders = () => {
	    const result = []
	    const countPretender = (id) => {
		const pretender = vanillaPretenders.get(id)

		// to check mising pointcosts
		if (pretender.pointcost == undefined) {
		    pretender.pointcost = -9999
		}
		// end of temp

		const nation = vanillaNations.get(nationPicker.value.toString())
		let discount = 0
		let baseTemperature = 0
		if (nation) {
		    if (nation["cheapgods20"].includes(parseInt(id))) {
			discount = 20
		    }
		    else if (nation["cheapgods40"].includes(parseInt(id))) {
			discount = 40
		    }
		    if (nation.idealcold) {
			baseTemperature = nation.idealcold * -1
		    }	
		}
		const result = {}
		result.id = id
		result.domCost = maxDominionCost(parseInt(pretender.startdom), dominionInput.value)
		result.magicCost = magicCost(
		    pretender,
		    new Map(
			[
			    ["F", fireInput.value], ["A", airInput.value], ["W", waterInput.value], ["E", earthInput.value],
			    ["S", astralInput.value], ["D", deathInput.value], ["N", natureInput.value], ["B", bloodInput.value]
			]
		    )
		)
		const whichMatter = (startLevel, wantedLevel) => {
			startLevel = parseInt(startLevel)
		    if (startLevel == undefined) {
			startLevel = 0
		    }
		    if (startLevel < wantedLevel) {
			return wantedLevel
		    }
		    else {
			return startLevel
		    }
		}
		result.currentDominion = whichMatter(pretender.startdom, dominionInput.value)
		result.currentF = whichMatter(pretender.F, fireInput.value)
		result.currentA = whichMatter(pretender.A, airInput.value)
		result.currentW = whichMatter(pretender.W, waterInput.value)
		result.currentE = whichMatter(pretender.E, earthInput.value)
		result.currentS = whichMatter(pretender.S, astralInput.value)
		result.currentD = whichMatter(pretender.D, deathInput.value)
		result.currentN = whichMatter(pretender.N, natureInput.value)
		result.currentB = whichMatter(pretender.B, bloodInput.value)
		result.pointsLeft = 425 - result.domCost - result.magicCost + discount - pretender.pointcost -
		    (parseInt(orderInput.value) + parseInt(productivityInput.value) +
		     parseInt(growthInput.value) +
		     parseInt(fortuneInput.value) + parseInt(magicInput.value)) * 40 +
		    temperatureCost(baseTemperature, heatInput.value)
		return result
	    }
	    currentPretendersIds.forEach((id) => {result.push(countPretender(id.toString()))})
	    calculatedPretenders = result

	    function comparePointsLeft(a, b) {
		if (a.pointsLeft < b.pointsLeft) {
		    return 1
		}
		else if (a.pointsLeft > b.pointsLeft) {
		    return -1
		}
		return 0
	    }
	    calculatedPretenders.sort(comparePointsLeft)
	}


	const updateImprisonmentPointsView = () => {
	    const howMany = calculatedPretenders.length
	    const rows = pretendersTableBody.childNodes
	    for (let i = 0; i < howMany; i++) {
		rows[i].childNodes[1].textContent = calculatedPretenders[i].pointsLeft + imprisonment

	    }

	}
	
	const printPretenders = () => {
	    cleanTable()
	    
	    let pathNames = {"F": "fire", "A": "air", "W": "water", "E": "earth", "S": "astral", "D": "death", "N": "nature", "B": "blood"}

	    const printMagic = (calculated, path) => {
		const level = calculated["current" + path]
		const td = generateElement("td", {class: "pretenders-table__cell pretenders-table__cell--magic pretenders-table__cell--"+pathNames[path]})
		if (level > 0) {
		    td.appendChild(generateElement("span", {textNode: path+calculated["current"+path], class: "pretenders-table__text pretenders-table__text--magic pretenders-table__text--" + pathNames[path]}))
		}
		else {
		    td.appendChild(generateElement("span", {class: "pretenders-table__text pretenders-table__text--magic"}))
		}
		return td
	    }
	    
	    const fragment =  document.createDocumentFragment()

	    const printPretender = (calculated) => {
		const row = tableRow.cloneNode(true)
		const cells = row.childNodes
   
		cells[0].textContent = vanillaPretenders.get(calculated.id.toString())["name"]
		cells[1].textContent = calculated.pointsLeft + imprisonment
		cells[2].textContent = calculated.currentDominion

		if (calculated.currentF > 0) {
		    cells[3].textContent = calculated.currentF
		    cells[3].classList.add("pretenders-table__cell--fire")
		}
		if (calculated.currentA > 0) {
		    cells[4].textContent = calculated.currentA
		    cells[4].classList.add("pretenders-table__cell--air")
		}
		if (calculated.currentW > 0) {
		    cells[5].textContent = calculated.currentW
		    cells[5].classList.add("pretenders-table__cell--water")
		}
		if (calculated.currentE > 0) {
		    cells[6].textContent = calculated.currentE
		    cells[6].classList.add("pretenders-table__cell--earth")
		}
		if (calculated.currentS > 0) {
		    cells[7].textContent = calculated.currentS
		    cells[7].classList.add("pretenders-table__cell--astral")
		}
		if (calculated.currentD > 0) {
		    cells[8].textContent = calculated.currentD
		    cells[8].classList.add("pretenders-table__cell--death")
		}
		if
		    (calculated.currentN > 0) {
		    cells[9].textContent = calculated.currentN
		    cells[9].classList.add("pretenders-table__cell--nature")
		}
		if (calculated.currentB > 0) {
		    cells[10].textContent = calculated.currentB
		    cells[10].classList.add("pretenders-table__cell--blood")
		}
		1

		fragment.appendChild(row)
	    }
	    calculatedPretenders.forEach((calculated) => {printPretender(calculated)})
	    pretendersTableBody.appendChild(fragment)
	    deb.rep(calculatedPretenders.length, " <- number of pretenders")
	}
	
	const update = () => {
	    setCurrentPretenders()
	    setImprisonment()
	    calculatePretenders()
	    printPretenders()
	}
	
	const nationUpdate = () => {
	    colorizeHeat(nationPicker.value, heatInput)
	    setCurrentPretenders()
	    calculatePretenders()
	    printPretenders()
	}

	const magicUpdate = () => {

	    blessEffectsFire.textContent = fireBlessEffect()
	    if (fireInput.value >= 4) {
		blessEffectsFire.classList.add("bless-effects--visible")
	    }
	    else {
		blessEffectsFire.classList.remove("bless-effects--visible")
	    }

	    blessEffectsAir.textContent = airBlessEffect()
	    if (airInput.value >= 4) {
		blessEffectsAir.classList.add("bless-effects--visible")
	    }
	    else {
		blessEffectsAir.classList.remove("bless-effects--visible")
	    }

	    blessEffectsWater.textContent = waterBlessEffect()
	    if (waterInput.value >= 4) {
		blessEffectsWater.classList.add("bless-effects--visible")
	    }
	    else {
		blessEffectsWater.classList.remove("bless-effects--visible")
	    }

	    blessEffectsEarth.textContent = earthBlessEffect()
	    if (earthInput.value >= 4) {
		blessEffectsEarth.classList.add("bless-effects--visible")
	    }
	    else {
		blessEffectsEarth.classList.remove("bless-effects--visible")
	    }

	    blessEffectsAstral.textContent = astralBlessEffect()
	    if (astralInput.value >= 4) {
		blessEffectsAstral.classList.add("bless-effects--visible")
	    }
	    else {
		blessEffectsAstral.classList.remove("bless-effects--visible")
	    }

	    blessEffectsDeath.textContent = deathBlessEffect()
	    if (deathInput.value >= 4) {
		blessEffectsDeath.classList.add("bless-effects--visible")
	    }
	    else {
		blessEffectsDeath.classList.remove("bless-effects--visible")
	    }

	    blessEffectsNature.textContent = natureBlessEffect()
	    if (natureInput.value >= 4) {
		blessEffectsNature.classList.add("bless-effects--visible")
	    }
	    else {
		blessEffectsNature.classList.remove("bless-effects--visible")
	    }

	    blessEffectsBlood.textContent = bloodBlessEffect()
	    if (bloodInput.value >= 4) {
		blessEffectsBlood.classList.add("bless-effects--visible")
	    }
	    else {
		blessEffectsBlood.classList.remove("bless-effects--visible")
	    }

	    calculatePretenders()
	    printPretenders()
	    
	}

	const heatUpdate = () => {
	    calculatePretenders()
	    colorizeHeat(nationPicker.value, heatInput)
	    printPretenders()
	}

	const scalesUpdate = () => {
	    calculatePretenders()
	    printPretenders()
	}

	const imprisonmentUpdate = (event) => {
	    setImprisonment()
	    updateImprisonmentPointsView()
	}


	function colorizeHeat(nationId, heatInput) {
	    let preferredHeat = 0
	    let currentHeat = heatInput.value

	    if (nationId) {
		let nation = vanillaNations.get(nationId.toString())
		if (nation && nation.idealcold) {
		    preferredHeat = nation.idealcold * -1
		}
	    }
	    
	    if (currentHeat != preferredHeat) {
		heatInput.classList.add("value-picker__input--negative")
	    }
	    else {
		heatInput.classList.remove("value-picker__input--negative")
	    }
		
	}

	update()

//	makeTests()
	
	nationPicker.addEventListener('change', nationUpdate)
	
	dominionInput.addEventListener('change', magicUpdate)	
	fireInput.addEventListener('change', magicUpdate)
	airInput.addEventListener('change', magicUpdate)
	waterInput.addEventListener('change', magicUpdate)
	earthInput.addEventListener('change', magicUpdate)
	astralInput.addEventListener('change', magicUpdate)
	deathInput.addEventListener('change', magicUpdate)
	natureInput.addEventListener('change', magicUpdate)
	bloodInput.addEventListener('change', magicUpdate)

	heatInput.addEventListener('change', heatUpdate)

	orderInput.addEventListener('change', scalesUpdate)
	productivityInput.addEventListener('change', scalesUpdate)
	growthInput.addEventListener('change', scalesUpdate)
	fortuneInput.addEventListener('change', scalesUpdate)
	magicInput.addEventListener('change', scalesUpdate)

	awakeInput.addEventListener('change', imprisonmentUpdate)
	dormantInput.addEventListener('change', imprisonmentUpdate)
	imprisonedInput.addEventListener('change', imprisonmentUpdate)

	
    }

    window.addEventListener('load', main)
}
