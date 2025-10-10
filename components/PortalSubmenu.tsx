"use client"
import React, { useEffect, useRef, useState } from "react"

type Props = {
  anchorEl: HTMLElement | null
  open: boolean
  // Called when pointer enters portal (should cancel close timer)
  onPortalEnter?: () => void
  // Called when pointer leaves portal (should start close timer)
  onPortalLeave?: () => void
  children: React.ReactNode
}

export default function PortalSubmenu({ anchorEl, open, onPortalEnter, onPortalLeave, children }: Props) {
  const elRef = useRef<HTMLDivElement | null>(null)
  const [style, setStyle] = useState<React.CSSProperties>({ position: "absolute", visibility: "hidden" })

  // create the portal container only on the client
  useEffect(() => {
    if (typeof document === "undefined") return
    if (!elRef.current) {
      elRef.current = document.createElement("div")
      elRef.current.className = "portal-submenu-root"
    }
    const root = document.body
    root.appendChild(elRef.current)
    return () => {
      if (elRef.current && root.contains(elRef.current)) root.removeChild(elRef.current)
    }
  }, [])

  useEffect(() => {
    function update() {
      if (!anchorEl) return setStyle(s => ({ ...s, visibility: "hidden" }))
      const rect = anchorEl.getBoundingClientRect()
      const top = rect.bottom + window.scrollY
      const left = rect.left + window.scrollX
      setStyle({
        position: "absolute",
        top: `${top}px`,
        left: `${left}px`,
        minWidth: `${rect.width}px`,
        zIndex: 99999,
        visibility: open ? "visible" : "hidden",
      })
    }
    update()
    window.addEventListener("resize", update)
    window.addEventListener("scroll", update, true)
    return () => {
      window.removeEventListener("resize", update)
      window.removeEventListener("scroll", update, true)
    }
  }, [anchorEl, open])

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!elRef.current) return
      if (!open) return
      const target = e.target as Node
      if (anchorEl && anchorEl.contains(target)) return
      if (!elRef.current.contains(target) && typeof (anchorEl as any) !== 'undefined') {
        // notify parent to close
        if (typeof (anchorEl as any).close === 'function') (anchorEl as any).close()
      }
    }
    if (typeof document !== "undefined") {
      document.addEventListener("mousedown", onDocClick)
      return () => document.removeEventListener("mousedown", onDocClick)
    }
    return () => {}
  }, [open, anchorEl])

  // Render portal content with mouse handlers so parent can keep it open while pointer is over the submenu
  if (!elRef.current) return null
  if (typeof window === "undefined") return null

  // require createPortal at runtime to avoid SSR issues
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { createPortal: runtimeCreatePortal } = require("react-dom")

  return runtimeCreatePortal(
    <div
      style={style}
      onMouseEnter={() => onPortalEnter && onPortalEnter()}
      onMouseLeave={() => onPortalLeave && onPortalLeave()}
      role="menu"
      aria-hidden={!open}
    >
      {children}
    </div>,
    elRef.current,
  )
}
