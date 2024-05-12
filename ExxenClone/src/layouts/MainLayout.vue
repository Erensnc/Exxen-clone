<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>
      <div class="q-px-lg q-pt-xl q-mb-md" style="text-align: center;">
        <img src="https://wimage.exxen.com/img/landing/logo-web.svg" style="width: 200px">
        <div class="text-small" style="color: #000; text-align: right;"></div>
      </div>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="250"
      :breakpoint="600"
    >
      <q-scroll-area style="height: calc(100%); margin-top: 0; border-right: 1px solid #ddd">
        <q-list padding>
          <q-item to="/" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>
            <q-item-section>
              Ana Sayfa
            </q-item-section>
          </q-item>

          <q-item to="/watchlist" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>
            <q-item-section>
              İzleme Listesi
            </q-item-section>
          </q-item>

          <q-item to="/login" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="login" />
            </q-item-section>
            <q-item-section>
              Üye Girişi
            </q-item-section>
          </q-item>

          <q-item to="/register" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="person" />
            </q-item-section>
            <q-item-section>
              Kayıt Ol
            </q-item-section>
          </q-item>

          <q-item to="/help" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="help" />
            </q-item-section>
            <q-item-section>
              Yardım
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'MainLayout',

  setup() {
    const leftDrawerOpen = ref(false)
    const router = useRouter()

    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }

    return {
      leftDrawerOpen,
      toggleLeftDrawer,
    }
  },
})
</script>
