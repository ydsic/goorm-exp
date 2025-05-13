import { useEffect, useMemo } from "react";
import debounce from "lodash.debounce";

export default function useDebounced(callback, delay = 300, deps = []) {
  const debounced = useMemo(
    () => debounce(callback, delay),
    deps.length ? deps : [callback, delay]
  );

  useEffect(() => {
    return () => {
      debounced.cancel();
    };
  }, [debounced]);

  return debounced;
}
