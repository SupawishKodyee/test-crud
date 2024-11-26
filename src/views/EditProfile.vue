<template>
  <div class="m-10 border-2 p-10 rounded-md drop-shadow-md h-full">
    <div class="flex">
      <h1 class="content-center text-2xl font-bold my-3">แก้ไขข้อมูล</h1>
      <span class="material-symbols-outlined content-center">edit</span>
    </div>
    <div class="border-2 border-gray-400 rounded-md p-3 bg-gray-100">
      <div class="flex my-4">
        <div class="flex mx-auto">
          <h1 class="content-center">ชื่อ</h1>
          <input v-model="firstname" class="mx-3 border-2 p-1 drop-shadow-md rounded-lg" type="text" />
        </div>
        <div class="flex mx-auto">
          <h1 class="content-center">นามสกุล</h1>
          <input v-model="lastname" class="mx-3 border-2 p-1 drop-shadow-md rounded-lg" type="text" />
        </div>
      </div>
      <div class="flex my-4">
        <div class="flex mx-auto px-5">
          <h1 class="content-center">เบอร์โทรศัพท์</h1>
          <input v-model="phonenum" class="mx-3 border-2 p-1 drop-shadow-md rounded-lg" type="text" />
        </div>
        <div class="flex mx-auto">
          <h1 class="content-center">ตำแหน่ง</h1>
          <input v-model="role" class="mx-3 border-2 p-1 drop-shadow-md rounded-lg" type="text" />
        </div>
      </div>
    </div>
    <div class="flex mt-10 justify-end">
      <button class="py-2 px-5 border-2 rounded-lg border-gray-300" @click="goBack()">กลับ</button>
      <button
        class="ml-3 py-2 px-5 border-2 rounded-lg bg-green-600 text-white"
        @click="saveData()"
      >บันทึก</button>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import { useRoute } from "vue2-helpers/vue-router";
import {userUseStore} from '@/store/user'
export default {
  name: "EditProfile",
  data(){
    return{
      firstname:'',
      lastname:'',
      phonenum:'',
      role:'',
      userData:'',
      useStore:'',
      index:''
    }
  },
  created(){
    this.useStore = userUseStore();
    const route = useRoute()
    this.userData = this.useStore.users[route.params.id]
    this.index = route.params.id
    this.firstname = this.userData.firstname
    this.lastname = this.userData.lastname
    this.phonenum = this.userData.phonenum
    this.firstname = this.userData.firstname
    this.role = this.userData.role
  },
  methods: {
    goBack() {
      router.push("/");
    },
    saveData(){
      this.useStore = userUseStore();
      this.useStore.editUser(parseInt(this.index),this.firstname,this.lastname,this.phonenum,this.role)
      router.push("/");
    }
  }
};
</script>

<style>
</style>