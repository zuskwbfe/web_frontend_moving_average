import { useEffect, useMemo, useState } from 'react'
import { PERIODS } from '../mock/periods'
import type { Period } from '../types'
import { DaysFilter } from '../components/DaysFilter'
import { PeriodCard } from '../components/PeriodCard'

export function TilesPage() {
  const [periods, setPeriods] = useState<Period[]>([])
  const [sliderValue, setSliderValue] = useState(0)
  const [minDays, setMinDays] = useState(0)
  useEffect(() => {
    document.title = 'AM Forecast – Плитка'
    setPeriods(PERIODS)
  }, [])

  const filtered = useMemo(
    () => periods.filter((p) => p.days_count >= minDays),
    [periods, minDays],
  )

  return (
    <>
      <DaysFilter
        value={sliderValue}
        onChange={setSliderValue}
        onApply={() => setMinDays(sliderValue)}
      />
      <div className="filter-current-value">Минимальное количество дней: {minDays}</div>

      <div className="tile-grid">
        {filtered.map((p) => (
          <PeriodCard key={p.id} period={p} />
        ))}
      </div>
    </>
  )
}
