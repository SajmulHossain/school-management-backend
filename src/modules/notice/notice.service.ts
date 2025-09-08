import { INotice } from "./notice.interface";
import { Notice } from "./notice.model";

const createNotice = async(data: INotice) => {
    return await Notice.create(data);
} 

const getAllNotices = async() => {
    return await Notice.find();
}

export const NoticeService = {
    createNotice,
    getAllNotices
}