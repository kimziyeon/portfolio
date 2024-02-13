import { create } from 'zustand';
import axios from 'axios';

const request = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000
});

export const useStore = create((set)=>{
    return {
        data : [],
        status: false,
        getData: ()=>{
            set({starus :false});
            request.get('/')
                .then(res=>{
                    set({data:res.data, status:true});
                })
        },

        postData: (forms)=>{
            request.post('/',forms)
                .then(res=>{
                    set({data:res.data, status:true});
                })
        },

        putData: (forms)=>{
            request.put('/',forms)
                .then(res=>{
                    set({data:res.data, status:true});
                })
        },

        deleteData: (id)=>{
            request.delete('/',`/${id}`)
                .then(res=>{
                    set({data:res.data, status:true});
                })
        }
    }
})