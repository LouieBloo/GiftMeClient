export interface WishList {
    _id?:string;
    name?:string;
    owner?:WishListUser;
    items?:WishListItem[];
    dateCreated?:Date;
    finishDate?:Date;
}

export interface WishListItem{
    _id?:string;
    name?:string;
    owner?:WishListUser;
    link?: string;
    description?: string;
    claimedUser?:WishListUser;
    dateCreated?:Date;
    dateClaimed?:Date;
}

export interface WishListUser{
    _id?:string;
    name?:string;
    message?:string;
}