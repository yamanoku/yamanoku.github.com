import dayjs from 'dayjs'

export const state = () => {
  return {
    currentYear: "",
    pushTime: "",
    createTime: "",
  }
}

export const mutations = {
  GET_CURRENT_YEAR (state, year) {
    state.currentYear = year;
  },
  SET_PUSH_TIME (state, time) {
    state.pushTime = time;
  },
  SET_CREATE_TIME (state, time) {
    state.createTime = time;
  },
}

export const actions = {
  async setDay (ctx) {
    ctx.commit("GET_CURRENT_YEAR", dayjs().year());
    const TOKEN = process.env.PORTFOLIO_API_TOKEN
    const portfolioURL = `https://api.github.com/repos/yamanoku/yamanoku.github.io?access_token=${TOKEN}`
    const portfolioData = await this.$axios.get(portfolioURL).then(response => {
      return response.data;
    });
    ctx.commit("SET_PUSH_TIME", portfolioData.updated_at);
    ctx.commit("SET_CREATE_TIME", portfolioData.created_at);
  }
}
