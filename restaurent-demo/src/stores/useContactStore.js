import { defineStore } from 'pinia'

export const useContactStore = defineStore('contacts', {
    state: () => {
        return { contactList: [
            {id: 1, name: 'Mama Bear', title: 'Chef', phone: '555-555-5554', email: 'totallyRealEmail.notFake.com'},
            {id: 2, name: 'Papa Bear', title: 'Manager', phone: '555-555-5555', email: 'totallyRealEmail.notFake.com'},
            {id: 3, name: 'Baby Bear', title: 'Waiter', phone: '555-555-5556', email: 'totallyRealEmail.notFake.com'},         
        ]}
    }
})
