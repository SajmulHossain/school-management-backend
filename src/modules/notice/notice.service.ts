import { INotice } from "./notice.interface";
import { Notice } from "./notice.model";

const createNotice = async(data: INotice) => {
    return await Notice.create(data);
} 

export const NoticeService = {
    createNotice
}