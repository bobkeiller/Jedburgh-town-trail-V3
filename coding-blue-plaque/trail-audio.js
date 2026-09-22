(function () {
  'use strict';

  const ENABLED_KEY = 'jedburghTownTrail:audioGuide:v1';
  const PLAYBACK_KEY = 'jedburghTownTrail:audioPlayback:v1';
  const AUDIO_ROOT = '../Jedburgh_Town_Trail_Assets/audio/mp3/';
  const AUDIO_BY_PIN = {
    'the-glebe': 'The Glebe.mp3',
    'huttons-unconformity': 'Huttons Unconformity.mp3',
    'abbey': 'The Abbey.mp3',
    'war-memorial': 'War Memorial.mp3',
    'ramparts': 'The Ramparts.mp3',
    'public-hall': 'Public Hall.mp3',
    'newgate': 'New Gate.mp3',
    'market-place': 'Market Place .mp3',
    'canongate': 'Canongate .mp3',
    'sheriff-court': 'Sheriff Court.mp3',
    'abbey-close': 'Abbey Close.mp3',
    'castle-jail': 'Castle Jail.mp3',
    'library': 'Public Library.mp3',
    'prince-charlies-house': 'Prince Charlie’s House.mp3',
    'exchange-street': 'Exchange Street.mp3',
    'high-street': 'High Street.mp3',
    'spread-eagle': 'Spread Eagle Hotel.mp3',
    'loupin-on-stane': 'The Loupin On Stane.mp3',
    'jedburgh-friary': 'Jedburgh Friary.mp3',
    'trinity-church': 'Former Trinity Church.mp3',
    'mary-queen-of-scots-house': 'Mary Queen of Scots.mp3',
    'pipers-house': 'Pipers House.mp3',
    'canongate-bridge': 'Canongate Bridge.mp3',
    'riverside-walk': 'Riverside Walk .mp3',
    'time-for-reflection': 'Time for Reflection .mp3'
  };
  const DEFAULT_AUDIO = AUDIO_ROOT + 'Jedburgh Home Page copy.mp3';
  const DIRECTION_ROOT = '../Jedburgh_Town_Trail_Assets/audio/mp3-directions/';
  const DIRECTION_BY_PIN = {
    'the-glebe': 'Glebe.mp3',
    'huttons-unconformity': 'Huttons Unconformity.mp3',
    'abbey': 'Abbey.mp3',
    'war-memorial': 'War Memorial.mp3',
    'ramparts': 'Ramparts.mp3',
    'public-hall': 'Public Hall.mp3',
    'newgate': 'Newgate.mp3',
    'market-place': 'Market Place.mp3',
    'canongate': 'Canongate.mp3',
    'sheriff-court': 'Sheriff Court.mp3',
    'abbey-close': 'Abbey Close.mp3',
    'castle-jail': 'Castle Jail.mp3',
    'library': 'Public Library.mp3',
    'prince-charlies-house': 'Prince Charlie’s House.mp3',
    'exchange-street': 'Exchange Street.mp3',
    'high-street': 'High Street.mp3',
    'spread-eagle': 'Spread Eagle.mp3',
    'loupin-on-stane': 'Loupin on Stane.mp3',
    'jedburgh-friary': 'Jedburgh Friary.mp3',
    'trinity-church': 'Trinity Church .mp3',
    'mary-queen-of-scots-house': 'Mary Queen of Scots.mp3',
    'pipers-house': 'Pipers House.mp3',
    'canongate-bridge': 'Canongate Bridge .mp3',
    'riverside-walk': 'Riverside Walk.mp3'
  };

  function enabled() {
    try { return localStorage.getItem(ENABLED_KEY) === 'true'; }
    catch (_) { return false; }
  }

  function setEnabled(value) {
    try { localStorage.setItem(ENABLED_KEY, value ? 'true' : 'false'); } catch (_) {}
    if (!value) clearPlayback();
    document.dispatchEvent(new CustomEvent('trailAudioPreferenceChanged', { detail: { enabled: !!value } }));
  }

  function sourceFor(pin) {
    if (pin && pin.audio) return pin.audio;
    if (pin && AUDIO_BY_PIN[pin.id]) return AUDIO_ROOT + AUDIO_BY_PIN[pin.id];
    return DEFAULT_AUDIO;
  }

  function directionSourceFor(pin) {
    return pin && DIRECTION_BY_PIN[pin.id] ? DIRECTION_ROOT + DIRECTION_BY_PIN[pin.id] : '';
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
