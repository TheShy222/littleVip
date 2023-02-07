import type { IAddress } from '@/types/types'
import { Toast } from 'vant'
import { useAddressStore } from '@/stores/address'
export const useAddress = () => {
  const addressStore = useAddressStore()
  const bindBack = () => history.back() // 返回上一页
  const onSave = (content: any) => {
    let Address = null
    if (content.province == content.city) {
      Address = content.province + content.county + content.addressDetail
    } else {
      Address = content.province + content.city + content.county + content.addressDetail
    }
    const addressInfo: IAddress = {
      name: content.name,
      tel: content.tel,
      address: Address,
      isDefault: content.isDefault,
    }
    addressStore.saveAddress(addressInfo)
    Toast({
      message: '保存成功！',
      icon: 'checked',
    })
    bindBack()
  }
  return { bindBack, onSave }
}