// Fix: Force scroll to top on page navigation
if (typeof window !== 'undefined') {
  // Disable the browser's automatic scroll restoration
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  // Scroll to top on route changes (pushState / popstate)
  const _pushState = history.pushState;
  history.pushState = function () {
    _pushState.apply(this, arguments);
    window.scrollTo(0, 0);
  };

  window.addEventListener('popstate', function () {
    window.scrollTo(0, 0);
  });
}
