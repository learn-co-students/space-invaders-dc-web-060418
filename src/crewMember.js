const unassigned = "Looking for a Rig";
const no_effect = "had no effect";
class CrewMember {

	constructor(position) {
		this.position = position;
		this.currentShip = unassigned;
	}

	engageWarpDrive() {
		if (this.currentShip === unassigned) {
			return no_effect;
		}
	}

	setsInvisibility() {
		if (this.currentShip !== unassigned && this.position === 'Defender') {
			this.currentShip.cloaked = true;
			return this;
		} else {
			return no_effect;
		}
	}

	chargePhasers() {
		if (this.currentShip === unassigned) {
			return no_effect;
		}
	}

}
