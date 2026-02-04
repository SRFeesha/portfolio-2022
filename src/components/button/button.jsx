import clsx from "clsx"

export const Button = ({
  kind = "primary",
  icon,
  href,
  onClick,
  openInNewTab = true,
  className,
  children,
  disabled = false,
  type = "button",
}) => {
  const hierarchy = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    flat: "btn-flat",
  }

  const sharedClasses = clsx(
    "btn",
    hierarchy[kind],
    className,
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-800"
  )

  const content = (
    <span className="flex items-center gap-2">
      {icon && icon}
      {children}
    </span>
  )

  // Render as button when onClick is provided or no href
  if (onClick || !href) {
    return (
      <button
        type={type}
        className={clsx(sharedClasses, "cursor-pointer")}
        onClick={onClick}
        disabled={disabled}
      >
        {content}
      </button>
    )
  }

  // Render as anchor when href is provided
  return (
    <a
      className={sharedClasses}
      href={href}
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
    >
      {content}
    </a>
  )
}
