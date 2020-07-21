import { useRef, useEffect } from 'react';

export const useSimpleForm = () => {
    const refForm = useRef(null);

    useEffect(() => {
        if (refForm.current !== null) {
            // refForm.current;
        }
    });

    return [refForm];
};
