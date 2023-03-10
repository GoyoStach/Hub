'use-client'

import { Button, Carousel, Sidebar, Timeline } from 'flowbite-react'
import { CaretLeftIcon, CaretRightIcon } from '@radix-ui/react-icons'
import { useEffect, useState } from 'react'

import { AspectRatio } from '@/components/ui/aspect-ratio'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import MainLayout from '@/Layout/MainLayout'
import { NavigationMenu } from '@/components/NavigationMenu'
import { NextPage } from 'next'
import { Separator } from '@/components/ui/separator'
import clsx from 'clsx'

const inter = Inter({ subsets: ['latin'] })

const Home: NextPage = () => {
  const [themeColor, setThemeColor] = useState('dark')
  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC

    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setThemeColor('dark')
    } else {
      setThemeColor('')
    }
  }, [themeColor])

  return (
    <div className={clsx(themeColor)}>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <main
        className={clsx(
          'flex min-h-screen flex-col items-center justify-center bg-rosePineDawn-base dark:bg-rosePineMoon-base',
          'lg:grid lg:grid-cols-3 lg:items-start lg:justify-start',
        )}
      >
        <section
          className={clsx(
            'prose prose-zinc flex flex-col items-center justify-center dark:prose-invert',
            'lg:col-span-1 lg:h-full lg:w-full lg:items-start lg:justify-start lg:prose-xl',
          )}
        >
          <h1 className="px-10 pt-10 text-rosePineDawn-textos dark:text-rosePineMoon-textos">
            Goyo Hub
          </h1>
          <div className={clsx('hidden', 'px-5 lg:flex lg:w-full')}>
            <Separator />
          </div>
          <div className="h-full w-full bg-red-500"></div>
        </section>

        <section
          className={clsx(
            'flex lg:col-span-2',
            'h-[500px] w-full flex-col  items-center justify-center lg:h-full',
          )}
        >
          <div className="relative h-[90%] w-[95%]  xl:h-2/3 xl:w-2/3">
            <Carousel
              slideInterval={5000}
              leftControl={
                <div className="rounded-full bg-rosePineDawn-surface dark:bg-rosePineMoon-surface hover:dark:bg-rosePineMoon-overlay">
                  <CaretLeftIcon className="h-10 w-10 text-rosePineDawn-text dark:text-rosePineMoon-text" />
                </div>
              }
              rightControl={
                <div className="rounded-full bg-rosePineDawn-surface dark:bg-rosePineMoon-surface hover:dark:bg-rosePineMoon-overlay">
                  <CaretRightIcon className="h-10 w-10 text-rosePineDawn-text dark:text-rosePineMoon-text" />
                </div>
              }
            >
              <img
                src="/obsidianToAstro.png"
                alt="..."
                className="object-cover px-16 transition-all hover:scale-105"
              />
              <img
                src="/obsidianToAstro.png"
                alt="..."
                className="object-cover px-16 transition-all hover:scale-105"
              />
              <img
                src="/obsidianToAstro.png"
                alt="..."
                className="object-cover px-16 transition-all hover:scale-105"
              />
            </Carousel>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
