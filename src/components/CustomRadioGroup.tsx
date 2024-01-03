type Item<T> = {
  value: T
  label: string
}

const CustomRadioGroup = <T extends string>({
  value,
  onValueChange,
  items,
}: {
  value?: T
  onValueChange?: (val: T) => void
  items: Item<T>[]
}) => {
  return (
    <div>
      {items.map(({ value: itemValue, label }) => (
        <label
          key={String(itemValue)}
          className={`block cursor-pointer ${
            value === itemValue
              ? 'bg-white/10 text-white rounded-md'
              : 'text-white'
          } p-2 rounded`}
        >
          <input
            type="radio"
            id={String(itemValue)}
            value={itemValue}
            checked={value === itemValue}
            onChange={() => onValueChange?.(itemValue)}
            className="hidden"
          />
          {label}
        </label>
      ))}
    </div>
  )
}

export default CustomRadioGroup
