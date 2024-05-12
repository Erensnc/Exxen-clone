<template>
    <q-page class="q-pa-lg">
        <h5 class="q-mt-none">Kayıt Ol</h5>
        <q-input label="Ad Soyad" v-model="id_" />
        <q-input label="Kullanıcı Adı" v-model="username" />
        <q-input label="E-Posta Adresi" v-model="mail" />
        <q-input label="Telefon Numarası" v-model="phone"/>
        <q-input type="password" label="Şifre" v-model="password_"/>
        <q-input type="password" label="Şifre (Tekrar)" v-model="password" style="margin-bottom: 20px" />
        <q-btn>Kayıt Ol</q-btn>
    </q-page>
</template>

<script>
        export default{
            data(){
                return{
                    id_: '',
                    username: '',
                    password_: '',
                    password: '',
                    phone: '',
                    mail: ''
                }
            }
        }
</script>