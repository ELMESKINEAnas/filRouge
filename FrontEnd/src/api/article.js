import axios from 'axios';



const articleApi = axios.create({
    baseURL: 'http://localhost:4001/api/article',
})


export const getAllArticle = async () => {
    const response = await articleApi.get('/getAllArticle');
    return response.data;
}

export const addArticle = async (data) => {
    return await articleApi.post('/addArticle', data);
}

export const updateArticle = async (data) => {
    return await articleApi.patch(`/updateArticle/${data.id}`, data);
}

export const deleteArticle = async ({id}) => {
    return await articleApi.delete(`/deleteArticle/${id}`, id);
}

export default articleApi