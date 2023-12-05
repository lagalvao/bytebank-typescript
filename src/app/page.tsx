'use client'
import { useState } from 'react'

import Header from '@/components/Header'
import Menu from '@/components/Menu'
import Transaction from '@/components/Transaction'
import { Transaction as TransactionInterface } from '@/components/Extract/Transactions'
import Extract from '@/components/Extract'
import Main from '@/components/Main'

import { calculateNewBalance } from '@/utils'

export default function Home() {
  const [balance, setBalance] = useState(1000)
  const [transactions, setTransactions] = useState<TransactionInterface[]>([])

  function carryOutTransaction(values: any) {
    const newBalance = calculateNewBalance(
      {
        transaction: values.transaction,
        value: values.value,
      },
      balance,
    )

    setBalance(newBalance)
    setTransactions([...transactions, values])
  }

  return (
    <>
      <Header />
      <main className="mx-auto my-0 flex mt-4 w-[1199px] h-[86vh] justify-between">
        <Menu />
        <div className="mx-auto my-0 flex flex-col items-center">
          <Main balance={balance.toString()} />
          <Transaction carryOutTransaction={carryOutTransaction} />
        </div>
        <Extract transactions={transactions} />
      </main>
    </>
  )
}
