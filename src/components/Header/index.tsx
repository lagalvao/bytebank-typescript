import Image from 'next/image'
import logoImg from '../../assets/bytebank.svg'
import avatarImg from '../../assets/avatar.svg'

export default function Header() {
  return (
    <header className="bg-black h-[76px] flex items-center justify-center">
      <div className="mx-auto my-0 flex justify-between w-[1199px]">
        <Image src={logoImg} alt="ByteBank" width={146} height={32} />
        <div className="w-[282px] flex items-center justify-end">
          <p className="text-green-700 text-sm mr-6">Joana Fonseca Gomes</p>
          <Image
            src={avatarImg}
            alt="Ícone de um avatar de usuário"
            width={40}
            height={40}
          />
        </div>
      </div>
    </header>
  )
}
