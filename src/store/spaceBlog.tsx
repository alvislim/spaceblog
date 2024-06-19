import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ArticleResult } from "../type/article";

interface SpaceStore {
  articleArr?: ArticleResult[];
  setArticleArr: (arr: ArticleResult[]) => void;
  limit: number;
  setLimit: (val: number) => void;
}

export const useSpaceStore = create<SpaceStore>()(
  persist(
    (set) => ({
      articleArr: undefined,
      setArticleArr: (arr: ArticleResult[]) => set({ articleArr: arr }),
      limit: 10,
      setLimit: (val: number) => set({ limit: val }),
    }),
    {
      name: "space-store",
    }
  )
);
