class SeaWeed extends Denizen {
  constructor(options) {
    super(options);
    this.imageUri = '/images/seaweed.png';
    this.position.y += this.height;
  }

  update(t) {
    // no physics for Starter
  }
}
