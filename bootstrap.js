const {classes: Cc, interfaces: Ci, utils: Cu} = Components;
Cu.import("resource://gre/modules/Services.jsm");

function startup(data, reason) {
  Cu.import("chrome://spdyindicator/content/indicator.jsm");
  SPDYManager.startup();
}

function shutdown(data, reason) {
  if (reason == APP_STARTUP) return;

  Cu.import("chrome://spdyindicator/content/indicator.jsm");
  SPDYManager.shutdown();
  Cu.import("chrome://spdyindicator/content/indicator.jsm");
}
