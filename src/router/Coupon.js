import Discount from '@/views/coupon/Discount'
import FullDec from '@/views/coupon/FullDec'
import NewCoupons from '@/views/coupon/NewCoupons'
import SumCoupons from '@/views/coupon/SumCoupons'
import NewDiscount from '@/views/coupon/NewDiscount'
import NewFullDec from '@/views/coupon/NewFullDec'

let Coupon = [
    {
        path: '6-1',
        component: FullDec
    },
    {
        path: '6-1/6-1-1',
        component: NewFullDec
    },
    {
        path: '6-2',
        component: Discount
    },
    {
        path: '6-2/6-2-1',
        component: NewDiscount
    },
    {
        path: '6-3',
        component: NewCoupons
    },
    {
        path: '6-4',
        component: SumCoupons
    },
]

export default Coupon