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
      <div className={`fixed bottom-9 right-8 mb-16 hidden flex-col gap-6 md:flex`}>
        <ClapButton id={props.lyketId} namespace="post" hideCounterIfLessThan={1} />
      </div>
      <div
        className={`fixed bottom-9 right-8 hidden flex-col gap-6 ${show ? 'md:flex' : 'md:hidden'}`}
      >
        <ScrollTop />
      </div>
    </>
  )
}

export default ScrollTopAndComment
