import { TBike } from "../bikes/bike.type"

export interface TRental {
    _id: string
    userId: string
    bikeId: TBike
    startTime: string
    returnTime: string | null
    totalCost: number
    isReturned: boolean
    paymentStatus: string
    isConfirm: boolean
    availabilityStatus: boolean
    isAdvancePaymentPaid: boolean
    __v: number
    advancePayment: number
    duePayment: number
  }