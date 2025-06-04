// TaskList.tsx
import React from "react";

type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
};

function List<T>({ items, renderItem }: ListProps<T>): JSX.Element {
  if (items.length === 0) {
    return <p>Aucune item pour le moment.</p>;
  }
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {items.map((item, i) => (
        <React.Fragment key={i}>{renderItem(item)}</React.Fragment>
      ))}
    </ul>
  );
}

export default List;
