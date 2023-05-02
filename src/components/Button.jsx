
export const Button = ({text, borderColor, borderWidth,}) => {
    console.log(borderColor, borderWidth)
  return (
    <button className={`${borderWidth} ${borderColor} p-2 w-36 rounded-full text-white bg-bg-box text-sm font-medium mt-6 shadow-lg shadow-black/40`}>
        {text}
    </button>
  )
}
