export const CrazyCard = ({ children }) => {
  return (
    <div className="relative h-fit">
      <div className="absolute inset-0 scale-90 lg:left-12 top-10 lg:top-4 bg-linear-to-br from-10% via-80% blur-2xl lg:blur-[96px] rounded-3xl from-sky-500/30  via-blue-700/40 to-violet-700/80 " />

      <div className="absolute inset-0 opacity-70 bg-linear-to-br from-teal-500  via-blue-700 to-violet-800 via-30% rounded-3xl" />

      <article className="relative z-10 flex flex-col items-center justify-between gap-20 px-8 py-16 border-4 border-transparent bg-white/90 sm:px-16 sm:py-20 2xl:gap-44 md:flex-row rounded-3xl bg-clip-padding">
        {children}
      </article>
    </div>
  )
}
