/**
 * Runs before first paint and puts the stored (or OS-preferred) theme on `<html>`.
 *
 * It lives in its own module because two documents must apply the theme without
 * sharing a layout: the app shell (`SiteShell`) and `app/global-not-found.tsx`,
 * which bypasses layouts by design.
 */
export const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var theme = stored;
    if (!theme) {
      theme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {
    document.documentElement.setAttribute("data-theme", "light");
  }
})();`;
