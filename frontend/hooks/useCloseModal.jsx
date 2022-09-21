import { useRouter } from "next/router";
import { useCallback, useEffect, useRef } from "react";

export default function useCloseModal(deleteModal, setModal) {
  const closeModal = useRef(null);
  const router = useRouter();

  const handleClick = useCallback(
    (e) => {
      if (closeModal?.current?.contains(e.target)) {
        return;
      }

      setModal
        ? setModal(false)
        : !deleteModal && router.push(router.asPath.split("?")[0]);
    },
    [router, deleteModal, setModal]
  );

  const escFunction = useCallback(
    (event) => {
      if (event.keyCode === 27) {
        setModal ? setModal(false) : router.push(router.asPath.split("?")[0]);
      }
    },
    [router, setModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", escFunction);
    return () => document.removeEventListener("keydown", escFunction);
  }, [escFunction]);

  useEffect(() => {
    document.addEventListener("click", handleClick, { capture: true });
    return () =>
      document.removeEventListener("click", handleClick, { capture: true });
  }, [handleClick]);

  return { closeModal };
}
