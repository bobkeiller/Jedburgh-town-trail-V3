(function () {
  'use strict';

  const ENABLED_KEY = 'jedburghTownTrail:audioGuide:v1';
  const PLAYBACK_KEY = 'jedburghTownTrail:audioPlayback:v1';
  const VOICEOVER_ROOT = '../Jedburgh_Town_Trail_Assets/audio/Location_voice_overs/';
  const LEGACY_AUDIO_ROOT = '../Jedburgh_Town_Trail_Assets/audio/mp3/';
  const AUDIO_BY_PIN = {
    'the-glebe': VOICEOVER_ROOT + '1 The Glebe.mp3',
    'huttons-unconformity': VOICEOVER_ROOT + "2 Hutton's Unconformity.mp3",
    'abbey': VOICEOVER_ROOT + '3 Abbey.mp3',
    'war-memorial': VOICEOVER_ROOT + '4 War Memorial.mp3',
    'ramparts': VOICEOVER_ROOT + '5 Ramparts.mp3',
    'public-hall': VOICEOVER_ROOT + '6 Town Hall.mp3',
    'newgate': VOICEOVER_ROOT + '7 New Gate.mp3',
    'market-place': VOICEOVER_ROOT + '8 Market Place.mp3',
    'canongate': VOICEOVER_ROOT + '9 Cannon Gate.mp3',
    'sheriff-court': VOICEOVER_ROOT + '10 Sherriff Court.mp3',
    'abbey-close': VOICEOVER_ROOT + '11 Abbey Close.mp3',
    'castle-jail': VOICEOVER_ROOT + '12 Castle Jail.mp3',
    'library': LEGACY_AUDIO_ROOT + 'Public Library.mp3',
    'prince-charlies-house': VOICEOVER_ROOT + "14 Prince Charlie's House.mp3",
    'exchange-street': VOICEOVER_ROOT + '15 Exchange Street.mp3',
    'high-street': VOICEOVER_ROOT + '16 High Street.mp3',
    'spread-eagle': VOICEOVER_ROOT + '17 Spread Eagle.mp3',
    'loupin-on-stane': VOICEOVER_ROOT + "18 Loupin' -on Stane.mp3",
    'jedburgh-friary': VOICEOVER_ROOT + '19 Jedburgh Friary.mp3',
    'trinity-church': VOICEOVER_ROOT + '20 Trinity Church.mp3',
    'mary-queen-of-scots-house': VOICEOVER_ROOT + '21 Mary Queen of Scots House.mp3',
    'pipers-house': VOICEOVER_ROOT + "22 Piper's House.mp3",
    'canongate-bridge': VOICEOVER_ROOT + '23 Canongate Bridge.mp3',
    'riverside-walk': VOICEOVER_ROOT + '24 Riverside Walk.mp3',
    'congratulations': LEGACY_AUDIO_ROOT + 'Time for Reflection .mp3'
  };
  const DEFAULT_AUDIO = VOICEOVER_ROOT + '0 Welcome.mp3';
  const FULL_DIRECTION_ROOT = '../Jedburgh_Town_Trail_Assets/audio/Directions_full_trail/';
  const ESSENTIAL_DIRECTION_ROOT = '../Jedburgh_Town_Trail_Assets/audio/Directions_essential_trail/';
  const FULL_DIRECTION_BY_PIN = {
    'the-glebe': FULL_DIRECTION_ROOT + '1 The Glebe copy.mp3',
    'huttons-unconformity': FULL_DIRECTION_ROOT + "2 Hutton's Unconformity copy.mp3",
    'abbey': FULL_DIRECTION_ROOT + '3 Abbey copy.mp3',
    'war-memorial': FULL_DIRECTION_ROOT + '4 War Memorial copy.mp3',
    'ramparts': FULL_DIRECTION_ROOT + '5 Ramparts copy.mp3',
    'public-hall': FULL_DIRECTION_ROOT + '6 Town Hall copy.mp3',
    'newgate': FULL_DIRECTION_ROOT + '7 New Gate copy.mp3',
    'market-place': FULL_DIRECTION_ROOT + '8 Market Place copy.mp3',
    'canongate': FULL_DIRECTION_ROOT + '9 Cannon Gate copy.mp3',
    'sheriff-court': FULL_DIRECTION_ROOT + '10 Sherriff Court copy.mp3',
    'abbey-close': FULL_DIRECTION_ROOT + '11 Abbey Close copy.mp3',
    'castle-jail': FULL_DIRECTION_ROOT + '12 Castle Jail copy.mp3',
    'library': FULL_DIRECTION_ROOT + '13 Library (Audio Missing) copy.mp3',
    'prince-charlies-house': FULL_DIRECTION_ROOT + "14 Prince Charlie's House copy.mp3",
    'exchange-street': FULL_DIRECTION_ROOT + '15 Exchange Street copy.mp3',
    'high-street': FULL_DIRECTION_ROOT + '16 High Street copy.mp3',
    'spread-eagle': FULL_DIRECTION_ROOT + '17 Spread Eagle copy.mp3',
    'loupin-on-stane': FULL_DIRECTION_ROOT + "18 Loupin' -on Stane copy.mp3",
    'jedburgh-friary': FULL_DIRECTION_ROOT + '19 Jedburgh Friary copy.mp3',
    'trinity-church': FULL_DIRECTION_ROOT + '20 Trinity Church copy.mp3',
    'mary-queen-of-scots-house': FULL_DIRECTION_ROOT + '21 Mary Queen of Scots House copy.mp3',
    'pipers-house': FULL_DIRECTION_ROOT + "22 Piper's House copy.mp3",
    'canongate-bridge': FULL_DIRECTION_ROOT + '23 Canongate Bridge copy.mp3'
  };
  const ESSENTIAL_DIRECTION_BY_PIN = {
    'public-hall': ESSENTIAL_DIRECTION_ROOT + '1 Town Hall Short.mp3',
    'abbey': ESSENTIAL_DIRECTION_ROOT + '2 Abbey.mp3',
    'war-memorial': ESSENTIAL_DIRECTION_ROOT + '3 War Memorial.mp3',
    'sheriff-court': ESSENTIAL_DIRECTION_ROOT + '4 Sheriff Court.mp3',
    'prince-charlies-house': ESSENTIAL_DIRECTION_ROOT + "5 Prince Charlie's House.mp3",
    'high-street': ESSENTIAL_DIRECTION_ROOT + '6 High Street.mp3',
    'mary-queen-of-scots-house': ESSENTIAL_DIRECTION_ROOT + '7 Mary Queen of Scots House.mp3',
    'canongate': ESSENTIAL_DIRECTION_ROOT + '8 Cannongate.mp3'
  };

  function enabled() {
    try {
      const stored = localStorage.getItem(ENABLED_KEY);
      return stored === null ? true : stored === 'true';
    } catch (_) { return true; }
  }

  function setEnabled(value) {
    try { localStorage.setItem(ENABLED_KEY, value ? 'true' : 'false'); } catch (_) {}
    if (!value) clearPlayback();
    document.dispatchEvent(new CustomEvent('trailAudioPreferenceChanged', { detail: { enabled: !!value } }));
  }

  function sourceFor(pin) {
    if (pin && pin.audio) return pin.audio;
    if (pin && AUDIO_BY_PIN[pin.id]) return AUDIO_BY_PIN[pin.id];
    return DEFAULT_AUDIO;
  }

  function directionSourceFor(pin, modeKey) {
    if (!pin || !window.TrailRoutes) return '';
    const selectedMode = modeKey || TrailExperience.current();
    const directions = TrailRoutes.routeKeyForMode(selectedMode) === 'essential'
      ? ESSENTIAL_DIRECTION_BY_PIN
      : FULL_DIRECTION_BY_PIN;
    return directions[pin.id] || '';
  }

  function readPlayback() {
    try {
      const state = JSON.parse(sessionStorage.getItem(PLAYBACK_KEY) || 'null');
      return state && typeof state === 'object' ? state : null;
    } catch (_) { return null; }
  }

  function savePlayback(state) {
    try {
      sessionStorage.setItem(PLAYBACK_KEY, JSON.stringify({
        locationId: state.locationId,
        src: state.src,
        currentTime: Number(state.currentTime) || 0,
        playing: !!state.playing,
        updatedAt: Date.now()
      }));
    } catch (_) {}
  }

  function clearPlayback() {
    try { sessionStorage.removeItem(PLAYBACK_KEY); } catch (_) {}
  }

  window.TrailAudio = { DEFAULT_AUDIO, enabled, setEnabled, sourceFor, directionSourceFor, readPlayback, savePlayback, clearPlayback };
})();
