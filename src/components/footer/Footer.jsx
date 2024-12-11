import logo from '../../assets/logoNeefter.png'
import { SocialNetWork } from '../socialNetwork/SocialNetWork'
import { FooterNewEvents } from './FooterNewEvents'

export const Footer = () => {

  return (
    <footer className='bg-bgFooter w-full pt-16'>
      <ul className='grid mb-14 auto-cols-fr grid-cols-footer2columns gap-y-12 gap-x-5 w-[90%] m-auto sm:gap-y-0 sm:gap-x-16 lg:gap-x-0 lg:grid-cols-footerBidzen'>
        <li className='col-span-2 sm:col-span-1 '>
          <img className='w-44' src={logo} alt='logo Neefter' />
          <p className='text-whitexs text-[14px] my-4'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptate
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quaes
          </p>
          <SocialNetWork />
        </li>
        <li className='text-white lg:m-auto'>
          <ul>
            <li className='font-bold mb-6 text-[18px]'>Marketplace</li>
            <li className='mb-1.5 text-whitexs text-[14px]'>Gaming</li>
            <li className='mb-1.5 text-whitexs text-[14px]'>Product</li>
            <li className='mb-1.5 text-whitexs text-[14px]'>All NFTs</li>
            <li className='mb-1.5 text-whitexs text-[14px]'>Social Network</li>
            <li className='mb-1.5 text-whitexs text-[14px]'>Domain Names</li>
            <li className='mb-1.5 text-whitexs text-[14px]'>Collectibles</li>
          </ul>
        </li>
        <li className='text-white lg:m-auto'>
          <ul>
            <li className='font-bold mb-6 text-[18px]'>Supports</li>
            <li className='mb-1.5 text-whitexs text-[14px]'>
              Setting & Privacy
            </li>
            <li className='mb-1.5 text-whitexs text-[14px]'>Help & Support</li>
            <li className='mb-1.5 text-whitexs text-[14px]'>Live Actions</li>
            <li className='mb-1.5 text-whitexs text-[14px]'>Item Details</li>
            <li className='mb-1.5 text-whitexs text-[14px]'>24/7 Supports</li>
            <li className='mb-1.5 text-whitexs text-[14px]'>Blog</li>
          </ul>
        </li>
        <li className='col-span-2 sm:col-span-1 lg:mx-auto text-white'>
          <FooterNewEvents />
        </li>
      </ul>
      <div className='text-center mx-2 text-grayOpacity text-xs border-t py-6 border-footerBorder sm:mx-0'>
        Copyright © 2022 Neefter | NFT Marketplace HTML Template. Designed by
        Themesflat
      </div>
    </footer>
  )
}
