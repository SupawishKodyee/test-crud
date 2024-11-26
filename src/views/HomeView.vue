<template>
  <div class="mx-10 h-full">
    <!-- <h1>Homepage</h1> -->
    <div class="flex my-3 border-2 p-3 rounded-md drop-shadow-md border-gray-300">
      <h1 class="mx-3 content-center text-2xl font-bold">เพิ่มผู้ใช้</h1>
      <h1 class="ml-auto content-center">ชื่อ</h1>
      <input v-model="firstname" class="mx-3 border-2 p-1 drop-shadow-md rounded-lg" type="text" />
      <h1 class="ml-auto content-center">นามสกุล</h1>
      <input v-model="lastname" class="mx-3 border-2 p-1 drop-shadow-md rounded-lg" type="text" />
      <h1 class="ml-auto content-center">เบอร์โทรศัพท์</h1>
      <input v-model="phonenum" class="mx-3 border-2 p-1 drop-shadow-md rounded-lg" type="text" />
      <h1 class="ml-auto content-center">ตำแหน่ง</h1>
      <input v-model="role" class="mx-3 border-2 p-1 drop-shadow-md rounded-lg" type="text" />
      <button
        class="py-2 px-10 border-2 bg-green-600 rounded-lg text-white cursor-pointer drop-shadow-md border-green-600"
        @click="addUser()"
      >เพิ่ม</button>
    </div>
    <div class="border-2 p-3 rounded-md drop-shadow-md border-gray-300 h-full">
      <h1 class="text-2xl font-bold my-3">รายชื่อผู้ใช้งาน</h1>
      <table class="table-auto border-none w-full">
        <thead>
          <tr class="bg-gray-500">
            <th class="py-2 border-r-2 text-white w-5 px-5">ลำดับที่</th>
            <th class="py-2 border-r-2 text-white">ชื่อ</th>
            <th class="py-2 border-r-2 text-white">เบอร์โทรศัพท์</th>
            <th class="py-2 border-r-2 text-white">ตำแหน่ง</th>
            <th class="py-2 border-r-2 text-white w-3 px-2">แก้ไข</th>
            <th class="py-2 text-white w-20">ลบผู้ใช้</th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr>
          <td>{{ users.name }}</td>
          <td>{{ users.role }}</td>
          </tr>-->
          <tr v-for="(item, index ) in allUser" :key="index" class="bg-gray-300">
            <td class="text-center py-2 border-r-2">{{ index+1 }}</td>
            <td class="py-2 border-r-2 pl-2">{{ item.firstname+" "+item.lastname }}</td>
            <td class="py-2 border-r-2 pl-2">{{ item.phonenum }}</td>
            <td class="py-2 border-r-2 pl-2">{{ item.role }}</td>
            <td class="text-center py-2 border-r-2">
              <router-link :to="{name: 'editprofile', params: {id:index}}">
                <span class="material-symbols-outlined">edit</span>
              </router-link>
            </td>
            <td class="text-center">
              <button @click="deleteUser(index)">
                <span class="material-symbols-outlined">delete</span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- <router-link to="/about">
      <button>about</button>
    </router-link>-->
  </div>
</template>

<script>
import { userUseStore } from "@/store/user";
export default {
  name: "HomeView",
  data() {
    return {
      firstname: "",
      lastname: "",
      phonenum: "",
      role: "",
      allUser: "",
      useStore: ""
    };
  },
  components: {},
  created() {
    this.useStore = userUseStore();
    console.log(this.useStore.users);
    this.allUser = this.useStore.users;
    return this.allUser;
  },
  methods: {
    addUser() {
      this.useStore.addUser(
        this.firstname,
        this.lastname,
        this.phonenum,
        this.role
      );
      this.userid = "";
      (this.firstname = ""),
        (this.lastname = ""),
        (this.role = ""),
        console.log("add success");
    },
    deleteUser(index) {
      this.useStore.deleteUser(index);
    }
  }
};
</script>
