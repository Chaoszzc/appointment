<template>
  <div class="home">
    <navtitle :title="title" :showLeft="showLeft"></navtitle>
    <div class="headArea">
      <img src="../../assets/images/home.jpg" />
    </div>
    <div class="bodyArea">
      <div class="userLine">
        <div class="userimg">
          <img :src="imgUrl" style="border-radius: 100%; margin-left: 20px" />
        </div>
        <div class="username">
          <label style="font-weight: bold">{{ userName }}</label>
        </div>
        <div class="myCard" @click="goMyCard">
          <van-button type="primary" size="small">我的预约码</van-button>
        </div>
      </div>
      <div class="item-box">
        <div class="itemView">
          <div class="item-title">
            <van-icon name="hot" color="#1989fa" size="30px" />
            <label class="btnText">预约上牌</label>
          </div>
          <div class="line"></div>
          <div class="item-menu">
            <div class="single-box" @click="goAppointment" style="max-width: 50%">
              <div class="boxArea">
                <!-- <van-icon
                  name="add"
                  size="30px"
                  style="display: flex; align-items: center; margin: 0 5px 0 10px"
                /> -->
                <van-icon
                  name="todo-list"
                  size="30px"
                  style="display: flex; align-items: center; margin: 0 5px 0 10px"
                />
                <div class="box-desc" style="display: flex; flex-direction: column">
                  <div class="label">我要预约</div>
                  <div class="desc">业务预约排队</div>
                </div>
              </div>
            </div>
            <div class="single-box" @click="goBookingInstructions" style="max-width: 50%">
              <div class="boxArea">
                <van-icon
                  name="label"
                  size="30px"
                  style="display: flex; align-items: center; margin: 0 5px 0 10px"
                />
                <div class="box-desc" style="display: flex; flex-direction: column">
                  <div class="label">预约须知</div>
                  <div class="desc">预约排队须知</div>
                </div>
              </div>
            </div>
          </div>
          <div class="item-menu">
            <div class="single-box" @click="goAppointmentList" style="max-width: 50%">
              <div class="boxArea">
                <van-icon
                  name="manager"
                  size="30px"
                  style="display: flex; align-items: center; margin: 0 5px 0 10px"
                />
                <div class="box-desc" style="display: flex; flex-direction: column">
                  <div class="label">预约查询</div>
                  <div class="desc">预约记录查询</div>
                </div>
              </div>
            </div>
            <div class="single-box" @click="goBranch" style="max-width: 50%">
              <div class="boxArea">
                <van-icon
                  name="map-marked"
                  size="30px"
                  style="display: flex; align-items: center; margin: 0 5px 0 10px"
                />
                <div class="box-desc" style="display: flex; flex-direction: column">
                  <div class="label">网点查询</div>
                  <div class="desc">大厅网点信息</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Dialog, Toast } from "vant";
