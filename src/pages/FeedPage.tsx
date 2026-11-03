import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { PERIODS } from '../mock/periods'
import type { Period } from '../types'
import { PeriodVideo } from '../components/PeriodMedia'
import { useParams } from 'react-router-dom'

export function FeedPage() {
  const { id } = useParams()
  const [periods, setPeriods] = useState<Period[]>([])
  const [index, setIndex] = useState(0)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    document.title = 'AM Forecast – Лента'
    setPeriods(PERIODS)
    const i = PERIODS.findIndex((p) => p.id === Number(id))
    setIndex(i >= 0 ? i : 0)
    setExpanded(false)
  }, [id])

  if (periods.length === 0) return null
  const period = periods[index]

  const handleNext = () => {
    setIndex((index + 1) % periods.length)
    setExpanded(false)
  }

  return (
    <div className="video-layout">
      <div className="tiktok-container">
        <PeriodVideo period={period} />

        {/* Параметры – справа */}
        <div className="side-fields">
          <span className="theme-field">Порядок: {period.order_number}</span>
          <span className="theme-field">Дней: {period.days_count}</span>
        </div>

        {/* Иконки – отдельно, на постоянном месте */}
        <div className="side-icons">
          <div className="like-button">
            <img src="/img/like.png" alt="Лайк" className="like-icon" />
            <span className="like-count">{period.likes_count}</span>
          </div>
          <Button variant="link" className="next-button" onClick={handleNext}>
            <img src="/img/next.png" alt="Следующий" />
          </Button>
        </div>

        {/* Название и описание – снизу поверх видео */}
        <div className="description-overlay">
          <strong>{period.title}</strong>
          <p className={expanded ? 'description-text expanded' : 'description-text'}>
            {period.description}
          </p>
          <button type="button" className="desc-toggle-label" onClick={() => setExpanded(!expanded)}>
            {expanded ? 'меньше' : 'больше'}
          </button>
        </div>
      </div>
    </div>
  )
}
