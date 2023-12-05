import Image from 'next/image'
import ilustrationImg from '../../assets/ilustracao.svg'
import topDetailImg from '../../assets/detalhe-sup-principal.svg'
import bottomDetailImg from '../../assets/detalhe-inf-principal.svg'
import Balance from './Balance'

const date = Date.now()

const today = new Date(date)

const dayOfTheWeek = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
]

interface MainProps {
  balance: string
}

export default function Main({ balance }: MainProps) {
  return (
    <section className="rounded-lg p-6 w-[690px] h-2/4 flex flex-col justify-between relative bg-green-700">
      <Image
        src={topDetailImg}
        alt="Detalhes do topo"
        width={200}
        height={200}
        className="absolute top-0 right-0"
      />
      <h1 className="font-medium text-slate-100 text-2xl">Olá, Joana :)!</h1>
      <p className="text-slate-100 mb-6 mt-4">{`${
        dayOfTheWeek[today.getDay()]
      }, ${today.toLocaleDateString('pt-BR')}`}</p>
      <div className="mx-auto my-0 flex w-full items-center justify-between">
        <Image
          src={ilustrationImg}
          alt="Ilustração"
          className="z-10"
          width="230"
          height="185"
        />
        <Balance balance={balance} />
      </div>
      <Image
        src={bottomDetailImg}
        alt="Detalhes do rodapé"
        width={200}
        height={200}
        className="absolute bottom-0 left-0"
      />
    </section>
  )
}
