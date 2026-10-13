import type { Project, ProjectImage } from '../data/portfolio';

// Image source paths are repository-relative; remote references are never image sources.
export function assetUrl(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
}
export function adaptiveSources(image: ProjectImage): string | undefined {
  return image.srcSet?.split(',').map(item => {
    const [path, ...descriptor] = item.trim().split(/\s+/);
    return `${assetUrl(path)} ${descriptor.join(' ')}`.trim();
  }).join(', ');
}
export function projectCover(project: Project): ProjectImage | undefined { return project.image; }

