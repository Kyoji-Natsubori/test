import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum PostStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE"
}



export declare class Post {
  readonly id: string;
  readonly title: string;
  readonly rating: number;
  readonly status: PostStatus | keyof typeof PostStatus;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Post>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}