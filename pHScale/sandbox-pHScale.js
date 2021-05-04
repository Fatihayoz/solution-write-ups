const pHName = pH => pH < 0 || pH > 14 ? 'invalid' :
	pH < 7 ? 'acidic' : pH > 7 ? 'alkaline' : 'neutral';
	

function pHName(pH) {
	if (0 <= pH && pH < 7) {
		return 'acidic';
	} else if (7 < pH && pH <= 14) {
		return 'alkaline';
	} else if (pH === 7) {
		return 'neutral';
	} else {
		return 'invalid';
	}
}