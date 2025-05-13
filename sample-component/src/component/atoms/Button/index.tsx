import './index.css'

export const Button = ({ label, onClick }: { label: string; onClick: () => void }) => (
  <button className="btn" onClick={onClick}>
    {label}
  </button>
)
