import React from 'react';
import { Button } from '../ui/button';

const Hero = () => {
    return (
        <div className='pt-10'>
            <section
                    className="relative w-full -mt-20 md:-mt-24 pt-20 md:pt-24 bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-slate-900/20"></div>
                    <div className="relative container mx-auto px-4 py-32 md:py-48 flex flex-col items-center justify-center h-full text-center">
                      <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-down">
                        Discover Your Next Adventure
                      </h1>
                      <p className="text-lg md:text-xl text-slate-200 max-w-3xl mb-10 animate-fade-in-up">
                        Explore breathtaking destinations with our expertly crafted tours,
                        designed to create memories that last a lifetime.
                      </p>
                      <Button
                        asChild
                        className="bg-gradient-to-r from-amber-500 to-pink-500 hover:shadow-lg hover:shadow-amber-500/40 py-3 px-8 h-auto rounded-full text-lg text-white font-bold transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
                      >
                        <a href="/tours">Explore Tours</a>
                      </Button>
                    </div>
                  </section>
        </div>
    );
};

export default Hero;