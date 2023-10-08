const getCurrentPathname = (pathname) => {
    const currentPath = pathname.substring(pathname.lastIndexOf('/') + 1);
    if (currentPath === 'en' || currentPath === 'uk') {
        return '/'
    } else {
        return currentPath + (typeof window !== 'undefined' ? window.location.search : '')
    }
} 
export default getCurrentPathname;