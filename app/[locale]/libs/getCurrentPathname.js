const getCurrentPathname = (pathname) => {
    const currentPath = pathname.substring(pathname.lastIndexOf('/') + 1);
    if (currentPath === 'en' || currentPath === 'uk') {
        return '/'
    } else {
        return currentPath + window.location.search
    }
} 
export default getCurrentPathname;