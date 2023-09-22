import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { motion } from 'framer-motion'
import classNames from 'classnames'
import { useSession } from 'next-auth/react'
import Link from './Link'
import {
  RxHome,
  RxPencil1,
  RxDisc,
  RxHamburgerMenu,
  RxFrame,
  RxPerson,
  RxArchive,
  RxRocket,
  RxFileText,
} from 'react-icons/rx'
import MenuItem from './MenuItem'

export default function DropMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const { data: session } = useSession()
  const toggleIcon = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Menu as="div" className="relative z-10 inline-block text-left ">
      <div>
        <Menu.Button
          className="ml-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-zinc-300 p-2 ring-zinc-400 transition-all hover:bg-violet-400 hover:ring-1 dark:bg-zinc-700 dark:ring-violet-700 dark:hover:bg-violet-600"
          transition={{ duration: 0.1, ease: 'easeIn' }}
          aria-label="Toggle List Menu"
          type="button"
        >
          {isOpen ? (
            <RxHamburgerMenu className="h-4 w-4" />
          ) : (
            <RxHamburgerMenu className="h-4 w-4" />
          )}
        </Menu.Button>
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
          <MenuItem title="Home" icon={<RxHome className="mr-4 mt-0.5" />} path={'/'} />
          <MenuItem title="Blog" icon={<RxFileText className="mr-4 mt-0.5" />} path={'/blog'} />
          <MenuItem
            title="Projects"
            icon={<RxArchive className="mr-4 mt-0.5" />}
            path={'/projects'}
          />
          <MenuItem title="About" icon={<RxPerson className="mr-4 mt-0.5" />} path={'/about'} />
          <MenuItem
            title="Contact"
            icon={<RxPencil1 className="mr-4 mt-0.5" />}
            path={'/contact'}
          />
          <MenuItem title="Tags" icon={<RxFrame className="mr-4 mt-0.5" />} path={'/tags'} />
          <MenuItem title="Now" icon={<RxDisc className="mr-4 mt-0.5" />} path={'/now'} />
          <MenuItem title="Journey" icon={<RxRocket className="mr-4 mt-0.5" />} path={'/journey'} />
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
