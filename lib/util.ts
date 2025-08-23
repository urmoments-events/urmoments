export const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/$/, "");

export function toPublicSrc(src: string | undefined): string {
  if (!src) return basePath + "/";
  const withLeading = src.startsWith("/") ? src : `/${src}`;
  return `${basePath}${withLeading}`;
}


