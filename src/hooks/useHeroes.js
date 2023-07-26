import axios from "axios";
import {useMutation} from "react-query";

const path = `${import.meta.env.VITE_DATABASE}/superheroes`;
export const fetchHeroes = async () => {
    const res = await axios.get(path)
    return res.data

}
export const getHero = async (id) => {
    const res = await axios.get(`${path}/${id}`)
    return res.data
}
export const addHero = async (data) => {
try{
    const res = await axios.post(path,data)
    return res.data
}catch (error) {
    throw new Error('เพิ่มข้อมูลไม่สำเร็จ')
}

}

export const editHero = async (data)=> {
try {
    const res = await axios.patch(`${path}/${data.id}`, data);
    return res.data
}catch (error) {
    throw new Error('แก้ไขข้อมูลไม่สำเร็จ');
}
}
export const deleteHero = async (id) => {
 try {

     const res = await axios.delete(`${path}/${id}`)
     return res.data
 }catch (error) {
     throw new Error('การลบข้อมูลไม่สำเร็จ');
 }
}
