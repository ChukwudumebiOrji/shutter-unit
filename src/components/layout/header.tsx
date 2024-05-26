import { useDispatch, useSelector } from "react-redux"
import { setTheme, themeSelector } from "../../features/themeSlice"
import { TbMoonFilled, TbSunFilled } from "react-icons/tb"

const Header = ({ pageTitle }: any) => {
  const isLight = useSelector(themeSelector)
  const dispatch = useDispatch()

  const changeTheme = () => {
    dispatch(setTheme())
  }

  return (
    <header className="flex justify-between mb-8">
      <button type="button" onClick={changeTheme}>
        {isLight ? <TbSunFilled size={24} /> : <TbMoonFilled size={24} />}
      </button>
      <h1 className="text-xl font-semibold underline text-right capitalize">
        {pageTitle}
      </h1>
    </header>
  )
}

export default Header
