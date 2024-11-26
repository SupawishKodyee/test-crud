import { defineStore } from 'pinia'
export const userUseStore = defineStore('user', {
  // arrow function recommended for full type inference
  state: () => ({
    users: [{
      firstname: 'Supawish',
      lastname: 'Kodyee',
      phonenum: '0835667186',
      role: "Admin",
    }] 
     
  }),
  actions: {
    addUser(firstname,lastname,phonenum,role){
      this.users.push({
        firstname: firstname,
        lastname: lastname,
        phonenum: phonenum,
        role: role,
      })
    },
    editUser(index,firstname,lastname,phonenum,role){
      this.users[index].firstname = firstname
      this.users[index].lastname = lastname
      this.users[index].phonenum = phonenum
      this.users[index].role = role
    },
    deleteUser(index){
      this.users.splice(index, 1)
    }
  }
})

