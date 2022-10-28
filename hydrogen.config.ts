import { defineConfig, CookieSessionStorage } from '@shopify/hydrogen/config'


console.log(
  import.meta.env.VITE_PRIVATE_STOREFRONT_API_TOKEN,
  import.meta.env.VITE_STOREFRONT_API_TOKEN,
  import.meta.env.VITE_PUBLIC_STORE_DOMAIN,
  import.meta.env.VITE_STOREFRONT_ID,


)
export default defineConfig({
  shopify: {
    defaultCountryCode: 'US',
    defaultLanguageCode: 'EN',
    storeDomain:
      // @ts-ignore
      import.meta.env.VITE_PUBLIC_STORE_DOMAIN,
    storefrontToken:
      // @ts-ignore
      import.meta.env.VITE_STOREFRONT_API_TOKEN,
    privateStorefrontToken:
      // @ts-ignore
      import.meta.env.VITE_PRIVATE_STOREFRONT_API_TOKEN,
    storefrontApiVersion: '2022-07',
    // @ts-ignore
    storefrontId: import.meta.env.VITE_STOREFRONT_ID,
  },
  session: CookieSessionStorage('__session', {
    path: '/',
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'Strict',
    maxAge: 60 * 60 * 24 * 30,
  }),
})
