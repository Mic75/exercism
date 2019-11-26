class SpaceAge {
  constructor(seconds){

    const earthYearInSeconds = 31557600;
    const orbitalPeriods = {
      Earth:    earthYearInSeconds,
      Mercury:  earthYearInSeconds * 0.2408467 ,
      Venus:    earthYearInSeconds * 0.61519726,
      Mars:     earthYearInSeconds * 1.8808158 ,
      Jupiter:  earthYearInSeconds * 11.862615 ,
      Saturn:   earthYearInSeconds * 29.447498 ,
      Uranus:   earthYearInSeconds * 84.016846 ,
      Neptune:  earthYearInSeconds * 164.79132
    };

    this.seconds = seconds;

    Object.entries(orbitalPeriods).forEach(([planet, period]) => {
      this[`on${planet}`] = () => Number((seconds / period).toFixed(2));
    });
  }
}

export default SpaceAge;