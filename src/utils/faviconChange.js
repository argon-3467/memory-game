import darkSchemeFavicon from '/favicon-light.svg';
import lightSchemeFavicon from '/favicon-dark.svg';

const favicon = document.getElementById('favicon');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function switchFavicon(e) {
  const darkModeOn = e.matches;
  favicon.href = darkModeOn ? darkSchemeFavicon : lightSchemeFavicon;
}

switchFavicon(prefersDarkScheme);

prefersDarkScheme.addEventListener('change', switchFavicon);
