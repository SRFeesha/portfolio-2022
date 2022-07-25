export const CrazyCard = ({ children }) => {
  return (
    <div className="relative h-fit">
      <div className="absolute inset-0 scale-90 lg:left-6 top-10 lg:top-4 bg-gradient-to-br from-tory-blue to-chrome-white blur-2xl lg:blur-[128px] rounded-3xl" />
      <div className="absolute inset-0 opacity-50 bg-gradient-to-br from-tory-blue to-chrome-white rounded-3xl" />

      <article className="relative z-10 flex flex-col items-center justify-between gap-20 px-8 py-16 bg-white border-4 border-transparent sm:px-16 sm:py-20 2xl:gap-44 md:flex-row rounded-3xl bg-clip-padding">
        {children}
      </article>
    </div>
  )
}
