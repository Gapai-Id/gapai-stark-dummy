export interface CommunityPost {
  id: string;
  authorName: string;
  authorRole: 'candidate' | 'growth';
  authorColor: string;
  content: string;
  isPinned: boolean;
  isEdited: boolean;
  createdAt: string;
  reactions: { emoji: string; count: number }[];
  commentCount: number;
  isOwnPost: boolean;
}

export interface CommunityComment {
  id: string;
  authorName: string;
  authorColor: string;
  content: string;
  createdAt: string;
  isOwnComment: boolean;
}
