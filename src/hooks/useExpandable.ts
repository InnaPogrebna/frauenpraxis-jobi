'use client';

import { useState } from 'react';

export const useExpandable = (initial = false) => {
    const [expanded, setExpanded] = useState(initial);

    const toggle = () => setExpanded(prev => !prev);

    return {
        expanded,
        toggle,
        clampClass: expanded ? '' : 'line-clamp-6',
        buttonLabel: expanded ? 'Weniger anzeigen' : 'Mehr anzeigen',
    };
};
