"use client"
import Image from 'next/image';
import Preview from './components/preview';
import dynamic from 'next/dynamic';
import Aggregator from './components/Aggregator';


export default function Home() {
  
  return (

    <div>
      <h1 className='title'>Alice</h1>
      <h2 className='sub-title'>I scrape the web to get you access to all things crypto in one place</h2>
      <Aggregator />
    </div>
  )
}
