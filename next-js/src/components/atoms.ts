import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const countState = atom({
  key:"count",
  default: 0
})

export const userState = atom({
  key:"user",
  default:{
    name:'hoge',
    age:11
  },
  effects_UNSTABLE: [persistAtom] //追加
})
