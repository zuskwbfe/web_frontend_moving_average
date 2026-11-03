import type { Period } from '../types'

// Описание месяца: что хранится в периоде и как он используется в расчёте
const monthText = (name: string, days: number) =>
  `${name} – один из 12 месяцев года, для которого хранится выручка. В периоде ${days} дн., он входит в окно скользящей средней вместе с соседними месяцами. Чем больше дней в периоде, тем больший вклад он даёт в итоговый прогноз.`

// Описание квартала: агрегированный период из трёх месяцев
const quarterText = (name: string, days: number) =>
  `${name} объединяет три месяца года и хранит суммарную выручку за них. В периоде ${days} дн., он используется для расчёта скользящей средней по кварталам и помогает увидеть сезонные колебания выручки.`

// Mock-коллекция периодов: 12 месяцев и 4 квартала.
export const PERIODS: Period[] = [
  { id: 1, title: 'Январь', description: monthText('Январь', 31), order_number: 1, days_count: 31, image_url: null, video_url: null, likes_count: 12 },
  { id: 2, title: 'Февраль', description: monthText('Февраль', 28), order_number: 2, days_count: 28, image_url: null, video_url: null, likes_count: 7 },
  { id: 3, title: 'Март', description: monthText('Март', 31), order_number: 3, days_count: 31, image_url: null, video_url: null, likes_count: 9 },
  { id: 4, title: 'Апрель', description: monthText('Апрель', 30), order_number: 4, days_count: 30, image_url: null, video_url: null, likes_count: 4 },
  { id: 5, title: 'Май', description: monthText('Май', 31), order_number: 5, days_count: 31, image_url: null, video_url: null, likes_count: 0 },
  { id: 6, title: 'Июнь', description: monthText('Июнь', 30), order_number: 6, days_count: 30, image_url: null, video_url: null, likes_count: 3 },
  { id: 7, title: 'Июль', description: monthText('Июль', 31), order_number: 7, days_count: 31, image_url: 'public/img/forecast_jul.png', video_url: 'public/video/forecast_jul.mp4', likes_count: 5 },
  { id: 8, title: 'Август', description: monthText('Август', 31), order_number: 8, days_count: 31, image_url: null, video_url: null, likes_count: 2 },
  { id: 9, title: 'Сентябрь', description: monthText('Сентябрь', 30), order_number: 9, days_count: 30, image_url: null, video_url: null, likes_count: 6 },
  { id: 10, title: 'Октябрь', description: monthText('Октябрь', 31), order_number: 10, days_count: 31, image_url: 'public/img/forecast_oct.png', video_url: 'public/video/forecast_oct.mp4', likes_count: 1 },
  { id: 11, title: 'Ноябрь', description: monthText('Ноябрь', 30), order_number: 11, days_count: 30, image_url: null, video_url: null, likes_count: 8 },
  { id: 12, title: 'Декабрь', description: monthText('Декабрь', 31), order_number: 12, days_count: 31, image_url: null, video_url: null, likes_count: 10 },
  { id: 13, title: '1 квартал', description: quarterText('1 квартал', 90), order_number: 13, days_count: 90, image_url: null, video_url: null, likes_count: 15 },
  { id: 14, title: '2 квартал', description: quarterText('2 квартал', 91), order_number: 14, days_count: 91, image_url: 'public/img/forecast_q2.jpg', video_url: 'public/video/forecast_q2.mp4', likes_count: 6 },
  { id: 15, title: '3 квартал', description: quarterText('3 квартал', 92), order_number: 15, days_count: 92, image_url: 'public/img/forecast_q3.png', video_url: 'public/video/forecast_q3.mp4', likes_count: 3 },
  { id: 16, title: '4 квартал', description: quarterText('4 квартал', 92), order_number: 16, days_count: 92, image_url: 'public/img/forecast_q4.png', video_url: 'public/video/forecast_q4.mp4', likes_count: 9 },
]
