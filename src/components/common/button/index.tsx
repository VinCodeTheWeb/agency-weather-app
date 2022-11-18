import Link from 'next/link'

interface IButton {
  onClick?: (arg?: any) => void
  children?: string | React.ReactNode
  label?: string
  className?: string
  href?: string
}

const Button: React.FC<IButton> = ({
  onClick,
  label,
  href,
  className,
  children,
}) => {
  if (!href) {
    return (
      <a onClick={onClick} className={className}>
        {label || children}
      </a>
    )
  }

  return (
    <Link href={href} passHref>
      <a className={className}>{label || children}</a>
    </Link>
  )
}

export { Button }
