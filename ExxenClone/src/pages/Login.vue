<template>
    <q-page class="q-pa-lg">
        <h5 class="q-mt-none">Giriş Yap</h5>
        <q-input label="Kullanıcı Adı" v-model="username" />
        <q-input type="password" v-model="password" label="Şifre" style="margin-bottom: 20px" />
        <q-btn>Giriş Yap</q-btn>
    </q-page>
</template>
<script>
        export default{
            data(){
                return{
                    username: '',
                    password: ''
                }
            }
        }
</script>