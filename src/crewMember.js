class CrewMember {
    constructor(position, ship) {
        this.position = position;
        if (ship) {
            this.currentShip = ship
        } else {
            this.currentShip = "Looking for a Rig"
        }
        
    }
    engageWarpDrive() {
        return (typeof this.currentShip==="object" && this.position === "Pilot") ? "warp!" : "had no effect"
    }

    setsInvisibility() {
        return (typeof this.currentShip==="object" && this.position === "Defender") ? this.currentShip.cloaked=true : "had no effect"
    }

    chargePhasers() {
        return (typeof this.currentShip==="object" && this.position === "Gunner") ? "charge phasers" : "had no effect"
    }
}

