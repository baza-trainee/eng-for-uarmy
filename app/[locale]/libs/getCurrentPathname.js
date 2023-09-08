const getCurrentPathname = (pathname) => {
    return pathname.substring(pathname.lastIndexOf('/') + 1);
}
export default getCurrentPathname;