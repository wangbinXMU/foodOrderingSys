<template>
    <h1>Login</h1>
</template>
<template>
    <div class="row mt-3">
        <div class="col-md-12 col-lg-12">
            <div class="card">
                <div class="card-body">
                    <img  class='mx-auto d-block' src="../assets/icon.png" alt="#">
                    <form @submit.prevent = 'onSubmit()'>
                        <div class='form-group'>
                            <label for="email">邮箱</label>
                            <input 
                            class='form-control'
                            type="email"
                            v-model='email'
                            >
                        </div>
                          <div class='form-group'>
                            <label for="email">密码</label>
                            <input 
                            class='form-control'
                            type="password"
                            v-model='password'
                            >
                        </div>
                        <button class='btn btn-block btn-success'>登录</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            email:'',
            password:'',
        }
    },
     // 组件内守卫(注意：该项会在data渲染前就执行，故直接拿data中的数据为undefined,用回调处理)
    // 进入组件前执行
    // beforeRouteEnter:(to,from,next)=>{
    //     next( vm=>{
    //         alert('hello '+vm.name);
    //     });
    // }
    // beforeRouteLeave(to,from,next){
    //     if(confirm('确认离开吗？')===true){
    //         next();
    //     } else {
    //         next(false);
    //     }
    // }
    //在进入login组件对应的路由前将用户信息清空
    beforeRouteEnter(to,from,next){
        // 直接this.$store.dispatch('setUser',null)
        // 不识别this,因为组件实例尚未初始化
        next(vm=>vm.$store.dispatch('setUser',null));
    },
    methods:{
        onSubmit(){
            axios.get('/userInfo.json')
            .then(res=>{
                const data = res.data;
                const users = [];
                for(let key in data){
                    const user = data[key];
                    users.push(user);
                }
                console.log(users);
                // 查找并返回查找结果
                let result = users.filter( (user)=>{
                    // 看输入的账号密码是否已在数据库，有说明是已注册过的
                    return user.email === this.email && user.password===this.password;
                } );
            //判断result长度
            if(result!==null && result.length>0){
                this.$store.dispatch('setUser',result[0].email)
                this.$router.push({name:'homeLink'})
            } else {
                alert('账号或密码错误');
                this.$store.dispatch('setUser',null)
            }

            })
        }
    }
}
</script>

