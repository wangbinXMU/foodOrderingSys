<template>
    <div class="row">
        <div class="col-sm-12 col-md-8">
            <!-- new pizza -->
            <app-new-pizza></app-new-pizza>   
        </div>
            <div class="col-sm-12 col-md-4">
                <!-- 品种展示 -->
                <h3 class='text-muted my-5'>菜单</h3>
                <table class='table'>
                    <thead class='table table-default'>
                        <tr>
                            <th>品种</th>
                            <th>删除</th>
                        </tr>
                    </thead>
                    <tbody v-for="(item,index) in getMenuItems" :key='index'>
                        <tr>
                            <td>{{ item.name }}</td>
                            <td>
                                <button @click='deleteData(item)' class="btn btn-outline-danger btn-sm">X</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
</template>

<script>
import NewPizza from "./newPizza.vue";
export default {
  data() {
    return {
    //   getMenuItems: []
    };
  },
  computed: {
    getMenuItems:{
      // 在Vuex中拿数据
      get(){
        // return this.$store.state.menuItems;
        // 或者
        return this.$store.getters.newMenuItems;
      },
      set(){

      }
 
    }
  },
  components: {
    "app-new-pizza": NewPizza
  },
  created() {
    //    获取新增的那些pizza信息
    fetch("https://wd1347713459zgtrvt.wilddogio.com/menuInfo.json")
      .then(res => {
        // res为数据流
        return res.json();
      })
      .then(data => {
        let menuArray = [];
        for (let key in data) {
          //将外层的key内移成为唯一标识
          data[key].id = key;
          menuArray.push(data[key]);
        //   this.getMenuItems = menuArray;
        console.log(menuArray)
        this.$store.commit('setMenuItems',menuArray);
        }
      });
  },
  methods: {
    // 删除菜单数据
    deleteData(item) {
      fetch(
        `https://wd1347713459zgtrvt.wilddogio.com/menuInfo/${item.id}/.json`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
        .then(res => res.json())
        // .then(data => this.$router.push({ name: "menuLink" }))
        .then(data=>{
          
            this.$store.commit('removeMenuItems',item);
        })
        .then(err => console.log(err));
    }
  }
};
</script>

