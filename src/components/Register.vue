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
                          <div class='form-group'>
                            <label for="confirm-password">确认密码</label>
                            <input 
                            class='form-control'
                            type="password"
                            v-model='confirmPassword'
                            >
                        </div>
                        <button class='btn btn-block btn-success'>注册</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return{
            email:'',
            password:'',
            confirmPassword:''
        }
    },
    methods:{
        onSubmit(){
           if(this.password === this.confirmPassword){
            // let产生了块级作用域，在if外部访问不到formData
               let formData = {
                   email:this.email,
                   password:this.password,
                   confirmpassword:this.confirmPassword
               }
                axios.post('/userInfo.json',formData).then( (req,res)=>{
                // 注册成功直接跳转到登录页面
                this.$router.push({name:'loginLink'});
            } )
           } else {
               alert('两次密码不一致')
           }       
        }
    }
}
</script>

