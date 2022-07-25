import clsx from "clsx"

export const Button = ({
  kind = "primary",
  icon,
  href,
  className,
  children,
}) => {
  const hierarchy = {
    primary:
      "text-white bg-blue-500 border-blue-600 active:bg-blue-600 hover:border-blue-700 hover:drop-shadow-lg ",
    secondary:
      "bg-white hover:border-slate-300 hover:drop-shadow active:bg-slate-200 ",
    flat: "drop-shadow-none border-none hover:bg-slate-200 active:bg-slate-300 ease-in",
  }

  return (
    <a
      className={clsx(
        "px-4 py-2 text-lg border-2 rounded-xl w-fit drop-shadow-sm  ease-in-out duration-300 active:drop-shadow-none",
        hierarchy[kind],
        className
      )}
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
