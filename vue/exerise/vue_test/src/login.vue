<template lang="html">
     <div class="login">
        <cmpHead/>
        <div>
            login 内容内容
        </div>
         <cmpFooter/>
    </div>
</template>
<script>
    import cmpHead from '@/components/head'
    import cmpFooter from '@/components/footer'
    export default {
        components:{
            cmpHead,
            cmpFooter
        }
    }
</script>

<style lang="css">
    *{
        margin:0 ;padding:0;list-style: none;
    }
    .login{
        width:300px;height:auto;border:1px solid  red;
        margin:0 auto;
    }
</style>