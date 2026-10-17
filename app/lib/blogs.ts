export type Blog = {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

export async function getBlogs(): Promise<Blog[]> {
  const response = await fetch("https://api.vercel.app/blog", {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch blogs: HTTP ${response.status}`);
  }

  const data: unknown = await response.json();

  if (!Array.isArray(data)) {
    throw new Error("The blog API returned an invalid response.");
  }

  return data.map((item): Blog => {
    if (
      !isRecord(item) ||
      (typeof item.id !== "string" && typeof item.id !== "number") ||
      typeof item.title !== "string"
    ) {
      throw new Error("The blog API returned an invalid blog.");
    }

    return {
      id: String(item.id),
      title: item.title,
      content: typeof item.content === "string" ? item.content : "",
      author: typeof item.author === "string" ? item.author : "",
      date: typeof item.date === "string" ? item.date : "",
      category: typeof item.category === "string" ? item.category : "",
    };
  });
}
