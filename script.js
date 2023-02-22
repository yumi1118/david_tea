
const vm = Vue.createApp({
  data() {
    return {
      itemList: [
        {
          id: '1',
          itemName: '大禹嶺茶',
          imgUrl: 'images/d04.JPG',
          price: '3200',
          count: '1'
        },
        {
          id: '2',
          itemName: '梨山茶',
          imgUrl: 'images/d05.JPG',
          price: '2800',
          count: '1'
        },
        {
          id: '3',
          itemName: '阿里山茶',
          imgUrl: 'images/d06.JPG',
          price: '2200',
          count: '1'
        },
        {
          id: '4',
          itemName: '蜜香紅茶',
          imgUrl: 'images/d07.JPG',
          price: '1800',
          count: '1'
        },
        {
          id: '5',
          itemName: '凍頂烏龍茶',
          imgUrl: 'images/d08.JPG',
          price: '1200',
          count: '1'
        },
      ]
    }
  },
  methods: {
    itemDel(index, count) {
      this.itemList.splice(index,count);
    }
  }

}).mount('#app');