<template>
  <div  class="style2 box">
    <span class="c-navy" id="date">{{ this.date }}</span
    >&nbsp;&nbsp;
    <span id="clock" class="c-navy">{{ time }}</span>
  </div>
</template>

<script>
export default {
  name: 'Clock',
  data() {
    return {
      date: '',
      time: '',
    };
  },
  methods: {
    startTime() {
      const today = new Date();
      const hh = today.getHours();
      let mm = today.getMinutes();
      let ss = today.getSeconds();
      mm = this.checkTime(mm);
      ss = this.checkTime(ss);

      const month = new Array(12);
      month[0] = '01';
      month[1] = '02';
      month[2] = '03';
      month[3] = '04';
      month[4] = '05';
      month[5] = '06';
      month[6] = '07';
      month[7] = '08';
      month[8] = '09';
      month[9] = '10';
      month[10] = '11';
      month[11] = '12';

      const day = new Array(7);
      day[0] = '星期日';
      day[1] = '星期一';
      day[2] = '星期二';
      day[3] = '星期三';
      day[4] = '星期四';
      day[5] = '星期五';
      day[6] = '星期六';

      this.date = `${today.getFullYear()} /${
        month[today.getMonth()]
      }/${today.getDate()}    ${day[today.getDay()]}`;
      this.time = `${hh} :  ${mm} : ${ss}`;
      setTimeout(this.startTime, 500);
    },
    checkTime(i) {
      if (i < 10) {
        // eslint-disable-next-line no-param-reassign
        i = `0${i}`;
      }
      return i;
    },
  },
  mounted() {
    this.startTime();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.box{
    font-size: 20pt;
}
.c-navy{
    color: navy;
}
.style2 {
    padding: 2px;
    margin: 2px;
    font-family: "微軟正黑體 Light";
    text-decoration: none;
    font-weight: bold;
    text-align: center;
}

</style>
