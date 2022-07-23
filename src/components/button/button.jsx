import clsx from "clsx"

export const Button = ({ icon, className, children }) => {
  return (
    <button
      className={clsx(
        className,
        "px-4 py-2 text-lg text-white bg-blue-500 border-[3] border-blue-600 rounded-xl w-fit drop-shadow-sm hover:drop-shadow-lg ease-in-out active:bg-blue-600 hover:border-blue-700 duration-300"
      )}
    >
      <span className="flex items-center gap-2 ">
        {icon && icon}
        {children}
      </span>
    </button>
  )
}
