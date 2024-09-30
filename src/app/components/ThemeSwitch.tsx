'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi';

const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if(!mounted) return (
        <Image 
            src="data:image/svg+xml;base64,
            PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlna
            HQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZW
            lnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
            width={32}
            height={32}
            sizes='32x32'
            alt='Loading Toggle'
            priority={false}
            title='Loading Toggle'
        />
    )

    if(resolvedTheme === 'dark'){
        return <FiSun onClick={() => setTheme('light')} size={32} className='cursor-pointer' />
    }

    if(resolvedTheme === 'light'){
        return <FiMoon onClick={() => setTheme('dark')} size={32} className='cursor-pointer' />
    }
}

export default ThemeSwitch