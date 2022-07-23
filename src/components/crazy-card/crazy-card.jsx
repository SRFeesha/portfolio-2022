export const CrazyCard = ({ children }) => {
  return (
    <div className="relative h-fit">
      <div className="absolute inset-0 scale-90 left-6 bg-gradient-to-br from-tory-blue to-chrome-white blur-[128px]" />
      <article className="relative z-10 flex flex-col items-center justify-between gap-16 px-8 py-10 bg-white border-2 border-white/30 sm:px-16 sm:py-20 2xl:gap-44 md:flex-row rounded-3xl bg-clip-padding">
        {children}
      </article>
    </div>
  )
}
