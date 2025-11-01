import clsx from "clsx"

export const Button = ({
  kind = "primary",
  icon,
  href,
  magnetic = true,
  openInNewTab = true,
  className,
  children,
}) => {
  const hierarchy = {
    primary: "btn-primary",
    secondary: "btn-secondary ",
    flat: "btn-flat",
  }

  return (
    <a
      className={clsx("btn", hierarchy[kind], className)}
      href={href}
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
    >
      <span className="flex items-center gap-2">
        {icon && icon}
        {children}
      </span>
    </a>
  )
}
