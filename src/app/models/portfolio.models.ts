export interface SkillGroup {
  readonly name: string;
  readonly index: string;
  readonly skills: readonly Skill[];
}

export interface Skill {
  readonly name: string;
  readonly featured?: boolean;
  readonly learning?: boolean;
}

export interface ExperienceDetailGroup {
  readonly title: string;
  readonly items: readonly string[];
}

export interface Experience {
  readonly role: string;
  readonly company: string;
  readonly location?: string;
  readonly period: string;
  readonly summary: string;
  readonly details: readonly ExperienceDetailGroup[];
  readonly technologies?: readonly string[];
}

export interface Education {
  readonly institution: string;
  readonly qualification: string;
  readonly period?: string;
  readonly description?: string;
  readonly topics?: readonly string[];
}
