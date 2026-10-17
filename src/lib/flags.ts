// True only on the live production deployment (main -> sanyamittal.com).
// Localhost and Vercel preview deployments (dev branch) are not "live".
export const isLive = process.env.VERCEL_ENV === "production";

// Pages that are visible while working but hidden on the live site.
// To launch a page, delete its path from this list.
export const hiddenOnLive = ["/work", "/about", "/shop"];

export function isHidden(path: string) {
  return isLive && hiddenOnLive.includes(path);
}
