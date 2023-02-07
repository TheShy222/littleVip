import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'

const storeRoot = createPinia()
storeRoot.use(piniaPluginPersist)
export default storeRoot
