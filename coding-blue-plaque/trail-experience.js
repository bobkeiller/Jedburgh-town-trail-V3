(function () {
  'use strict';

  const STORAGE_KEY = 'jedburghTownTrail:experience:v1';
  const DEFAULT_MODE = 'explore';
  const modes = {
    explore: {
      name: 'Explore the Town',
      shortName: 'Explore',
      time: 'About 2 hours',
      description: 'A gentle walk around the town’s key historic attractions.',
      plaques: false,
      puzzles: false
    },
    plaques: {
      name: 'Places and Plaques',
      shortName: 'Plaques',
      time: 'About 2½ hours',
      description: 'Explore the attractions, collect and sort the plaques into stories, and unveil the secret message.',
      plaques: true,
      puzzles: false
    },
    puzzles: {
      name: 'Punishing Puzzles',
      shortName: 'Puzzles',
      time: 'About 4 hours',
      description: 'Explore, collect the plaques, then solve the puzzles presented at each location.',
      plaques: true,
      puzzles: true
    }
  };

  function valid(mode) { return Object.prototype.hasOwnProperty.call(modes, mode); }
  function get() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return valid(stored) ? stored : null;
    } catch (_) {
      return null;
    }
  }
  function current() { return get() || DEFAULT_MODE; }
  function set(mode) {
    if (!valid(mode)) return current();
    try { localStorage.setItem(STORAGE_KEY, mode); } catch (_) {}
    document.dispatchEvent(new CustomEvent('trailExperienceChanged', { detail: { mode } }));
    return mode;
  }

  window.TrailExperience = { STORAGE_KEY, DEFAULT_MODE, modes, get, current, set };
})();
