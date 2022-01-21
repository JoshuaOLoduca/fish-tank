$(() => {
  const seaweed = [];

  window.fishtank = new Fishtank('fishtank');             // making it global to make debugging 1% easier.  shhhh.
  window.fishtank.registerSpecies(SwitchFish, GoFish, BiteFish);
  let starter = new Starter({
    tank: window.fishtank,     // look, it's Dependency Injection!  Pretend you care!
    position: new Vector(0, 0)
  });

  // Generates seaweed
  for (let i = 0; i < 22; i++) {
    let x = (
      (Math.random()
        * (window.fishtank.getBounds().maxX + Math.abs(window.fishtank.getBounds().minX))) - Math.abs(window.fishtank.getBounds().minX));

    let y = (
      (Math.random()
        * (window.fishtank.getBounds().maxY + Math.abs(window.fishtank.getBounds().minY))) - Math.abs(window.fishtank.getBounds().minY));

    seaweed.push(new SeaWeed({
      tank: window.fishtank,
      position: new Vector(x,y)
    }));
  }

});



