import React from 'react'

function Footer() {
    return (
        <>
            <footer className='bg-black text-white'>
                <div className='container  py-5'>
                    <div className='row '>
                        <div className='col-lg-3'>
                            <h1 className='pb-3'>Kiante</h1>
                            <p className='space-y-3'>The stars will never align, and the traffic lights of life will never all be green at the same time.The stars will never align.</p>
                           
                            <p className='pt-3'><span className='fw-bold'>Email :</span> info@example.com <br/>
                            <span className='fw-bold'>Phone :</span> 00249 123 333 7199 </p>
                         
                        </div>
                        <div className='col-lg-3'>
                            <h3 className='pb-3'>Quick Links</h3>
                            <ul className='list-unstyled space-y-5'>
                                <li>Marketing</li>
                                <li>Motivation</li>
                                <li>Politics</li>
                                <li>Travel</li>
                                <li>Technology</li>
                            </ul>
                        </div>
                        <div className='col-lg-3'>
                            <h3 className='pb-3'>Entertainment</h3>
                            <ul className='list-unstyled space-y-5'>
                                <li>Hollywood</li>
                                <li>Music</li>
                                <li>Videos</li>
                                <li>TV News</li>
                                <li>Celebrity News</li>
                            </ul>
                        </div>
                        <div className='col-lg-3 '>
                            <h3 className='pb-3'>Overview</h3>
                            <ul className='list-unstyled space-y-5'>
                                <li>Business</li>
                                <li>About</li>
                                <li>Contact</li>
                                <li>Blog</li>
                                <li>Marketing</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                    <hr className='bg-muted'/>
                    <p className='text-center pb-3'>Copyright © Kiante 2024. All rights reserved</p>
            </footer>
        </>
    )
}

export default Footer
