export interface ProjectLink {
  readonly label: string;
  readonly url: string;
}

export interface ProjectImage {
  readonly src: string;
  readonly alt: string;
}

export interface Project {
  readonly slug: string;
  readonly title: string;
  readonly subtitle: string;
  readonly status: string;
  readonly shortDescription: string;
  readonly longDescription: string;
  readonly role: string;
  readonly technologies: readonly string[];
  readonly cardTechnologies: readonly string[];
  readonly highlights: readonly string[];
  readonly links: readonly ProjectLink[];
  readonly demo?: ProjectLink;
  readonly repositories: readonly ProjectLink[];
  readonly images: readonly ProjectImage[];
  readonly featured: boolean;
  readonly origin?: string;
  readonly relatedProject?: string;
}
