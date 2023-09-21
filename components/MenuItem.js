import React from 'react'
import { Menu } from '@headlessui/react'
import Link from './Link'
import classNames from 'classnames'

function MenuItem({ title, icon, path }) {
  return (
    <Menu.Item className="py-1">
      {({ active }) => (
        <a
          href={path}
          className={classNames(
            active
              ? 'bg-gray-200 text-gray-700 dark:bg-zinc-700 dark:text-gray-300'
              : 'bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700',
            'block px-4 py-2 text-sm'
          )}
        >
          <div className="flex flex-row">
            {icon}
            {title}
          </div>
        </a>
      )}
    </Menu.Item>
  )
}

export default MenuItem
