class BaseApi {
  BASE_URL = 'url/placeholder'

  async get() {
    try {
      const response = await fetch(this.BASE_URL);
      const json = await response.json();

      return json;
    } catch (err) {
      throw(err);
    }
  }

  async post(payload) {
    try {
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
    } catch (err) {
      throw(err);
    }
  }

  async put(payload) {
    try {
      await fetch(url + `/${payload.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
    } catch (err) {
      throw(err);
    }
  }

  async delete(id) {
     try {
      await fetch(url + `/${id}`, {
        method: 'DELETE',
      });
    } catch (err) {
      throw(err);
    }
  }
}