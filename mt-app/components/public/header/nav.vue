<template>
  <div class="m-nav">
    <ul class="nav">
      <li class="list">
        <nuxt-link to="/my">我的美团</nuxt-link>
        <dl>
          <dd>
            <nuxt-link to="/order">我的订单</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/order">我的收藏</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/order">抵用券</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/order">账户设置</nuxt-link>
          </dd>
        </dl>
      </li>
      <li>
        <nuxt-link to="/order">手机APP</nuxt-link>
      </li>
      <li class="list bd">
        <nuxt-link to="/center">商家中心</nuxt-link>
        <dl>
          <dd>
            <nuxt-link to="/userCenter">登录商家中心</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/coop">我想合作</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/wap">免费手机开店</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/kaipiao">商家申请开票</nuxt-link>
          </dd>
        </dl>
      </li>
      <li class="list site">
        <nuxt-link to="/site">网站导航</nuxt-link>
        <div class="subContainer">
          <dl class="hotel">
            <dt>酒店旅游</dt>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
          </dl>
          <dl class="food">
            <dt>吃美食</dt>
            <dd>烤鱼</dd>
            <dd>特色小吃</dd>
            <dd>烧烤</dd>
            <dd>烧烤</dd>
            <dd>烧烤</dd>
            <dd>烧烤</dd>
          </dl>
          <dl class="movie">
            <dt>看电影</dt>
            <dd>热映电影</dd>
            <dd>热映电影</dd>
            <dd>热映电影</dd>
            <dd>热映电影</dd>
            <dd>热映电影</dd>
            <dd>热映电影</dd>
            <dd>热映电影</dd>
          </dl>
          <dl class="app">
            <dt>手机应用</dt>
            <dd>
              <a href="#">
                <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png" title="美团app" alt="美团app">
              </a>
            </dd>
            <dd>
              <a href="#">
                <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png" title="美团app" alt="美团app">
              </a>
            </dd>
            <dd>
              <a href="#">
                <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png" title="美团app" alt="美团app">
              </a>
            </dd>
            <dd>
              <a href="#">
                <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png" title="美团app" alt="美团app">
              </a>
            </dd>
            <dd>
              <a href="#">
                <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png" title="美团app" alt="美团app">
              </a>
            </dd>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang='scss' scoped>
.m-nav {
  float: right;
  margin: 0;
  padding: 0;
  z-index: 999;
  .nav {
    list-style: none;
    float: right;
    height: 40px;
    > li {
      float: left;
      width: 78px;
      box-sizing: border-box;
      text-align: center;
      cursor: pointer;

      a {
        color: #999;

        &:hover {
          color: #31bbac;
        }
      }

      &.list:hover {
        border: 1px solid #e5e5e5;
        border-top: none;

        > dl {
          display: block;
        }

        .subContainer {
          display: flex;
        }
      }

      dl {
        background: #fff;
        display: none;
        z-index: 999;

        dd {
          line-height: 35px;

          &:hover {
            color: #31bbac;
          }
        }
      }

      &.bd {
        dl {
          width: 140%;
          position: relative;
          border-top: 1px solid #e5e5e5;
          left: -31px;
          top: -1px;
          border-bottom: 1px solid #e5e5e5;
          border-left: 1px solid #e5e5e5;
          position: relative;

          &:before {
            content: " ";
            display: block;
            background: #fff;
            height: 4px;
            width: 76px;
            position: absolute;
            top: -1px;
            right: 0;
          }
        }

        &:hover {
          border-bottom: none;
        }
      }

      &.site {
        &:hover {
          border-bottom: none;
        }
      }

      .subContainer {
        box-sizing: border-box;
        background: #fff;
        padding: 30px 36px 36px 47px;
        width: 1250px;
        position: relative;
        left: -1175px;
        z-index: 999;
        border: 1px solid #e5e5e5;
        display: none;
        text-align: left;

        &:before {
          content: " ";
          display: block;
          width: 76px;
          height: 4px;
          background: #fff;
          position: absolute;
          top: -1px;
          right: 0;
        }

        > dl {
          box-sizing: border-box;
          text-align: left;
          display: inline-block !important;
          margin-right: 47px;

          dt {
            margin-bottom: 26px;
            font-size: 14px;
            color: #31bbac;
            text-align: center;
          }

          dd {
            width: 78px;
            display: inline-block;
            text-align: center;
          }

          &.hotel {
            width: 234px;
          }

          &.food {
            width: 156px;
          }

          &.movie {
            width: 90px;
            dd {
              width: 100%;
            }
          }

          &.app {
            width: 380px;
            flex: 1;
            text-align: center;
            dd {
              width: 60px;
              height: 73px;
              line-height: 73px;
              text-align: center;
              margin: 0 8px;
              img {
                width: 60px;
                height: 60px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
