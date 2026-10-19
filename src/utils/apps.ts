// Hulpfuncties voor de apps-collectie (src/content/apps/)
import { getCollection, type CollectionEntry } from 'astro:content';
import { shouldShowContent } from '@/utils/markdown';

export type App = CollectionEntry<'apps'>;

/** Zichtbare apps: in productie zonder drafts, gesorteerd op order en daarna op titel. */
export async function getVisibleApps(): Promise<App[]> {
  const isDev = import.meta.env.DEV;
  const apps = await getCollection('apps');
  return apps
    .filter((app) => shouldShowContent(app as any, isDev))
    .sort((a, b) => {
      const oa = a.data.order ?? 999;
      const ob = b.data.order ?? 999;
      if (oa !== ob) return oa - ob;
      return a.data.title.localeCompare(b.data.title, 'nl');
    });
}

/**
 * URL van het app-icoon. Een relatief pad (icon.png, attachments/icon.png, [[icon.png]])
 * verwijst naar de map van de app; scripts/sync-images.js zet die over naar
 * public/apps/<app>/ en maakt van png/jpg een .webp.
 */
export function getAppIconUrl(app: App): string | null {
  let icon = app.data.icon as string | null;
  if (!icon) return null;
  icon = icon.replace(/^\[\[|\]\]$/g, '').split('|')[0].trim();
  if (/^https?:\/\//.test(icon) || icon.startsWith('/')) return icon;
  const file = icon.replace(/^(\.\/)?(attachments\/)?/, '');
  const webp = file.replace(/\.(jpg|jpeg|png|gif|bmp|tiff|tif)$/i, '.webp');
  // Folder-based app (apps/<app>/index.md): bestand staat naast index.md
  if (app.filePath?.match(/\/index\.mdx?$/)) return `/apps/${app.id}/${webp}`;
  return `/apps/attachments/${webp}`;
}

/** Initialen als het app-icoon ontbreekt. */
export function getAppInitials(title: string): string {
  return title
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join('');
}
