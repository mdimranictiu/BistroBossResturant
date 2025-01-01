import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { motion } from "motion/react"




const Footer = () => {
    return (
        <div className='py-10 '>
            <div className='grid grid-cols-2  text-white'>
                <div className='flex py-24 bg-[#1F2937] flex-col gap-2 items-center'>
                    <h2 className='text-3xl font-bold'>Contact us</h2>
                    <p>Khankhanapur,Rajbari</p>
                    <p>Sun-Mon:10AM - 10PM</p>
                    <p>Mobile:0123213222</p>
                </div>
                <div className='flex py-24 bg-[#111827] gap-2 flex-col items-center'>
                    <h2 className='text-3xl py-2 font-bold'>Follow Us</h2>
                    <h5>Join us our social media</h5>
                    <div className='text-2xl flex gap-5'>
                    <motion.div in animate={{ scale:1}} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}>
                            <FaFacebookF />
                        </motion.div>                 
                    <motion.div in animate={{scale:1}} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}>
                    <FaInstagramSquare/>
                        </motion.div>                  
                    <motion.div in animate={{scale:1}} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}>
                    <FaTwitter/>
                        </motion.div>                  
                 
                    </div>
                </div>
            </div>
            <h3 className='text-center py-2 text-white bg-black'>Copyright@BistroBoss.com . All Rights Reserved.</h3>

        </div>
    );
};

export default Footer;