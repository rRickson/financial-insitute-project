export const loansList = [
  {
    id: 1,
    status: 1,
    name: 'House Loan',
    price: '50000.00',
    date: '2021-12-10T10:10:56',
    type: 0,
  },
  {
    id: 2,
    status: 1,
    name: 'House Loan',
    price: '1000.00',
    date: '2021-12-11T10:10:56',
    type: 1,
  },
  {
    id: 3,
    status: 2,
    name: 'House Loan',
    price: '1000.00',
    date: '2021-12-11T10:15:56',
    payment_date: '2022-01-11T10:10:56',
    type: 1,
  },
];

export enum LoansStatus {
  'pending',
  'Paid',
  'Wait Payment',
}
