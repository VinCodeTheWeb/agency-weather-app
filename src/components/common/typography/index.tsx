interface ITypography {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  className?: string
  children: React.ReactNode
}

const Typography: React.FC<ITypography> = ({
  variant = 'h1',
  className,
  children,
}) => {
  const Tag = variant
  return <Tag className={className}>{children}</Tag>
}

export { Typography }
