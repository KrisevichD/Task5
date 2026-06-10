import { useEffect, useState } from "react";
import useIsFirstRender from "./useIsFirstRender.js";

const useAnimationClass = (className, deps) => {
    const isFirstRender = useIsFirstRender();
    const [animationClass, setAnimationClass] = useState("");

    useEffect(() => {
        if (isFirstRender) return;

        setAnimationClass("");
        queueMicrotask(() => setAnimationClass(className));
    }, [deps]);

    const setDefault = () => setAnimationClass("");

    return {
        animationClass,
        setDefault
    }
}

export default useAnimationClass;