class CrewMember {
    constructor(position, ship ) {
        this.position = position;
        this.currentShip = ship ? ship : `Looking for a Rig`;
    }
    
    engageWarpDrive(){
        return (this.hasShip() && this.position === `Pilot`) ? this.currentShip.warpDrive = 'engaged' : `had no effect`
    }

    setsInvisibility() {
        return this.hasShip() && this.position === `Defender` ? this.currentShip.cloaked = true : `had no effect`
    }

    chargePhasers() {
        return this.hasShip() && this.position === `Gunner` ? this.currentShip.phasersCharge = `charged` : `had no effect`
      }

    hasShip() {
        return this.currentShip !== `Looking for a Rig`;
    }
}

