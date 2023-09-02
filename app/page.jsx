import React from 'react'
import Feed from '@components/Feed';

const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className='head_text text-center'>Discover & Share
                <br className='max-md:hidden' />
                <br />
                <span className='orange_gradient'>AI-Powerd Prompts</span>
            </h1>
            <p className='desc text-center'>This tool can be used to speed up your ChatGBT use and speed up development!</p>

            <Feed />
        </section>
    )
}

export default Home;