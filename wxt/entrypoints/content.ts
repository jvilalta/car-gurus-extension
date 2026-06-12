export default defineContentScript({
  matches: ['*://*.cargurus.com/*'],
  main() {
    function checkPageElements() {
      console.log('Checking page:', window.location.href);
      let dl = document.querySelectorAll('[data-testid="srp-listing-tile"]');
      if (dl && dl.length > 0) {
        console.log('Found dl elements:', dl.length);
      }
    }

    const observer = new MutationObserver((mutations, obs) => {
      checkPageElements();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  },
});
