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
    subscribers?:ListSubscriber[]
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
    purchased?:any;
}

export interface WishListUser{
    _id?:string;
    name?:string;
    dateClaimed?:Date;
}

export interface ListSubscriber{
    userId?:string;
    subscribedOn?:Date;
}