import { useEffect, useState } from 'react'
import { ClapButton } from '@lyket/react'
import ScrollTop from '@/components/ScrollTop'

const ScrollTopAndComment = (props) => {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 50) setShow(true)
      else setShow(false)
    }

    window.addEventListener('scroll', handleWindowScroll)
    return () => window.removeEventListener('scroll', handleWindowScroll)
  }, [])

  return (
    <>
      <div className={`fixed right-8 bottom-9 hidden flex-col gap-6 md:flex`}>
        <button className="mb-16">
          <ClapButton id={props.lyketId} namespace="post" hideCounterIfLessThan={1} />
        </button>
      </div>
      <div
        className={`fixed right-8 bottom-9 hidden flex-col gap-6 ${show ? 'md:flex' : 'md:hidden'}`}
      >
        <ScrollTop />
      </div>
    </>
  )
}

export default ScrollTopAndComment
