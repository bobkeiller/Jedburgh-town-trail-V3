(function () {
  'use strict';

  const RETURN_KEY = 'jedburghTownTrail:optionsReturn:v1';

  function restorePosition() {
    try {
      const saved = JSON.parse(sessionStorage.getItem(RETURN_KEY) || 'null');
      sessionStorage.removeItem(RETURN_KEY);
      if (!saved || saved.url !== location.pathname + location.search) return;
      window.addEventListener('load', () => requestAnimationFrame(() => scrollTo(0, Number(saved.y) || 0)), { once: true });
    } catch (_) {}
  }

  function createDialog() {
    const dialog = document.createElement('dialog');
    dialog.className = 'trail-options-dialog';
    dialog.setAttribute('aria-labelledby', 'trailOptionsTitle');
    dialog.innerHTML = `
      <form method="dialog">
        <div class="trail-options-heading">
          <div><h2 id="trailOptionsTitle">Trail options</h2><p>Change your experience without losing your place.</p></div>
          <button class="dialog-close" value="cancel" aria-label="Close trail options">×</button>
        </div>
        <fieldset>
          <legend>Choose your experience</legend>
          <div class="trail-mode-options"></div>
        </fieldset>
        <label class="trail-audio-option">
          <span><strong>Audio guide</strong><small>Show audio controls at every location</small></span>
          <input type="checkbox" class="trail-audio-checkbox">
        </label>
        <div class="trail-options-actions">
          <button class="btn secondary" value="cancel">Cancel</button>
          <button class="btn primary trail-options-apply" value="default">Apply changes</button>
        </div>
      </form>`;

    const modeOptions = dialog.querySelector('.trail-mode-options');
    Object.entries(TrailExperience.modes).forEach(([key, mode]) => {
      const label = document.createElement('label');
      label.className = 'trail-mode-option';
      label.innerHTML = `<input type="radio" name="trail-mode" value="${key}"><span><strong>${mode.name}</strong><small>${mode.time}</small></span>`;
      modeOptions.append(label);
    });

    dialog.addEventListener('click', event => {
      if (event.target === dialog) dialog.close('cancel');
    });
    dialog.querySelector('.trail-options-apply').addEventListener('click', event => {
      event.preventDefault();
      const selected = dialog.querySelector('input[name="trail-mode"]:checked');
      const mode = selected ? selected.value : TrailExperience.current();
      const audioEnabled = dialog.querySelector('.trail-audio-checkbox').checked;
      TrailExperience.set(mode);
      TrailAudio.setEnabled(audioEnabled);
      dialog.close();
      document.dispatchEvent(new CustomEvent('trailOptionsApplied', { detail: { mode, audioEnabled } }));
      if (document.querySelector('[data-trail-options-live]')) return;
      try {
        sessionStorage.setItem(RETURN_KEY, JSON.stringify({ url: location.pathname + location.search, y: scrollY }));
      } catch (_) {}
      location.reload();
    });
    document.body.append(dialog);
    return dialog;
  }

  function init() {
    if (!window.TrailExperience || !window.TrailAudio) return;
    restorePosition();
    const dialog = createDialog();
    document.querySelectorAll('[data-trail-options]').forEach(button => {
      button.addEventListener('click', () => {
        const currentMode = TrailExperience.current();
        const radio = dialog.querySelector(`input[name="trail-mode"][value="${currentMode}"]`);
        if (radio) radio.checked = true;
        dialog.querySelector('.trail-audio-checkbox').checked = TrailAudio.enabled();
        dialog.showModal();
      });
    });
  }

  init();
})();
