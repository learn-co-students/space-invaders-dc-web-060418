class Spaceship {
  constructor(name, arrayOfMembers, phasers, shields) {
    this.name = name
    this.crew = arrayOfMembers
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = "disengaged"
    this.phasersCharge = "uncharged"

    if (this.crew.length == 0) {
      this.docked = true
    } else {
      this.docked = false
      this.crew.forEach(member => {
        member.currentShip = this
      })
    }
  }
}
