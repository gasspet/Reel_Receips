// Diese Datei kümmert sich um zwei PWA-Aufgaben:
// 1. Service Worker registrieren
// 2. den Installationsbutton im Footer steuern

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch((error) => {
      console.error("Service Worker konnte nicht registriert werden:", error);
    });
  });
}

let deferredInstallPrompt = null;

function updateInstallButtonVisibility() {
  const installButton = document.getElementById("install-app-button");

  if (!installButton) {
    return;
  }

  const isStandalone =
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true;

  installButton.hidden = !deferredInstallPrompt || isStandalone;
}

// Der Browser liefert hier das spätere Installationsfenster.
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  updateInstallButtonVisibility();
});

window.addEventListener("appinstalled", () => {
  deferredInstallPrompt = null;
  updateInstallButtonVisibility();
});

document.addEventListener("DOMContentLoaded", () => {
  const installButton = document.getElementById("install-app-button");

  if (!installButton) {
    return;
  }

  installButton.addEventListener("click", async () => {
    if (!deferredInstallPrompt) {
      return;
    }

    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    updateInstallButtonVisibility();
  });

  updateInstallButtonVisibility();
});
