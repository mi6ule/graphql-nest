import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  static authors = [{ id: 1, firstName: "Kasra", lastName: "Karami" }, { id: 2, firstName: "Maytham", lastName: "Mohamadi" }];
  static posts = [{ id: 11, title: "Kafka course", votes: 12, authorId: 1 }, { id: 12, title: "Graphql course", votes: 12, authorId: 2 }];
  findOneAuthor(id: number) {
    return AppService.authors.find(author => author.id == id);
  }

  findAllPost(authorId: number) {
    return AppService.posts.filter(post => post.authorId == authorId);
  }

  voteUpById(postId: number) {
    const post = AppService.posts.find(post => post.id == postId);
    post.votes += 1;
    return post;
  }
}
