const Sidebar = () => {
  return (
    <div className="w-[120px] justify-between border-r h-full flex flex-col text-right text-xl relative p-2 tablet:p-4 tablet:w-1/5 laptop:p-6 desktop:p-10">
      <a
        href="/"
        className="uppercase my-8 font-extrabold text-center tablet:text-2xl laptop:text-3xl desktop:text-4xl"
      >
        shutter
      </a>
      <div className="flex flex-col">
        <a
          className="py-1.5 hover:underline tablet:py-2.5 tablet:text-lg laptop:py-4 laptop:text-xl desktop:py-6 desktop:text-2xl"
          href="/"
        >
          Gallery
        </a>
        <a
          className="py-1.5 hover:underline tablet:py-2.5 tablet:text-lg laptop:py-4 laptop:text-xl desktop:py-6 desktop:text-2xl"
          href="/about"
        >
          About
        </a>
        <a
          className="py-1.5 hover:underline tablet:py-2.5 tablet:text-lg laptop:py-4 laptop:text-xl desktop:py-6 desktop:text-2xl"
          href="/contact"
        >
          Connect
        </a>
      </div>
      <div className="capitalize text-[7px] font-light mx-autolaptop:text-xs desktop:text-sm text-center">
        &copy; 2021 shutterunit photography.
      </div>
    </div>
  )
}

export default Sidebar
