import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col justify-between items-center w-full h-20">
      {/* <p className="text-sm text-gray-400 font-light tracking-wide">
        Address: 59 East Yan'an Road, Waitan, Huangpu District, Shanghai 邮政编码：200000
      </p> */}
      <div className="flex gap-4"> 
      <a 
        href="https://www.linkedin.com/company/virtualai-china-and-international/"
        target="_blank"
        rel="noopener noreferrer"
        className="my-2"
        aria-label="Visit VirtualAI China on LinkedIn"
      >
        <img
          src="/linkedin.png"
          alt="LinkedIn"
          width={27}
          height={27}
          className="opacity-70 rounded-full hover:opacity-100 transition-opacity"
        />
      </a>
      <a 
        href="https://kt1v0b-wr.myshopify.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="my-2"
        aria-label="Visit VirtualAI China on Shopify"
      >
        <img
          src="/shopify.png"
          alt="shopify"
          width={25}
          height={25}
          className="opacity-70 rounded-full hover:opacity-100 transition-opacity"
        />
      </a>
      <a 
        href="https://www.linkedin.com/company/virtualai-china-and-international/"
        target="_blank"
        rel="noopener noreferrer"
        className="my-2"
        aria-label="Visit VirtualAI China on Instagram"
      >
        <img
          src="/instagram.jpg"
          alt="Instagram"
          width={25}
          height={25}
          className="opacity-70 rounded-full hover:opacity-100 transition-opacity"
        />
      </a>
      <a 
        href="https://discord.gg/ZyEpuspP34"
        target="_blank"
        rel="noopener noreferrer"
        className="my-2"
        aria-label="Visit VirtualAI China on Discord"
      >
        <img
          src="/discord.jpg"
          alt="Discord"
          width={25}
          height={25}
          className="opacity-70 rounded-full hover:opacity-100 transition-opacity"
        />
      </a>
      </div>
      <p className="text-sm text-gray-400 font-light tracking-wide">
        VirtualAI China & International © 2025
      </p>
    </div>
  )
}

export default Footer
