export const state = () => ({
    isClosed: true,

})
export const mutations = {
    toggleSidebar(state){
        state.isClosed = !state.isClosed
    },closeSidebar(state){
        state.isClosed = true
    }
}