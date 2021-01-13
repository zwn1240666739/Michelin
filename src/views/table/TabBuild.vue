<template>
    <el-container>
        <el-header height="40px">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/home/3-1' }">桌台设置</el-breadcrumb-item>
                <el-breadcrumb-item>新建桌台</el-breadcrumb-item>
            </el-breadcrumb>
        </el-header>
        <el-main>
            <div class="tabBuild">
                <span>*桌号：</span>
                <el-input v-model="input" placeholder="请输入内容" class="tabNumIpt"></el-input>
            </div>
            <div class="tabBuild">
                <span>*桌型：</span>
                <el-select v-model="value1" placeholder="请选择" class="tabNumIpt">
                    <el-option
                    v-for="item in options1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="tabBuild">
                <span>*桌位：</span>
                <el-select v-model="value2" placeholder="请选择" class="tabNumIpt">
                    <el-option
                    v-for="item in options2"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <el-button 
            type="primary" 
            style="width: 150px; margin: 20px 0 0 20px;" 
            size="small"
            @click.native="submit"
            >确认</el-button>
        </el-main>
    </el-container>
</template>

<script>
export default {
    data() {
        return {
            input: '',
            options1: [],
            value1: '',
            value2: '',
            options2: []
        }
    },
    created() {
        this.options2 = this.$store.state.Table.tablePosition
        this.options1 = this.$store.state.Table.tableType
        // console.log(this.options2)
    },
    methods: {
        submit() {
            let Id = this.$store.state.Table.Id
            // console.log(this.$store)
            let data = {
                Id,
                TabId: this.input,
                TabPosition: this.value2,
                TabType: this.value1,
                TabStatus: '空闲'
            }
            this.input = ''
            this.value1 = ''
            this.value2 = ''
            this.$store.commit('Table/setData', data)
            
        }
    }
}
</script>

<style lang="scss" scoped>
    .el-header {
        background-color: rgba(233, 239, 245, 1);
        display: flex;
        align-items: center;
    }
    .tabNumIpt {
        width: 500px;
    }
    .tabBuild {
        display: flex; 
        align-items: center; 
        font-size: 12px;
        padding-left: 30px;
        margin-bottom: 10px; 
    }
</style>