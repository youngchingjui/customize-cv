'use client'
import { usePathname } from 'next/navigation';

const PageTitle = () => {
    const pathname = usePathname();
    const routeTitleMap: { [key: string]: string } = {
        '/': 'Customize CV',
        '/update-cv': 'Update Master CV',
        '/cover-letters': 'Cover Letters',
    };

    if (!pathname) {
        return null;
    }

    const title = routeTitleMap[pathname] || 'CV Manager';

    return <h1 className="text-2xl font-bold ml-4">{title}</h1>;
}

export default PageTitle;