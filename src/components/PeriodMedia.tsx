import type { Period } from '../types'

export const DEFAULT_IMAGE = 'public/img/default.png'
export const DEFAULT_VIDEO = 'public/video/default.mp4'

interface MediaProps {
  period: Period
  className?: string
}

export function PeriodImage({ period, className }: MediaProps) {
  const src = period.image_url || DEFAULT_IMAGE
  return <img src={src} alt={period.title} className={className} />
}

export function PeriodVideo({ period, className }: MediaProps) {
  const src = period.video_url || DEFAULT_VIDEO
  return (
    <video
      key={src}
      className={className}
      src={src}
      poster={period.image_url || DEFAULT_IMAGE}
      autoPlay
      loop
      muted
      playsInline
    />
  )
}
