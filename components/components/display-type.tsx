import React from 'react'

type DisplayTypeProps = {
  type: string
  text: string
  className?: string // classes personnalisées
}

export const DisplayType: React.FC<DisplayTypeProps> = ({ type, text, className }) => {
  // On mappe le type reçu à une balise React valide
  const Tag = (
    ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'].includes(type) ? type : 'span'
  ) as keyof JSX.IntrinsicElements

  return <Tag className={className}>{text}</Tag>
}
