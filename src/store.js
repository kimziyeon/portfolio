import { create } from 'zustand';
import axios from 'axios';

const request = axios.create({
    baseURL: 'https://kimziyeon-portfolio.vercel.app/portfolio',
    timeout: 1000
});

export const useStore = create((set) => {
    return {
        data: [],
        status: false,
        getData: () => {
            set({ status: false });
            request.get('/')
                .then(res => {
                    set({ data: res.data, status: true });
                })
        },
        postData: (forms) => {
            set({ status: false });
            request.post('/insert', forms)
                .then(res => {
                    set({ data: res.data, status: true });
                })
        },
        deleteData: (num) => {
            set({ status: false });
            request.delete(`/delete?num=${num}`)
                .then(res => {
                    set({ data: res.data, status: true });
                })
        }
    }
})