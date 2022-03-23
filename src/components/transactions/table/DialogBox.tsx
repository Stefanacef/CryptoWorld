import { Dialog } from '@mui/material'
import React from 'react'
import { useIntl } from 'react-intl'
import useEditTransaction from '../../../api/transactions/useEditTransaction'
import useTransaction from '../../../api/transactions/useTransaction'
import TransactionsForm from '../TransactionsForm'
import { ITransaction } from '../types'

interface IDialogBox {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  open: boolean
  cell: any
}
export const DialogBox = (props: IDialogBox) => {
  const intl = useIntl()

  const { mutateAsync: mutateAsyncEdit } = useEditTransaction()
  const { data } = useTransaction(props.cell.row.original.id)

  const handleEdit = async (values: ITransaction) => {
    await mutateAsyncEdit({
      ...data,
      coin: values.coin,
      amount: values.amount,
      date: values.date,
      currency: values.currency,
      type: values.type,
      price: values.price,
      description: values.description ? values.description : '',
      pinOnTop: values.pinOnTop,
    })
  }
  return (
    <Dialog onClose={() => props.setOpen(false)} open={props.open}>
      <TransactionsForm
        setOpen={props.setOpen}
        title={intl.formatMessage({
          id: 'transaction.title.edit',
        })}
        transactionsData={props.cell.row.original}
        handleSubmit={handleEdit}
        buttonText={intl.formatMessage({
          id: 'generic.label.save',
        })}
      />
    </Dialog>
  )
}
