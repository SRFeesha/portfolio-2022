export const Footer = () => {
  const weekDay = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
    new Date()
  )

  return (
    <footer className="flex flex-col gap-4 py-4 pb-12 mt-64 text-lg text-center text-slate-400">
      <hr aria-hidden />
      Have a nice {weekDay} :)
    </footer>
  )
}
