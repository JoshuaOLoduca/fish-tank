class SwitchFish extends Fish {

  constructor(options) {
    super(options);
    this.imageUri = '/images/switch_fish.png'; // Set the image

  }

  onClick(event) {
    this.makeNewVelocity(50);
  }
}
