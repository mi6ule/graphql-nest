
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface Author {
    firstName?: Nullable<string>;
    id: number;
    lastName?: Nullable<string>;
    posts: Post[];
}

export interface IMutation {
    voteUp(postId: number): Post | Promise<Post>;
}

export interface Post {
    id: number;
    title: string;
    votes?: Nullable<number>;
}

export interface IQuery {
    author(id: number): Author | Promise<Author>;
}

export interface ISubscription {
    voteUpped(): Post | Promise<Post>;
}

type Nullable<T> = T | null;
