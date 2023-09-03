import React from 'react'
import Link from 'next/link';
import Feed from '@components/Feed';

const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className='head_text text-center'>Develop & Learn
                <br className='max-md:hidden' />
                <br />
                <span className='orange_gradient'>AI Prompts</span>
            </h1>
            <p className='desc text-center'>Use this tool to streamline you AI skills and development by saving and sharing reusable AI prompts!</p>
            <Link
                className="outline_btn mt-3"
                href="https://chat.openai.com/"
                target="_blank"
            >
                Chat GBT
            </Link>
            <Feed />
        </section>
    )
}

export default Home;