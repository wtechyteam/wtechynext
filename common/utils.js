// utils.js
'use client'
import {useMounted} from "./../common/unmounted"

export const scrollTop = () => {
    window.scrollTo(0, 0);
    const mounted = useMounted();
    if(!mounted) return null;

};
