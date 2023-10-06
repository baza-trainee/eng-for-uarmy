const getActionPathname = (pathname) => {
    const currentPath = pathname.substring(pathname.lastIndexOf('=') + 1);
    if (currentPath === '') {
        return '/'
    } else {
        return currentPath
    }
}
export default getActionPathname;