import Navtitle from "../../components/NavTitle.vue";
import Common from "../Common.vue";
import wx from "weixin-js-sdk";
export default {
  name: "Home",
  components: {
    Navtitle,
  },
  data() {
    return {
      checked: false,
      userName: "",
      imgUrl: "",
      title: "鄂州交警预约排队系统",
      showLeft: false,

      //维护标记
      whFlag: false,
    };
  },
  mounted() {
    // const url = Common.userInfo.headimgurl;
    // console.log(Common.userInfo.headimgurl);
    // this.imgUrl = url;
    // this.userName = Common.userInfo.nickname;
    // if (!Common.openId) {
    //   Dialog.alert({
    //     message: "使用鄂州电动车预约上牌系统需用户授权",
    //     confirmButtonText: "获取授权",
    //   }).then(() => {
    //     console.log("授权");
    //     this.$router.replace("/");
    //   });
    // }
    //从缓存中取whFlag
    if (
      sessionStorage.getItem("app_whFlag") == null ||
      sessionStorage.getItem("app_whFlag") == ""
    ) {
      console.log("获取app_whFlag失败");
    } else {
      let flagZT = sessionStorage.getItem("app_whFlag");
      if (flagZT == "0") {
        this.whFlag = false;
      } else if (flagZT == "1") {
        this.whFlag = true;
      }
      console.log("this.whFlag", this.whFlag);
    }
    //监听返回事件
    if (window.history && window.history.pushState) {
      console.log("监听返回");
      history.pushState(null, null, document.URL);
      window.addEventListener("popstate", this.goBack, false);
    }
  },
  //页面销毁时，取消监听。否则其他vue路由页面也会被监听
  destroyed() {
    console.log("取消监听");
    window.removeEventListener("popstate", this.goBack, false);
  },
  methods: {
    goAppointment() {
      if (this.whFlag) {
        if (
          Common.openId == "ouWZzs8IdB4vcpvCSMzVQOl_9Ebg" ||
          Common.openId == "ouWZzs0A6zfhXFlwcuRrto9tHKZM" ||
          Common.openId == "ouWZzs6gB8XRWJTcKdNd7BBzU8Uc" ||
          Common.openId == "ouWZzs-SlHupuXItHt1aqwn1f9f4"
        ) {
          this.$router.push({ path: "/notice" });
        } else {
          Toast("系统维护中,请稍后再试");
        }
      } else {
        this.$router.push({ path: "/notice" });
      }
    },

    //跳转我的行驶证
    goMyCard() {
      this.$router.push("/myCard");
    },

    goSignIn() {
      this.$router.push("/signIn");
    },

    goAppointmentList() {
      this.$router.push("/appointmentList");
    },
    goBookingInstructions() {
      // 预约须知BookingInstructions
      this.$router.push("/BookingInstructions");
    },
    goExtend() {
      this.$router.push("/extend");
    },

    //网点信息
    goBranch() {
      this.$router.push("/branch");
    },

    showWait() {
      if (
        Common.openId == "ouWZzs8IdB4vcpvCSMzVQOl_9Ebg" ||
        Common.openId == "ouWZzs0A6zfhXFlwcuRrto9tHKZM" ||
        Common.openId == "ouWZzs6gB8XRWJTcKdNd7BBzU8Uc" ||
        Common.openId == "ouWZzs3l_tqurfo14ljdYdzgpIk4" ||
        Common.openId == "ouWZzs1NtY1_ejUcr3YCFLICIVxk" ||
        Common.openId == "ouWZzs-SlHupuXItHt1aqwn1f9f4"
      ) {
        this.$router.push({ path: "/notice" });
      } else {
        Toast("鄂州交警预约排队系统即将开放,敬请期待！");
      }
    },

    /**
     * 关闭H5程序
     */
    goBack() {
      console.log("调用关闭方法");
      wx.closeWindow();
      wx.miniProgram.navigateBack(); //返回
    },
  },
};
</script>

<style scoped>
.home {
  width: 100%;
}
.headArea {
  width: 100%;
  height: 250px;
  display: flex;
}
.bodyArea {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.userLine {
  display: flex;
  width: 90%;
  height: 40px;
  margin: 5px 5%;
  background-color: bisque;
  position: relative;
  align-items: center;
}
.userimg {
  display: flex;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
}
.username {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-left: 20px;
}
.subscribeLien {
  display: flex;
  height: 100%;
  flex-direction: column;
}
.subsTitle {
  display: flex;
  height: 18px;
}
.subsSwitch {
  display: flex;
  width: 32px;
}

.item-box {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.itemView {
  width: 90%;
  height: auto;
  margin: 20px 10px 10px 5px;
  background-color: white;
  border-radius: 5%;
}

.item-title {
  display: flex;
  height: 35px;
  width: 100%;
}

.btnText {
  font-size: 15px;
  margin: 0 10px;
  display: flex;
  align-items: center;
}

.line {
  width: 90%;
  margin: 0 5%;
  border: 1px dashed rgb(224, 222, 222);
}

.item-menu {
  width: 100%;
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
}

.single-box {
  display: flex;
  flex-wrap: nowrap;
  width: 50%;
  height: 65px;
  flex-grow: 1;
}

.boxArea {
  display: flex;
  background-color: #bde3ec;
  width: 94%;
  height: 59px;
  margin: 3px 3%;
  border-radius: 2%;
}

.box-desc {
  /* width: 60%;
  padding: 27rpx 0; */
  padding: 13px 0;
  margin-right: 1.5em;
}

.label {
  display: flex;
  font-size: 0.9em;
}

.desc {
  display: flex;
  color: gray;
  font-size: 14px;
  white-space: nowrap;
  font-size: 0.6em;
}

.myCard {
  display: flex;
  align-items: center;
  position: absolute;
  float: right;
  right: 5px;
  height: 100%;
}

img {
  display: flex;
  width: 100%;
  height: 100%;
}
</style>
