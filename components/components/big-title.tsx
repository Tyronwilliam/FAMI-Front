import { cn } from '@/lib/utils'
import React from 'react'

export default function BigTitle({
  type,
  textColor,
  title
}: {
  textColor?: string
  title: string
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
}) {
  const Tag = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'].includes(type) ? type : 'span'
  return (
    <Tag
      className={cn(
        textColor !== undefined ? textColor : 'text-white',
        type === 'h2' && 'font-display text-5xl md:text-7xl  mb-6'
      )}
    >
      {title}
    </Tag>
  )
}
