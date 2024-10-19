export interface Post {
  id: number;
  title: string;
  subtitle: string;
  category: TabType;
  date: Date;
  views: number;
  likes: number;
  minsToRead: number;
  creatorProfile: string;
  creatorImage: string;
  image: string;
}

export type SortOption =
  | "Most Recent"
  | "Oldest"
  | "Most Viewed"
  | "Most Liked";

export type TabType =
  | "All"
  | "Destination"
  | "Culinary"
  | "Lifestyle"
  | "Tips & Hacks"
  | "Adventure"
  | "Design"
  | "Wellness"
  | "Science"
  | "Photography"
  | "Technology"
  | "Environment"
  | "Finance"
  | "History";
