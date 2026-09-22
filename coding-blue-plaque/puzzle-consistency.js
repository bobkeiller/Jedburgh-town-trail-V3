(() => {
  const locationNames = {
    'the-glebe': 'The Glebe',
    'huttons-unconformity': 'Hutton’s Unconformity',
    abbey: 'Jedburgh Abbey',
    'war-memorial': 'the War Memorial',
    ramparts: 'the Ramparts',
    'public-hall': 'the Public Hall',
    newgate: 'Newgate',
    'market-place': 'Market Place',
    canongate: 'Canongate',
    'sheriff-court': 'the Sheriff Court',
    'abbey-close': 'Abbey Close',
    'castle-jail': 'Jedburgh Castle Jail',
    library: 'the Library',
    'prince-charlies-house': 'Prince Charlie’s House',
    'exchange-street': 'Exchange Street',
    'high-street': 'High Street',
    'spread-eagle': 'the Spread Eagle',
    'loupin-on-stane': 'the Loupin’on Stane',
    'jedburgh-friary': 'Jedburgh Friary',
    'trinity-church': 'Trinity Church',
    'mary-queen-of-scots-house': 'Mary Queen of Scots House',
    'pipers-house': 'Piper’s House',
    'canongate-bridge': 'Canongate Bridge',
    'riverside-walk': 'the Riverside Walk',
    'time-for-reflection': 'Time for Reflection'
  };

  function finishPage() {
    const returnLink = document.querySelector('a[href^="location.html?id="]');
    if (returnLink) {
      const url = new URL(returnLink.href, location.href);
      const destination = url.searchParams.get('id');
      returnLink.classList.add('puzzle-return');
      returnLink.textContent = `← Return to ${locationNames[destination] || 'the trail'}`;
    }

    if (!document.title.includes('Jedburgh Town Trail')) {
      document.title = `${document.title} | Jedburgh Town Trail`;
    }

    document.querySelectorAll('button').forEach(button => {
      if (!button.hasAttribute('type')) button.type = 'button';
    });

    document.querySelectorAll('.status,.feedback,.answer-status,.player-message,.message,#result').forEach(region => {
      if (!region.hasAttribute('role')) region.setAttribute('role', 'status');
      if (!region.hasAttribute('aria-live')) region.setAttribute('aria-live', 'polite');
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', finishPage);
  else finishPage();
})();
