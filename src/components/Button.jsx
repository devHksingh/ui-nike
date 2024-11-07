

const Button = ({label,iconUrl}) => {
  return (
    <button className="flex items-center justify-center gap-2 py-4 text-lg leading-none text-white border rounded-full px-7 font-montserrat bg-coral-red border-coral-red hover:bg-orange-800">
      {label} 
      { iconUrl && <img src={iconUrl} alt="icon"
      className="w-5 h-5 ml-2 rounded-full"
      />}

    </button>
  )
}

export default Button