import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { motion } from 'framer-motion'
import classNames from 'classnames'
import { useSession, signIn, signOut } from 'next-auth/react'
import Link from './Link'
import {
  CodeIcon,
  HomeIcon,
  Pencil1Icon,
  DiscIcon,
  HamburgerMenuIcon,
  Cross1Icon,
  FrameIcon,
  LaptopIcon,
  BarChartIcon,
  DrawingPinIcon,
  Link2Icon,
  QuoteIcon,
  CalendarIcon,
  PersonIcon,
  ArchiveIcon,
  TwitterLogoIcon,
  RocketIcon,
  ChatBubbleIcon,
  EnterIcon,
} from '@radix-ui/react-icons'

export default function DropMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const { data: session } = useSession()
  const toggleIcon = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Menu as="div" className="relative z-10 inline-block text-left ">
      <div>
        <motion.button
          className="ml-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-zinc-300 p-2 ring-zinc-400 transition-all hover:bg-violet-400 hover:ring-1 dark:bg-zinc-700 dark:ring-violet-700 dark:hover:bg-violet-600"
          whileTap={{
            scale: 0.5,
          }}
          transition={{ duration: 0.1, ease: 'easeIn' }}
          aria-label="Toggle List Menu"
          type="button"
        >
          {isOpen ? (
            <HamburgerMenuIcon className="h-4 w-4" />
          ) : (
            <HamburgerMenuIcon className="h-4 w-4" />
          )}
        </motion.button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        afterEnter={() => {
          toggleIcon()
        }}
        afterLeave={() => {
          toggleIcon()
        }}
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-zinc-300 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:divide-zinc-700 dark:bg-zinc-800 ">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link href="/">
                  <a
                    className={classNames(
                      active
                        ? 'bg-gray-200 text-gray-700 dark:bg-zinc-700 dark:text-gray-300'
                        : 'bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    <div className="flex flex-row">
                      <HomeIcon className="mr-4 mt-0.5" /> Home
                    </div>
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/blog">
                  <a
                    className={classNames(
                      active
                        ? 'bg-gray-200 text-gray-700 dark:bg-zinc-700 dark:text-gray-300'
                        : 'bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    <div className="flex flex-row">
                      <Pencil1Icon className="mr-4 mt-0.5" /> Blog
                    </div>
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/projects">
                  <a
                    className={classNames(
                      active
                        ? 'bg-gray-200 text-gray-700 dark:bg-zinc-700 dark:text-gray-300'
                        : 'bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    <div className="flex flex-row">
                      <ArchiveIcon className="mr-4 mt-0.5" /> Projects
                    </div>
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/about">
                  <a
                    className={classNames(
                      active
                        ? 'bg-gray-200 text-gray-700 dark:bg-zinc-700 dark:text-gray-300'
                        : 'bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    <div className="flex flex-row">
                      <PersonIcon className="mr-4 mt-0.5" /> About
                    </div>
                  </a>
                </Link>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link href="/contact">
                  <a
                    className={classNames(
                      active
                        ? 'bg-gray-200 text-gray-700 dark:bg-zinc-700 dark:text-gray-300'
                        : 'bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    <div className="flex flex-row">
                      <Link2Icon className="mr-4 mt-0.5" /> Contact
                    </div>
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/tags">
                  <a
                    className={classNames(
                      active
                        ? 'bg-gray-200 text-gray-700 dark:bg-zinc-700 dark:text-gray-300'
                        : 'bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    <div className="flex flex-row">
                      <FrameIcon className="mr-4 mt-0.5" /> Tags
                    </div>
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/now">
                  <a
                    className={classNames(
                      active
                        ? 'bg-gray-200 text-gray-700 dark:bg-zinc-700 dark:text-gray-300'
                        : 'bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    <div className="flex flex-row">
                      <DiscIcon className="mr-4 mt-0.5" /> Now
                    </div>
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/journey">
                  <a
                    className={classNames(
                      active
                        ? 'bg-gray-200 text-gray-700 dark:bg-zinc-700 dark:text-gray-300'
                        : 'bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    <div className="flex flex-row">
                      <RocketIcon className="mr-4 mt-0.5" /> Journey
                    </div>
                  </a>
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
