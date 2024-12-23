import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col justify-between items-center w-full h-20">
      <p className="text-sm text-gray-400 font-light tracking-wide">
        Address: 59 East Yan'an Road, Waitan, Huangpu District, Shanghai 邮政编码：200000
      </p>
      <div className="flex flex-row justify-between items-center w-20"> 
      <a 
        href="https://www.linkedin.com/company/virtualai-china/"
        target="_blank"
        rel="noopener noreferrer"
        className="my-2"
        aria-label="Visit VirtualAI China on LinkedIn"
      >
        <img
          src="/linkedin.png"
          alt="LinkedIn"
          width={25}
          height={25}
          className="opacity-70 rounded hover:opacity-100 transition-opacity"
        />
      </a>
      <a 
        href="https://www.linkedin.com/company/virtualai-china/"
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
          className="opacity-70 rounded hover:opacity-100 transition-opacity"
        />
      </a>
      <a 
        href="https://www.linkedin.com/company/virtualai-china/"
        target="_blank"
        rel="noopener noreferrer"
        className="my-2"
        aria-label="Visit VirtualAI China on Twitter"
      >
        <img
          src="/twitter.png"
          alt="Twitter"
          width={25}
          height={25}
          className="opacity-70 rounded hover:opacity-100 transition-opacity"
        />
      </a>
      </div>
      <p className="text-sm text-gray-400 font-light tracking-wide">
        VirtualAI China © 2024
      </p>
    </div>
  )
}

export default Footer
