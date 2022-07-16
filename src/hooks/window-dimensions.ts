import { useState, useEffect } from 'react'
import { screenBreakpoints } from '@/configs/screen-breakpoint'

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height
  }
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isMobile = (): boolean => {
    return windowDimensions.width < screenBreakpoints.tabletBreakpoint
  }

  const isTablet = (): boolean => {
    return (
      windowDimensions.width >= screenBreakpoints.tabletBreakpoint &&
      windowDimensions.width < screenBreakpoints.laptopBreakpoint
    )
  }

  const isLaptop = (): boolean => {
    return (
      windowDimensions.width >= screenBreakpoints.laptopBreakpoint &&
      windowDimensions.width < screenBreakpoints.desktopBreakpoint
    )
  }

  const isDesktop = (): boolean => {
    return (
      windowDimensions.width >= screenBreakpoints.desktopBreakpoint &&
      windowDimensions.width < screenBreakpoints.tvBreakpoint
    )
  }

  const isTV = (): boolean => {
    return windowDimensions.width >= screenBreakpoints.tvBreakpoint
  }

  const deviceType = (): string => {
    if (windowDimensions.width < screenBreakpoints.tabletBreakpoint) {
      return 'mobile'
    } else if (windowDimensions.width < screenBreakpoints.laptopBreakpoint) {
      return 'tablet'
    } else if (windowDimensions.width < screenBreakpoints.desktopBreakpoint) {
      return 'laptop'
    } else if (windowDimensions.width < screenBreakpoints.tvBreakpoint) {
      return 'desktop'
    }
    return 'tv'
  }

  return {
    width: windowDimensions.width,
    height: windowDimensions.height,
    isMobile,
    isTablet,
    isLaptop,
    isDesktop,
    isTV,
    deviceType
  }
}
