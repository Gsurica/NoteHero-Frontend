export const Header = () => {
  return (
    <div className="grid grid-cols-3 p-6 border-b-2 border-rose-100">
      <div className="flex items-center justify-center"> 
      <button className="rounded-lg p-2 hover:bg-rose-100 transition-all">
          Hello!
        </button>
      </div>
      <div className="flex items-center justify-center">
        <button className="rounded-lg p-2 hover:bg-rose-100 transition-all">
          Menu!
        </button>
      </div>
      <div className="flex items-center justify-center">
        <button className="rounded-lg p-2 hover:bg-rose-100 transition-all">
          Log in!
        </button>
      </div>
    </div>
  )
}
