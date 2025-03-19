import React from 'react'
import WrapperComponent from './WrapperComponent'
import { Link, NavLink } from 'react-router-dom'
import { header_links } from '@/constants/link.constant'
import clsx from 'clsx'
import AuthButtonMenu from '@/features/authentication/components/AuthButtonMenu'
import InputSearrch from '../InputSearrch'

const HeaderComponent = () => {
  return (
    <div className="bg-bgColorBox py-2 mb-6 shadow">
      <WrapperComponent className="flex items-center gap-6">
        <div className="max-w-xs w-full">
          <Link to={`/`} className="font-semibold text-xl text-blue-600">
            Social
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-between">
          <div className="flex items-center justify-start gap-4">
            {header_links.list1.map((item) => {
              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    clsx([
                      `text-textColorSecondary hover:text-blue-500 flex items-center gap-1`,
                      isActive && `text-blue-500`,
                    ])
                  }
                >
                  <span className="text-base">{item.icon}</span>
                  <span>{item.name}</span>
                </NavLink>
              )
            })}
          </div>
          <InputSearrch />
        </div>
        <div className="max-w-xs w-full">
          <div className="flex items-center justify-end gap-4">
            {header_links.list2.map((item) => {
              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    clsx([
                      `text-textColorSecondary hover:text-blue-500 flex items-center gap-1`,
                      isActive && `text-blue-500`,
                    ])
                  }
                >
                  <span className="text-base">{item.icon}</span>
                </NavLink>
              )
            })}
            <AuthButtonMenu />
          </div>
        </div>
      </WrapperComponent>
    </div>
  )
}

export default HeaderComponent
