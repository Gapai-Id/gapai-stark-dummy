export type ContentType = 'video' | 'article' | 'quiz';
export type ContentStatus = 'not-started' | 'in-progress' | 'completed';

export interface ContentItem {
  id: string;
  title: string;
  type: ContentType;
  status: ContentStatus;
  duration?: string;
}

export interface ContentModule {
  id: string;
  title: string;
  items: ContentItem[];
}

export type LearningEntry =
  | { kind: 'module'; data: ContentModule }
  | { kind: 'item'; data: ContentItem };
