class BiteFish extends Fish {
  constructor(options) {
    super(options); // Call super to run the code inside `Fish`'s constructor
    this.imageUri = '/images/bite_fish.gif'; // Set the image
  }

  update(t) {
    super.update(t);
    const fishNearMe = window.fishtank.getProximateDenizens(this.position, 65);
    console.log(fishNearMe)
    if (fishNearMe.length > 0) {
      for (const fish of fishNearMe) {
        if (fish.id !== this.id && fish.isTasty === true) fish.kill();
      }
    }
  }


}
