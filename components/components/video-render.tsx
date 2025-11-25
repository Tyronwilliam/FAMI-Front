import React from 'react'

export default function VideoRender({ url, control = false }: { url: string; control?: boolean }) {
  return (
    <video
      autoPlay
      muted
      controls={control}
      loop
      playsInline
      preload="metadata"
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src={`${process.env.NEXT_PUBLIC_STRAPI_URL || ''}${url}`} type="video/mp4" />
    </video>
  )
}
