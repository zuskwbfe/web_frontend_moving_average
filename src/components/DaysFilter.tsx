import { Button, Form } from 'react-bootstrap'

interface DaysFilterProps {
  value: number
  onChange: (value: number) => void
  onApply: () => void
}

export function DaysFilter({ value, onChange, onApply }: DaysFilterProps) {
  return (
    <div className="filter-bar-wrapper">
      <Form
        className="filter-bar"
        onSubmit={(e) => {
          e.preventDefault()
          onApply()
        }}
      >
        <Form.Range
          className="filter-slider"
          min={0}
          max={100}
          step={1}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />
        <Button type="submit" className="filter-button">Найти</Button>
      </Form>
    </div>
  )
}
