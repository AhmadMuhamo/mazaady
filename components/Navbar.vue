<template>
        <div id="mz-navbar">
        <div class="nav">
          <img src="~/static/logo.png" class="mr-5" alt="Mazaady" />
          <ul>
            <li class="active">
              <nuxt-link to="#">Home</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#">Blog</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#">Gifts</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="nav-actions">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z"
              stroke="#333333"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              opacity="0.4"
              d="M18.9299 20.6898C19.4599 22.2898 20.6699 22.4498 21.5999 21.0498C22.4499 19.7698 21.8899 18.7198 20.3499 18.7198C19.2099 18.7098 18.5699 19.5998 18.9299 20.6898Z"
              stroke="#333333"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <v-divider vertical class="mx-5" color="#FFEAD2" />
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.02 2.91C8.71 2.91 6.02 5.6 6.02 8.91V11.8C6.02 12.41 5.76 13.34 5.45 13.86L4.3 15.77C3.59 16.95 4.08 18.26 5.38 18.7C9.69 20.14 14.34 20.14 18.65 18.7C19.86 18.3 20.39 16.87 19.73 15.77L18.58 13.86C18.28 13.34 18.02 12.41 18.02 11.8V8.91C18.02 5.61 15.32 2.91 12.02 2.91Z"
              stroke="#333333"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
            <path
              d="M13.87 3.2C13.56 3.11 13.24 3.04 12.91 3C11.95 2.88 11.03 2.95 10.17 3.2C10.46 2.46 11.18 1.94 12.02 1.94C12.86 1.94 13.58 2.46 13.87 3.2Z"
              stroke="#333333"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              opacity="0.4"
              d="M15.02 19.06C15.02 20.71 13.67 22.06 12.02 22.06C11.2 22.06 10.44 21.72 9.9 21.18C9.36 20.64 9.02 19.88 9.02 19.06"
              stroke="#333333"
              stroke-width="1.5"
              stroke-miterlimit="10"
            />
          </svg>
          <v-divider vertical class="mx-5" color="#FFEAD2" />
          <img src="~/static/Ellipse1.png" alt="Profile" />
          <v-btn class="mz-btn mx-5" elevation="0">
            <svg class="mr-1" width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.5 16.5C13.625 16.5 17 13.125 17 9C17 4.875 13.625 1.5 9.5 1.5C5.375 1.5 2 4.875 2 9C2 13.125 5.375 16.5 9.5 16.5Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path d="M6.5 9H12.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M9.5 12V6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Add New Product
          </v-btn>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="#333333"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.99998 3H8.99998C7.04998 8.84 7.04998 15.16 8.99998 21H7.99998"
              stroke="#333333"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15 3C16.95 8.84 16.95 15.16 15 21"
              stroke="#333333"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16"
              stroke="#333333"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3 9.00001C8.84 7.05001 15.16 7.05001 21 9.00001"
              stroke="#333333"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <v-divider vertical class="mx-3" color="#E0E0E0" />
          <span id="language-selection">EN</span>
        </div>
      </div>
</template>
<script>
export default {
  name: 'Navbar'
}
</script>
<style lang="scss">
#mz-navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  width: 100%;
  background-color: #fff;
  div {
    display: flex;
    align-items: center;
    &.nav {
      ul {
        list-style: none;
        display: flex;
        align-items: center;
        li {
          font-size: 18px;
          margin-right: 30px;
          padding: 25px 0;
          position: relative;
          min-width: 50px;
          text-align: center;
          a {
            font-weight: 400;
            text-decoration: none;
            color: #828282;
            transition: all 0.2s ease-in;
            &:after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 0;
              border: 3px solid transparent;
              width: 100%;
              display: block;
              border-top-left-radius: 5px;
              border-top-right-radius: 5px;
            }
          }
          &:hover,
          &.active {
            a {
              font-weight: 700;
              color: $primary-color;
              &:after {
                border-color: $primary-color;
              }
            }
          }
        }
      }
    }
    &.nav-actions {
      svg {
        transform: scale(1);
        transition: transform 0.2s ease-in-out;
        &:hover {
          cursor: pointer;
          transform: scale(1.1);
        }
      }
      #language-selection {
        font-size: 18px;
        font-weight: 700;
      }
    }
  }
}
</style>
