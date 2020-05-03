import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

export interface WishList {
    _id?:string;
    name?:string;
    owner?:WishListUser;
    items?:WishListItem[];
    address?:Date;
    dateCreated?:Date;
    finishDate?:any;
    datePickerDate?:NgbDate;
    showToolTip?:boolean;
}

export interface WishListItem{
    _id?:string;
    name?:string;
    owner?:WishListUser;
    link?: string;
    listId?: string;
    description?: string;
    icon?:string;
    claimedUser?:WishListUser;
    dateCreated?:Date;
    dateClaimed?:Date;
}

export interface WishListUser{
    _id?:string;
    name?:string;
    message?:string;
}