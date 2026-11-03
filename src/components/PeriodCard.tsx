import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import type { Period } from '../types'
import { PeriodImage } from './PeriodMedia'

interface PeriodCardProps {
  period: Period
}

// Карточка плитки: клик открывает ленту на этом периоде
export function PeriodCard({ period }: PeriodCardProps) {
  return (
    <Card as={Link} to={`/feed/${period.id}`} className="tile-card">
      <PeriodImage period={period} className="tile-image" />
      <div className="tile-info">
        <div className="tile-title">{period.title}</div>
        <div className="tile-revenue">Дней: {period.days_count}</div>
        <div className="tile-likes">
          <img src="/img/like.png" alt="Лайк" />
          <span>{period.likes_count}</span>
        </div>
      </div>
    </Card>
  )
}
