import TabSet from '@/views/table/TabSet'
import TabBuild from '@/views/table/TabBuild'
import TabM from '@/views/table/TabM'
import TabType from '@/views/table/TabType'



let table = [
    {
        path: '3-1',
        component: TabSet,
    },
    {
        path: '3-1/3-1-1',
        component: TabBuild
    },
    {
        path: '3-3',
        component: TabM
    },
    {
        path: '3-2',
        component: TabType
    }
]

export default table