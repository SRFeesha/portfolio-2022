import clsx from "clsx"

export const Button = ({
  kind = "primary",
  icon,
  href,
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
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="flex items-center gap-2 ">
        {icon && icon}
        {children}
      </span>
    </a>
  )
}
