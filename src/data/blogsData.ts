export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featured_image: string | null;
  status: string;
  tags: string[];
  read_time: number;
  views: number;
  is_featured: boolean;
  published_at: string;
  created_at: string;
  author_name: string;
}

export interface BlogApiResponse {
  results: BlogPost[];
  count: number;
  page: number;
  page_size: number;
  total_pages: number;
}

export const BLOGS_API_ENDPOINT =
  "https://ycn3kxfuwivhlodsyjsfsywf3y0qmcyx.lambda-url.us-east-1.on.aws/api/blogs/";

export async function fetchBlogs(page = 1, pageSize = 9): Promise<BlogApiResponse> {
  const url = `${BLOGS_API_ENDPOINT}?page=${page}&page_size=${pageSize}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch blogs: ${res.statusText}`);
  }
  return res.json();
}
