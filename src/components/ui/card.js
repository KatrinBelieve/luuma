export function Card({ children }) {
  return <div className="p-4 rounded-xl bg-white">{children}</div>;
}

export function CardContent({ children }) {
  return <div>{children}</div>;
}
