import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['uk', 'en'],
  defaultLocale: 'uk'
});

// this tells the middleware to run only on requests to our app pages
export const config = {
  matcher: ['/((?!api|_next|.*\..*).*)']
};