
export type BookType = {
  id: string;
  img: string;
  title: string;
  author: string;
}

export type BookDetailsType = BookType & {
  description: string;
  publisher: string;
  publishedDate: string;
  pages: number;
}