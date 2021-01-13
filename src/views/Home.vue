<template>
    <div>
        <el-container style="">
            <el-header style="text-align: right; font-size: 12px; background-color: skyblue; line-height: 60px;">
                <div class="logo">
                    <img src="../assets/hr.jpg" alt="">
                    <p>营业中</p>
                    <img src="https://axhub.im/pro/221031c5a692ef70/images/%E8%B4%A6%E5%8F%B7%E8%AE%BE%E7%BD%AE/u75.png
" alt="">
                </div>
                <span style="margin-right: 20px; cursor: pointer;" @click="handleClick">账户设置</span>
                <span style="cursor: pointer;" @click="quit">退出登录</span>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu :default-active="$route.path" router>
                        <el-submenu index="1">
                            <template slot="title"><i class="el-icon-menu"></i>工作台</template>
                            <el-menu-item-group>
                            <el-menu-item index="/home/1-1">工作台</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="2">
                            <template slot="title"><i class="el-icon-menu"></i>菜品管理</template>
                            <el-menu-item-group>
                            <el-menu-item index="/home/2-1">菜品管理</el-menu-item>
                            <el-menu-item index="/home/2-2">分类管理</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="3">
                            <template slot="title"><i class="el-icon-menu"></i>桌台管理</template>
                            <el-menu-item-group>
                            <el-menu-item index="/home/3-1">桌台设置</el-menu-item>
                            <el-menu-item index="/home/3-2">桌型管理</el-menu-item>
                            <el-menu-item index="/home/3-3">桌位管理</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="4">
                            <template slot="title"><i class="el-icon-menu"></i>订单统计</template>
                            <el-menu-item-group>
                            <el-menu-item index="/home/4-1">订单统计</el-menu-item>
                            <el-menu-item index="/home/4-2">订单列表</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="5">
                            <template slot="title"><i class="el-icon-menu"></i>门店设置</template>
                            <el-menu-item-group>
                            <el-menu-item index="/home/5-1">门店设置</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="6">
                            <template slot="title"><i class="el-icon-menu"></i>营销管理</template>
                            <el-menu-item-group>
                            <el-menu-item index="/home/6-1">满减券</el-menu-item>
                            <el-menu-item index="/home/6-2">限时折扣</el-menu-item>
                            <el-menu-item index="/home/6-3">新人券</el-menu-item>
                            <el-menu-item index="/home/6-4">优惠券叠加设置</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="7">
                            <template slot="title"><i class="el-icon-menu"></i>排队取号</template>
                            <el-menu-item-group>
                            <el-menu-item index="/home/7-1">排队列表</el-menu-item>
                            <el-menu-item index="/home/7-2">取号设置</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="8">
                            <template slot="title"><i class="el-icon-menu"></i>餐桌预定</template>
                            <el-menu-item-group>
                            <el-menu-item index="/home/8-1">预定列表</el-menu-item>
                            <el-menu-item index="/home/8-2">预定设置</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="9">
                            <template slot="title"><i class="el-icon-menu"></i>员工管理</template>
                            <el-menu-item-group>
                            <el-menu-item index="/home/9-1">员工管理</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="10">
                            <template slot="title"><i class="el-icon-menu"></i>账号设置</template>
                            <el-menu-item-group>
                            <el-menu-item index="/home/setAccount">账号设置</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                    </el-menu>
                </el-aside>
                <!-- 路由视图的展示区 -->
                <el-main>
                    <router-view />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
export default {
    methods: {
        handleClick() {
            this.$router.push('/home/setAccount')
        },
        quit() {
            localStorage.setItem('_token','')
            this.$router.push('/')
        }
    }
}
</script>
<style lang="scss" scoped>
    .el-menu {
        background-color: rgba($color: #000, $alpha: .3)!important;
    }
    .logo {
        float: left; 
        height: 60px; 
        display: flex;
        align-items: center;
        font-size: 16px;
    }
    .logo img:nth-of-type(1) {
        width: 50px;
        height: 50px;
        border: 1px solid #ccc;
        border-radius: 50%;
        margin-right: 10px;
    }
    .logo img:nth-of-type(2) {
        width: 20px;
        height: 20px;
        margin-left: 10px;
        cursor: pointer;
    }
</style>