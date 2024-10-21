import { Fragment, ReactNode } from "react"

/**
 * Renders a list of items using a custom element.
 * @param {Object} props - Component props.
 * @param {Array<T>} props.items - The array of items to render.
 * @param {Function} props.element - A function that renders an item from the items array.
 * @returns {ReactNode} React nodes representing the list of items.
 * @template T - The type of items in the list.
 * @todo chukSize - Approx number of items to be visible in the viewport & to be loaded lazily.
 */
export function List<T>({
  items,
  element,
}: {
  items: T[]
  element: (props: T) => ReactNode
}) {
  return (
    <Fragment>
      {items.map((v, i) => (
        <Fragment key={i}>{element(v)}</Fragment>
      ))}
    </Fragment>
  )
}
