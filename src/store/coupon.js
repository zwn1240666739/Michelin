import http from '@/api/http'


export default {
    namespaced: true,
    state: {
        fullDec: [],
        discount: [],
        newCoupon: []
    },
    mutations: {
        
        
        
    },
    actions: {
        setFullDec(context, arg) {
            context.state.fullDec.push(arg)
            // 向数据库添加
            let obj = {
                fullDec: context.state.fullDec,
                discount: context.state.discount,
                newCoupon: context.state.newCoupon
            }
            http.post('http://127.0.0.1:3000/addCoupon', obj).then(ret => {
                console.log(ret)
            })
        },
        setDiscount(context, arg) {
            // console.log(context)
            context.state.discount.push(arg)
            let obj = {
                fullDec: context.state.fullDec,
                discount: context.state.discount,
                newCoupon: context.state.newCoupon
            }
            http.post('http://127.0.0.1:3000/addCoupon', obj).then(ret => {
                console.log(ret)
            })
        },
        setNewCoupon(context, arg) {
            context.state.newCoupon.push(arg)
            let obj = {
                fullDec: context.state.fullDec,
                discount: context.state.discount,
                newCoupon: context.state.newCoupon
            }
            http.post('http://127.0.0.1:3000/addCoupon', obj).then(ret => {
                console.log(ret)
            })
        }
    },
    getters: {}
}