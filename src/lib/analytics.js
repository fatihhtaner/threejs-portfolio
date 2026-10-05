// Firebase Analytics, loaded lazily so the SDK never blocks the first paint.
// It only runs in production builds and when the config is present in .env.

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const isEnabled =
  import.meta.env.PROD &&
  Boolean(firebaseConfig.apiKey && firebaseConfig.measurementId);

let analyticsPromise = null;

const getAnalyticsInstance = () => {
  if (!isEnabled) return Promise.resolve(null);

  analyticsPromise ??= (async () => {
    const [{ initializeApp }, { getAnalytics, isSupported }] =
      await Promise.all([import("firebase/app"), import("firebase/analytics")]);

    // e.g. blocked by an ad blocker or unsupported browser
    if (!(await isSupported())) return null;

    return getAnalytics(initializeApp(firebaseConfig));
  })().catch(() => null);

  return analyticsPromise;
};

/** Starts Analytics (automatic page_view tracking). Safe to call anytime. */
export const initAnalytics = () => {
  getAnalyticsInstance();
};

/** Logs a custom event; silently does nothing when Analytics is off. */
export const trackEvent = async (name, params) => {
  const analytics = await getAnalyticsInstance();
  if (!analytics) return;

  const { logEvent } = await import("firebase/analytics");
  logEvent(analytics, name, params);
};
