export const Footer = () => {
  const weekDay = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
    new Date()
  )

  return (
    <footer className="flex flex-col gap-4 pt-64 pb-12 text-lg text-center text-stone-400">
      <hr aria-hidden />
      <div className="flex flex-wrap justify-center mx-4 gap-x-6 ">
        <span>Copyleft 2024 Beniamino Marini</span>
        <span>
          Source code on{" "}
          <a
            className="underline"
            href="https://github.com/SRFeesha/portfolio-2022"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>{" "}
        </span>
        <span>Have a nice {weekDay} :) </span>
      </div>
    </footer>
  )
}
