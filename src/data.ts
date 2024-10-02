import { QuoteData } from "./model/QuoteData";



export const quotes: QuoteData[] = [
  {
    title:
      "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world",
    authorName: "Albert Einstein",
  },
  {
    title:
      "Folks are usually about as happy as they make their minds up to be.",
    authorName: "Abraham Lincoln",
  },
  {
    title:
      "I learned that courage was not the absence of fear, but the triumph over it.",
    authorName: "Nelson Mandela",
  },
  {
    title:
      "The future belongs to those who believe in the beauty of their dreams.",
    authorName: "Eleanor Roosevelt",
  },
  {
    title: "You may encounter many defeats, but you must not be defeated.",
    authorName: "Maya Angelou",
  },
];
export const getRandomNum = ()=> Math.floor(Math.random() * quotes.length);
