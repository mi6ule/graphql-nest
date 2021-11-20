import { Inject } from "@nestjs/common";
import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver, Subscription } from "@nestjs/graphql";
import { AppService } from "./app.service";
import { Author, Post } from "./app.type";

@Resolver(of => Author)
export class AppResolver {
    constructor(
        private service: AppService,
        @Inject('PUB_SUB')
        private readonly pubSub,
    ) { }

    @Query(returns => Author)
    async author(@Args('id', { type: () => Int }) id: number) {
        return this.service.findOneAuthor(id);
    }

    @ResolveField()
    async posts(@Parent() author: Author) {
        const { id } = author;
        return this.service.findAllPost(id);
    }

    @Mutation(returns => Post)
    async voteUp(@Args({ name: 'postId', type: () => Int }) postId: number) {
        const post = this.service.voteUpById(postId);
        this.pubSub.publish('voteUpped', { voteUpped: post });
        return post;
    }

    @Subscription((returns) => Post, {
        name: 'voteUpped',
    })
    voteUpped() {
        return this.pubSub.asyncIterator('voteUpped');
    }

}