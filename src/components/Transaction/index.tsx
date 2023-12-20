import Image from 'next/image'
import illustrationImg from '../../assets/ilustracao-transacao.svg'
import topDetailImg from '../../assets/detalhe-sup.svg'
import bottomDetailImg from '../../assets/detalhe-inf.svg'
import Form from './Form'
import { AddNewTransaction } from '@/models/interfaces/add-new-transaction.interface'

interface TransactionProps {
  carryOutTransaction: (values: AddNewTransaction) => void
}

export default function Transaction({ carryOutTransaction }: TransactionProps) {
  return (
    <section className="bg-zinc-400 rounded-lg p-6 mt-4 w-[690px] h-1/2 flex items-center relative z-0">
      <Image
        src={topDetailImg}
        alt="Detalhes do topo"
        className="absolute top-0 right-0 z-10"
      />
      <div className="mx-auto my-0 flex flex-col w-[60%] h-full">
        <Form carryOutTransaction={carryOutTransaction} />
      </div>
      <Image src={illustrationImg} alt="Ilustração" height="229" width="359" />
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
