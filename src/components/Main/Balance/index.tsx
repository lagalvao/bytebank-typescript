import Image from 'next/image'
import eyeImg from '../../../assets/icone-olho.svg'

interface BalanceProps {
  balance: string
}

export default function Balance({ balance }: BalanceProps) {
  return (
    <div className="my-0 mx-auto flex flex-col w-[190px] h-full">
      <div className="my-0 mx-auto flex w-full items-center justify-start">
        <h2 className="text-slate-100 font-medium text-lg mr-10">Saldo</h2>
        <Image src={eyeImg} alt="Detalhes" width={20} height={14} />
      </div>
      <div className="w-full h-[1px] bg-slate-100 mx-auto my-4" />
      <p className="text-sm text-slate-100">Conta corrente</p>
      <p
        className="text-2xl font-medium my-4 mx-auto text-slate-100"
        data-testid="balance"
      >{`R$ ${balance}`}</p>
    </div>
  )
}
