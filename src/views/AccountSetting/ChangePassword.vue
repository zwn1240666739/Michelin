<template>
    <div class="outside">
        <div>
            <span class="star short">*</span>
            <label>旧密码：</label><input class="propmt" type="text" placeholder="请输入">
        </div>
        <div>
            <span class="star short">*</span>
            <label>新密码：</label><input class="propmt" type="text" placeholder="请输入">
        </div>
        <div>
            <span class="star">*</span>
            <label>确认新密码：</label><input class="propmt" type="text" placeholder="请输入">
        </div>
        <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit" id="submit">保存</van-button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .star {
        color: #f04844;
        margin-right: 5px;
    }
    .outside {
        padding: 50px 0 50px 0;
        background-color: rgba(227, 235, 233,.4)
    }
    label {
        color: #666666;
        text-rendering: optimizelegibility;
        font-feature-settings: "kern";
        font-kerning: normal;
        overflow-wrap: break-word;
        font-family: 微软雅黑;
        font-weight: 400;
        font-style: normal;
        font-size: 12px;
        text-align: right;
        line-height: 40px;
        margin-right: 10px;
    }
    .propmt {
        width: 660px;
        height: 40px;
        border: 1px solid rgb(228, 228, 228);
        padding: 0 10px;
        font-size: 15px;
        border-radius: 3px;
    }
    .introduce {
        height: 89px;
    }
    .address {
        width: 210px;
        height: 40px;
        // cursor: pointer;
    }
    .introduceLabel {
        margin-left: 11px;
    }
    .address + .address {
        margin-left: 15px;
    }
    input {
        box-sizing: border-box;
        margin-bottom: 15px;
    }
    .addressLable2 {
        margin-left: 82px;
    }
    .short {
        margin-left: 24px;
    }
    #submit {
        border-width: 0px;
        width: 322px;
        height: 39px;
        background: inherit;
        background-color: rgba(26, 188, 156, 1);
        border: none;
        border-radius: 3px;
        -moz-box-shadow: none;
        -webkit-box-shadow: none;
        box-shadow: none;
        font-family: '微软雅黑';
        font-weight: 400;
        font-style: normal;
        color: #FFFFFF;
        margin: 50px 0 0 230px;
    }
</style>