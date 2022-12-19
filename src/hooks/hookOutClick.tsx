import { useRef, useEffect } from "react";

const useOutClick = (callback: any) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function modalOutClick(event:MouseEvent) {
      const target = event.target as HTMLDivElement;
      const element = ref.current;

      if(!element){
        return
      }

      if (!element.contains(target)) {
        callback();
      }
    }
    window.addEventListener("mousedown", modalOutClick);

    return () => {
      window.removeEventListener("mousedown", modalOutClick);
    };
  }, []);

  return ref;
};

export default useOutClick;
