import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `Chef World | ${title}`;
  }, [title]);
};
