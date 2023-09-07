import localFont from 'next/font/local'

const arial = localFont({
  src: [
    {
      path: './ArialMT.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Arial-BoldMT.woff2',
      weight: '700',
      style: 'bold',
    }
  ]
})
const furore = localFont({
  src: [
    {
      path: './Furore.woff2',
      weight: '400',
      style: 'normal',
    }
  ]
})
export default {arial, furore}