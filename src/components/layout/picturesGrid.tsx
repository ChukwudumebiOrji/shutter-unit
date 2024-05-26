import React from "react"

const PicturesGrid = ({ children }: any) => {
  return (
    <div className="columns-1 tablet:columns-2 laptop:columns-3 gap-4 tablet:gap-7 laptop:gap-10">
      {children}
    </div>
  )
}

export default PicturesGrid
