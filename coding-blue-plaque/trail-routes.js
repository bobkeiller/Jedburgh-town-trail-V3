(function () {
  'use strict';

  const FULL_LOCATION_IDS = [
    'the-glebe', 'huttons-unconformity', 'abbey', 'war-memorial', 'ramparts',
    'public-hall', 'newgate', 'market-place', 'canongate', 'sheriff-court',
    'abbey-close', 'castle-jail', 'library', 'prince-charlies-house',
    'exchange-street', 'high-street', 'spread-eagle', 'loupin-on-stane',
    'jedburgh-friary', 'trinity-church', 'mary-queen-of-scots-house',
    'pipers-house', 'canongate-bridge', 'riverside-walk'
  ];

  const ESSENTIAL_LOCATION_IDS = [
    'public-hall', 'abbey', 'war-memorial', 'sheriff-court',
    'prince-charlies-house', 'high-street', 'mary-queen-of-scots-house',
    'canongate', 'market-place'
  ];

  const routes = {
    essential: {
      name: 'Essential Jedburgh Trail',
      welcomeLocationId: 'public-hall',
      congratulationsLocationId: 'market-place',
      congratulationsImage: '../Jedburgh_Town_Trail_Assets/photographs/market_place3.png',
      locationIds: ESSENTIAL_LOCATION_IDS,
      mapImage: '../Jedburgh_Town_Trail_Assets/created%20graphics/Essential_Jedburgh_Location_Map.png'
    },
    full: {
      name: 'Full Jedburgh Town Trail',
      welcomeLocationId: 'the-glebe',
      congratulationsLocationId: 'the-glebe',
      locationIds: FULL_LOCATION_IDS,
      mapImage: '../Jedburgh_Town_Trail_Assets/created%20graphics/Trail_Map.png'
    }
  };

  function routeKeyForMode(modeKey) {
    const mode = window.TrailExperience && TrailExperience.modes[modeKey];
    return mode && mode.route === 'essential' ? 'essential' : 'full';
  }

  function forMode(modeKey) {
    return routes[routeKeyForMode(modeKey)];
  }

  function pinById(id) {
    return jedburghTrail.pins.find(pin => pin.id === id);
  }

  function pinsForMode(modeKey) {
    return forMode(modeKey).locationIds.map(pinById).filter(Boolean);
  }

  function welcomePin(modeKey) {
    return pinById(forMode(modeKey).welcomeLocationId);
  }

  function congratulationsPin(modeKey) {
    return pinById(forMode(modeKey).congratulationsLocationId);
  }

  function fromHereFor(pin, modeKey) {
    const pins = pinsForMode(modeKey);
    const index = pins.findIndex(candidate => candidate.id === pin.id);
    if (index < 0) return pin.fromHere || '';
    const next = pins[index + 1];
    if (!next) return '';
    if (routeKeyForMode(modeKey) === 'full') return pin.fromHere || '';
    return essentialFromHereByStop[pin.id] || `Your next location is ${next.name}. Use Walking directions for a suggested route.`;
  }

  window.TrailRoutes = {
    routes,
    routeKeyForMode,
    forMode,
    pinsForMode,
    welcomePin,
    congratulationsPin,
    fromHereFor
  };
})();
