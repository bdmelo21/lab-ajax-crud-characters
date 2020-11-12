class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
     return axios.get(`${this.BASE_URL}/characters`)
  }

  getOneRegister (Id) {
    return axios.get(`${this.BASE_URL}/characters/${Id}`)
  }

  createOneRegister (newChar) {
    return axios.post(`${this.BASE_URL}/characters`, newChar)
  }

  updateOneRegister (updateChar) {
    return axios.put(`${this.BASE_URL}/characters/${updateChar.id}`, updateChar)
  }

  deleteOneRegister (id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`);
  }
}
