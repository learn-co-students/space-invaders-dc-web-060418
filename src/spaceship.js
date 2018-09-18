class Spaceship {

	constructor(name, crew, phasers, shields) {
		this.name = name;
		this.crew = crew;
		this.phasers = phasers;
		this.shields = shields;
		this.cloaked = false;
		this.warpDrive = "disengaged";
		this.docked = this.crew.length === 0;
		this.phasersCharge = "uncharged";

		for (const member of crew) {
			member.currentShip = this
		}
	}
}
