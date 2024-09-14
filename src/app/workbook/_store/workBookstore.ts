import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface WorkBookItem {
  img: string;
  text: string;
}

interface WorkBookStore {
  workBookList: WorkBookItem[];
  addWorkBookItem: (img: string) => void;
  updateWorkBookText: (index: number, text: string) => void;
}

const useWorkBookStoreBase = create<WorkBookStore>()((set) => ({
  workBookList: [],
  addWorkBookItem: (img) =>
    set((state) => ({
      workBookList: [...state.workBookList, { img, text: "" }],
    })),
  updateWorkBookText: (index, text) =>
    set((state) => ({
      workBookList: state.workBookList.map((item, i) =>
        i === index ? { ...item, text } : item
      ),
    })),
}));

export const useWorkBookStore =
  typeof window !== "undefined"
    ? create(devtools(useWorkBookStoreBase, { name: "WorkBookStore" }))
    : useWorkBookStoreBase;
