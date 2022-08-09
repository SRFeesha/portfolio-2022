export const Footer = () => {
  const weekDay = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
    new Date()
  )

  return (
    <footer className="flex flex-col gap-4 pt-64 pb-12 text-lg text-center text-stone-400">
      <hr aria-hidden />
      Have a nice {weekDay} :)
    </footer>
  )
}
