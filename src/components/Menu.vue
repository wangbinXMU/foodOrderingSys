<template>
    <div class='row'>
        <!-- 菜单 -->
        <div class="col-sm-12 col-md-8">
            <table class="table">
                <thead class="thead-default">
                    <tr>
                        <th>尺寸</th>
                        <th>价格</th>
                        <th>加入</th>
                    </tr>
                </thead>
                <tbody v-for='(item,index) in getMenuItems' :key='index'>
                    <tr>
                        <td><strong>{{ item.name }}</strong></td>
                    </tr>
                     <tr v-for='(option,index) in item.options' :key='index'>
                        <td>{{ option.size }}</td>
                        <td>￥{{ option.price }}</td>
                        <td><button
                        @click='addToBasket(item,option)'
                        class='btn btn-sm btn-outline-success'>+</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- 购物车 -->
        <div class="col-sm-12 col-md-4">
            <div v-if='baskets.length>0'>
                <table class='table'>
                    <thead class='thead-default'>
                        <tr>
                            <th>数量</th>
                            <th>品种</th>
                            <th>数量</th>
                        </tr>
                    </thead>
                    <tbody v-for='(item,index) in baskets' :key='index'>
                        <tr>
                            <td>
                                <button @click='decreaseQuantity(item)' class="btn btn-sm">-</button>
                                <span>{{ item.quantity }}</span>
                                <button @click='increaseQuantity(item)' class="btn btn-sm">+</button>
                            </td>
                            <td>{{ item.name }}{{  item.size }}</td>
                            <td>￥{{ item.price }}</td>
                        </tr>
                    </tbody>
                </table>
                <p><strong>总价：{{ total + 'RMB' }}</strong></p>
                <button class="btn btn-success btn-block">提交</button>
            </div>
            <div v-else>
                {{ basketText }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      baskets: [],
      basketText: "购物车没有任何商品~"
    };
  },
  computed: {
    getMenuItems(){
      // 在Vuex中拿数据
    //   return this.$store.state.menuItems;
    return this.$store.getters.newMenuItems;
    },
    total(){
      let totalCost = 0;
      for (let index in this.baskets) {
        let individualItem = this.baskets[index];
        totalCost += individualItem.quantity * individualItem.price;
      }
      return totalCost;
    }
  },
  created() {
    this.fetchData();
    console.log(this.$store.state.menuItems);
  },
  methods: {
    fetchData() {
      fetch("https://wd1347713459zgtrvt.wilddogio.com/menuInfo.json")
        .then(res => {
          // res为可读的数据流
          return res.json();
        })
        .then(data => {
          this.$store.commit("setMenuItems", data);
        });
    },
    addToBasket(item, option) {
      //   购物车
      let basket = {
        name: item.name,
        size: option.size,
        price: option.price,
        quantity: 1
      };
      if (this.baskets.length > 0) {
        //查找已经添加的种类是否能在原有的购物车菜单中找的到，如果能找到就只将数量++,否则就添加到菜单
        let result = this.baskets.filter(basket => {
          return basket.name === item.name && basket.price === option.price;
        });
        if (result !== null && result.length > 0) {
          result[0].quantity++;
        } else {
          this.baskets.push(basket);
        }
      } else {
        this.baskets.push(basket);
      }
    },
    decreaseQuantity(item) {
      item.quantity--;
      if (item.quantity <= 0) {
        this.removeFromBasket(item);
      }
    },
    increaseQuantity(item) {
      item.quantity++;
    },
    removeFromBasket(item) {
      this.baskets.splice(this.baskets.indexOf(item), 1);
    }
  }
};
</script>

