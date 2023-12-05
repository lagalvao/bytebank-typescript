const menuList = [
  'Inicial',
  'Transferências',
  'Investimentos',
  'Outros serviços',
]

export default function Menu() {
  return (
    <nav className="w-[180px] h-full p-6 bg-slate-100  list-none rounded-lg">
      {menuList.map((item, index) => {
        return (
          <div key={item} className="text-center">
            <a
              href="/"
              className="text-slate-900 text-base cursor-pointer hover:text-black font-semibold"
            >
              {item}
            </a>
            {index !== menuList.length - 1 && (
              <div className="w-[90%] h-[1px] bg-slate-900 mx-auto my-4" />
            )}
          </div>
        )
      })}
    </nav>
  )
}
