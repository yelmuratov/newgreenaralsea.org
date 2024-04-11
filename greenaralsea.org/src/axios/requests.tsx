import axios from './api';

const Requests = {
    async getTotalTrees() {
        return await axios.get(`donation/total/`);
    },

    async getDonaters ({sort="recent",page=1}) {
        const response = await axios.get(`donation/list/most/${sort}/?page=${page}`);
        return response.data?.results;
    },

    async GetVideosFromsServer(){
        const response = await axios.get(`youtube-link/list/`);
        return response.data;
     },
     
     async getPartners(){
        const response = await axios.get(`partner/list/?format=json`);
        return response.data;
     },
     
    async getGreenChampions (){
        try {
            const response = await axios.get(`green-champion/list/`);
        return response.data;
        } catch (error) {
            console.log(error)
        }
     },
     
    async getArticlesFromServer (){
        const response = await axios.get(`news/list/`);
        return response.data;
     }
}

export default Requests;